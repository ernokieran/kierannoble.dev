using kierannoble.dev.Controls.Media;
using Image = SixLabors.ImageSharp.Image;

namespace kierannoble.dev.Managers.Media;

public class SlideshowMediaManager : ISlideshowMediaManager
{
    private readonly IWebHostEnvironment __WebHostEnvironment;
    public SlideshowMediaManager(IWebHostEnvironment webHostEnvironment) => __WebHostEnvironment  = webHostEnvironment;

    private async Task<SlideshowImageEntity> GetFileDataAsync(string path)
    {
        string _FilePath = path;
        
        if (path.StartsWith("/") || path.StartsWith("\\"))
        {
            _FilePath = path.Substring(1);
        }
            
        Image _Image = await Image.LoadAsync(Path.Combine(__WebHostEnvironment.WebRootPath, _FilePath));

        return new SlideshowImageEntity
        {
            Ratio = decimal.Divide(_Image.Width, _Image.Height),
            URL = path
        };
    }
    
    public async Task<List<SlideshowImageEntity>> GetImagesAsync(List<string> paths)
    {
        List<Task<SlideshowImageEntity>> _Tasks = paths.Select(GetFileDataAsync).ToList();
        
        await Task.WhenAll(_Tasks);
        
        return _Tasks.Select(task => task.Result).ToList();
    }
}