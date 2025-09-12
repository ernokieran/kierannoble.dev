namespace kierannoble.dev.Controllers.API;

[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    private static readonly string __CacheControlHeaderValue = $"public, max-age={60 * 60 * 24 * 7}";
    private readonly IImageManager __ImageManager;

    public ImageController(IImageManager imageManager) => __ImageManager = imageManager;

    [HttpGet("resize/{options}/{*path}")]
    public async Task<IActionResult> ResizeImageAsync(string path, string options)
    {
        if (string.IsNullOrWhiteSpace(path) || string.IsNullOrWhiteSpace(options))
        {
            return BadRequest("Path and options are required.");
        }

        ImageResizeOptions _Options = new();

        foreach (string _OptionKeyValue in options.Split(',', StringSplitOptions.RemoveEmptyEntries))
        {
            string[] _KeyValue = _OptionKeyValue.Split('=');
            if (_KeyValue.Length != 2)
            {
                return BadRequest("Invalid option format.");
            }

            string _Key = _KeyValue[0].ToLowerInvariant();
            string _Value = _KeyValue[1];

            if (_Key == "width" && int.TryParse(_Value, out int _Width)) _Options.Width = _Width;
            if (_Key == "height" && int.TryParse(_Value, out int _Height)) _Options.Height = _Height;
            if (_Key == "quality" && int.TryParse(_Value, out int _Quality)) _Options.Quality = _Quality;
        }

        string _ResizedImagePath = await __ImageManager.ResizeImageAsync(path, _Options);
        Response.Headers.Append("Cache-Control", __CacheControlHeaderValue);
        return PhysicalFile(_ResizedImagePath, "image/webp");
    }
}
