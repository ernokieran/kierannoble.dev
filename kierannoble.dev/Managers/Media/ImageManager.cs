using System.Collections.Concurrent;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using Image = SixLabors.ImageSharp.Image;

namespace kierannoble.dev.Managers.Media;

public class ImageManager : IImageManager
{
    private static readonly ConcurrentDictionary<string, ImageEntity> __Images = new();
    private readonly IWebHostEnvironment __WebHostEnvironment;
    private static readonly DecoderOptions __DecoderOptions = new()
    {
        Configuration = Configuration.Default
    };
    public ImageManager(IWebHostEnvironment webHostEnvironment)
        => __WebHostEnvironment = webHostEnvironment;
    
    public async Task<ImageEntity> GetImageAsync(string path)
    {
        if (__Images.TryGetValue(path, out ImageEntity _ImageEntity))
        {
            return _ImageEntity;
        }
        
        string _FilePath = path;
        
        if (_FilePath.StartsWith('/') || _FilePath.StartsWith('\\'))
        {
            _FilePath = _FilePath[1..];
        }

        _FilePath = Path.Combine(__WebHostEnvironment.WebRootPath, _FilePath);
        
        ImageInfo _ImageInfo = await Image.IdentifyAsync(__DecoderOptions, _FilePath);

        if (_ImageInfo == null)
        {
            throw new FileNotFoundException(path);
        }

        ImageEntity _NewImageEntity = new()
        {
            Width = _ImageInfo.Width,
            Height = _ImageInfo.Height
        };
        
        __Images.TryAdd(path, _NewImageEntity);

        return _NewImageEntity;
    }
}