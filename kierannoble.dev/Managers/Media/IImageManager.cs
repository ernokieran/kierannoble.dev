namespace kierannoble.dev.Managers.Media;

public interface IImageManager
{
    Task<ImageEntity?> GetImageAsync(string path);
}