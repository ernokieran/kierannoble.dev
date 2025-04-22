using kierannoble.dev.Controls.Media;

namespace kierannoble.dev.Managers.Media;

public interface ISlideshowMediaManager
{
    public Task<List<SlideshowImageEntity>> GetImagesAsync(List<string> paths);
}