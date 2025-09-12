namespace kierannoble.dev.Managers.Media;

public interface IImageManager
{
    Task<ImageEntity> GetImageAsync(string path);
    Task<string> ResizeImageAsync(string path, ImageResizeOptions options);
}