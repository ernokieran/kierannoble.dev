namespace kierannoble.dev.Managers.Media;

public class SlideshowMediaManager : ISlideshowMediaManager
{
    private readonly IImageManager __ImageManager;

    public SlideshowMediaManager(IImageManager imageManager) => __ImageManager = imageManager;

    private async Task<SlideshowImageEntity> GetFileDataAsync(string path)
    {
        ImageEntity _Image = await __ImageManager.GetImageAsync(path);

        if (_Image == null)
        {
            throw new FileNotFoundException($"Image not found: {path}");
        }

        return new SlideshowImageEntity
        {
            Ratio = _Image.Ratio,
            URL = path
        };
    }

    public async Task<List<SlideshowImageEntity>> GetImagesAsync(List<string> paths)
        => [.. await Task.WhenAll(paths.Select(GetFileDataAsync))];
}