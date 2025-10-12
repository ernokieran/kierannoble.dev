using System.Net;
using System.Collections.Concurrent;
using Microsoft.Extensions.Options;
using Minio;
using Minio.DataModel.Args;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Webp;
using SixLabors.ImageSharp.Processing;
using Image = SixLabors.ImageSharp.Image;

namespace kierannoble.dev.Managers.Media;

public class ImageManager : IImageManager
{
    private const int DEFAULT_QUALITY = 100;
    private const int CDN_CHECK_TIMEOUT_MS = 1500;
    private const int MAX_CONCURRENT_OPERATIONS = 4;

    private static readonly SemaphoreSlim __Semaphore = new(MAX_CONCURRENT_OPERATIONS);
    private readonly string __WebRootPath;
    private readonly HttpClient __HttpClient;
    private static readonly ConcurrentDictionary<string, string> __CdnImages = new();
    private static readonly ConcurrentDictionary<string, Task<string>> __PendingUploads = new();
    private readonly IMinioClient __MinioClient;
    private readonly R2StorageOptions __R2Options;

    public ImageManager(IWebHostEnvironment webHostEnvironment, IHttpClientFactory httpClientFactory, IOptions<R2StorageOptions> r2Options)
    {
        __WebRootPath = webHostEnvironment.WebRootPath;
        __HttpClient = httpClientFactory.CreateClient();
        __HttpClient.Timeout = TimeSpan.FromMilliseconds(CDN_CHECK_TIMEOUT_MS);
        __R2Options = r2Options.Value;

        __MinioClient = new MinioClient()
            .WithEndpoint(__R2Options.Endpoint)
            .WithCredentials(__R2Options.AccessKey, __R2Options.SecretKey)
            .WithSSL()
            .Build();
    }

    public async Task<ImageEntity> GetImageAsync(string path)
    {
        string _FilePath = Path.Combine(__WebRootPath, path.TrimStart('/', '\\'));

        try
        {
            await __Semaphore.WaitAsync();

            ImageInfo _ImageInfo = await Image.IdentifyAsync(_FilePath) ?? throw new FileNotFoundException(path);
            
            return new ImageEntity
            {
                Width = _ImageInfo.Width,
                Height = _ImageInfo.Height
            };
        }
        finally
        {
            __Semaphore.Release();
        }
    }

    public async Task<string> ResizeImageAsync(string path, ImageResizeOptions options)
    {
        int _Width = options.Width.GetValueOrDefault();
        int _Height = options.Height.GetValueOrDefault();
        int _Quality = options.Quality.GetValueOrDefault();
        _Quality = _Quality is <= 0 or > 100 ? DEFAULT_QUALITY : _Quality;
        
        string _SafeFileName = path.Replace('/', '_').Replace('\\', '_');
        string _CacheKeyPrefix = $"{_SafeFileName}_{_Width}x{_Height}_q{_Quality}";

        foreach (var _Key in __CdnImages.Keys)
        {
            if (_Key.StartsWith(_CacheKeyPrefix) && __CdnImages.TryGetValue(_Key, out string _CachedPath))
            {
                return _CachedPath;
            }
        }

        string _OriginalFilePath = Path.Combine(__WebRootPath, path.Replace('/', Path.DirectorySeparatorChar));
        if (!File.Exists(_OriginalFilePath))
        {
            throw new FileNotFoundException($"Image not found: {path}");
        }

        FileInfo _FileInfo = new(_OriginalFilePath);
        string _Fingerprint = $"{_FileInfo.Length:x}_{_FileInfo.LastWriteTimeUtc.Ticks:x}";
        string _CacheFileName = $"{_SafeFileName}_{_Fingerprint}_{_Width}x{_Height}_q{_Quality}.webp";
        string _CdnPath = $"{__R2Options.CdnBaseUrl}/{_CacheFileName}";

        if (__CdnImages.TryGetValue(_CacheFileName, out string _ExactCachedPath))
        {
            return _ExactCachedPath;
        }

        Task<string> _UploadTask = __PendingUploads.GetOrAdd(_CacheFileName, async _ =>
        {
            try
            {
                bool _ExistsOnCdn = await CheckCdnExistsAsync(_CdnPath);
                if (_ExistsOnCdn)
                {
                    __CdnImages.TryAdd(_CacheFileName, _CdnPath);
                    return _CdnPath;
                }

                await __Semaphore.WaitAsync();
                try
                {
                    using Image _Image = await Image.LoadAsync(_OriginalFilePath);

                    if (_Width <= 0) _Width = _Image.Width;
                    if (_Height <= 0) _Height = _Image.Height;

                    _Image.Mutate(x => x.Resize(new ResizeOptions
                    {
                        Size = new Size(_Width, _Height),
                        Mode = ResizeMode.Max
                    }));

                    using MemoryStream _MemoryStream = new();
                    await _Image.SaveAsWebpAsync(_MemoryStream, new WebpEncoder { Quality = _Quality });
                    byte[] _ImageBytes = _MemoryStream.ToArray();

                    using MemoryStream _UploadStream = new(_ImageBytes);
                    PutObjectArgs _PutArgs = new PutObjectArgs()
                        .WithBucket(__R2Options.BucketName)
                        .WithObject($"images/{_CacheFileName}")
                        .WithStreamData(_UploadStream)
                        .WithObjectSize(_ImageBytes.Length)
                        .WithContentType("image/webp");

                    await __MinioClient.PutObjectAsync(_PutArgs);

                    __CdnImages.TryAdd(_CacheFileName, _CdnPath);
                    return _CdnPath;
                }
                finally
                {
                    __Semaphore.Release();
                }
            }
            finally
            {
                __PendingUploads.TryRemove(_CacheFileName, out Task<string> _);
            }
        });

        return await _UploadTask;
    }

    private async Task<bool> CheckCdnExistsAsync(string cdnPath)
    {
        try
        {
            using HttpRequestMessage _Request = new(HttpMethod.Head, cdnPath);
            HttpResponseMessage _Response = await __HttpClient.SendAsync(_Request, HttpCompletionOption.ResponseHeadersRead);
            
            return _Response.StatusCode == HttpStatusCode.OK;
        }
        catch
        {
            return false;
        }
    }
}