using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.Formats.Webp;
using SixLabors.ImageSharp.Processing;
using Image = SixLabors.ImageSharp.Image;

namespace kierannoble.dev.Managers.Media;

public class ImageManager : IImageManager
{
    private const int DEFAULT_QUALITY = 100;

    private static readonly DecoderOptions __DecoderOptions = new()
    {
        Configuration = Configuration.Default
    };
    private static readonly SemaphoreSlim __Semaphore = new(Environment.ProcessorCount);
    private readonly string __WebRootPath;

    public ImageManager(IWebHostEnvironment webHostEnvironment)
        => __WebRootPath = webHostEnvironment.WebRootPath;

    public async Task<ImageEntity> GetImageAsync(string path)
    {
        string _FilePath = path;

        if (_FilePath.StartsWith('/') || _FilePath.StartsWith('\\'))
        {
            _FilePath = _FilePath[1..];
        }

        _FilePath = Path.Combine(__WebRootPath, _FilePath);

        try
        {
            await __Semaphore.WaitAsync();

            ImageInfo _ImageInfo = await Image.IdentifyAsync(__DecoderOptions, _FilePath) ?? throw new FileNotFoundException(path);
            ImageEntity _NewImageEntity = new()
            {
                Width = _ImageInfo.Width,
                Height = _ImageInfo.Height
            };

            return _NewImageEntity;
        }
        finally
        {
            __Semaphore.Release();
        }
    }

    public async Task<string> ResizeImageAsync(string path, ImageResizeOptions options)
    {
        string _OriginalFilePath = Path.Combine(__WebRootPath, path.Replace('/', Path.DirectorySeparatorChar));
        if (!File.Exists(_OriginalFilePath))
        {
            throw new FileNotFoundException($"Image not found: {path}");
        }

        FileInfo _FileInfo = new(_OriginalFilePath);
        string _Fingerprint = $"{_FileInfo.Length:x}_{_FileInfo.LastWriteTimeUtc.Ticks:x}";
        int _Width = options.Width.GetValueOrDefault();
        int _Height = options.Height.GetValueOrDefault();
        int _Quality = options.Quality.GetValueOrDefault();
        _Quality = _Quality is <= 0 or > 100 ? DEFAULT_QUALITY : _Quality;

        string _CacheDir = Path.Combine(__WebRootPath, "image_cache");
        Directory.CreateDirectory(_CacheDir);

        string _SafeFileName = path.Replace('/', '_').Replace('\\', '_');
        string _CacheFileName = $"{_SafeFileName}_{_Fingerprint}_{_Width}x{_Height}_q{_Quality}.webp";
        string _CacheFilePath = Path.Combine(_CacheDir, _CacheFileName);

        if (File.Exists(_CacheFilePath))
        {
            return _CacheFilePath;
        }

        try
        {
            await __Semaphore.WaitAsync();

            using Image _Image = await Image.LoadAsync(_OriginalFilePath);

            if (_Width <= 0) _Width = _Image.Width;
            if (_Height <= 0) _Height = _Image.Height;

            ResizeOptions _ResizeOptions = new()
            {
                Size = new Size(_Width, _Height),
                Mode = ResizeMode.Max
            };

            _Image.Mutate(x => x.Resize(_ResizeOptions));

            ImageEncoder _Encoder = new WebpEncoder { Quality = _Quality };

            await _Image.SaveAsync(_CacheFilePath, _Encoder);

            return _CacheFilePath;
        }
        finally
        {
            __Semaphore.Release();
        }
    }
}