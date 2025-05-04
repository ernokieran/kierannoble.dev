using System.Collections.Concurrent;
using Image = SixLabors.ImageSharp.Image;

namespace kierannoble.dev.Managers.Media;

public class ImageManager : IImageManager
{
    private static readonly ConcurrentDictionary<string, ImageEntity> __Images = new();
    private readonly IWebHostEnvironment __WebHostEnvironment;
    public ImageManager(IWebHostEnvironment webHostEnvironment) => __WebHostEnvironment = webHostEnvironment;
    
    public async Task<ImageEntity?> GetImageAsync(string path)
    {
       
        if (__Images.TryGetValue(path, out ImageEntity? _ImageEntity))
        {
            return _ImageEntity;
        }
        
        string _FilePath = path;
        
        if (_FilePath.StartsWith('/') || _FilePath.StartsWith('\\'))
        {
            _FilePath = _FilePath[1..];
        }
        
        using Image _Image = await Image.LoadAsync(Path.Combine(__WebHostEnvironment.WebRootPath, _FilePath));

        if (_Image == null)
        {
            throw new FileNotFoundException(path);
        }

        ImageEntity _NewImageEntity = new()
        {
            Width = _Image.Width,
            Height = _Image.Height
        };
        
        __Images.TryAdd(path, _NewImageEntity);

        return _NewImageEntity;
    }
}