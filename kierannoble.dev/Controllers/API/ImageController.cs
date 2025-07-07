using System.Collections.Concurrent;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.Formats.Webp;
using SixLabors.ImageSharp.Processing;
using Image = SixLabors.ImageSharp.Image;

namespace kierannoble.dev.Controllers.API;

// int originalWidth = image.Width;
// int originalHeight = image.Height;
//
// // Calculate scaling ratio
// double ratioX = (double)maxWidth / originalWidth;
// double ratioY = (double)maxHeight / originalHeight;
// double ratio = Math.Min(ratioX, ratioY);
//
// // Only scale down
// if (ratio >= 1)
// {
//     // Save original if no scaling is needed
//     image.Save(outputPath);
//     return;
// }
//
// int newWidth = (int)(originalWidth * ratio);
// int newHeight = (int)(originalHeight * ratio);

//TODOK, this need some rate limiting
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    private const int DEFAULT_QUALITY = 90;

    private static readonly List<string> __AllowedOptions = ["width", "height", "quality"];
    private readonly IWebHostEnvironment __WebHostEnvironment;
    private static readonly string __CacheControlHeaderValue = $"public, max-age={60 * 60 * 24 * 7}";

    private static readonly ConcurrentDictionary<string, byte[]> __CachedImages = new();

    private static readonly DecoderOptions __DecoderOptions = new()
    {
        Configuration = Configuration.Default
    };
    public ImageController(IWebHostEnvironment webHostEnvironment) => __WebHostEnvironment = webHostEnvironment;
    private bool ParseOption(Dictionary<string, string> options, string optionName, int comparisonProperty, out int parsedOption)
    {
        parsedOption = 0;

        if (!options.TryGetValue(optionName, out string _OptionValue))
        {
            return true;
        }

        if (!int.TryParse(_OptionValue, out int _Value))
        {
            return false;
        }

        if (_Value < comparisonProperty)
        {
            parsedOption = _Value;
        }

        return true;
    }

    [HttpGet("resize/{options}/{*path}")]
    public async Task<IActionResult> ResizeImageAsync(string path, string options)
    {
        Dictionary<string, string> _Options = new();

        try
        {
            string[] _OptionKeyValues = options.Split(',');

            if (_OptionKeyValues.Length == 0)
            {
                return BadRequest();
            }

            foreach (string _OptionKeyValue in _OptionKeyValues)
            {
                string[] _KeyValue = _OptionKeyValue.Split('=');

                if (_KeyValue.Length != 2 || !__AllowedOptions.Contains(_KeyValue[0]))
                {
                    return BadRequest();
                }

                _Options.Add(_KeyValue[0]!, _KeyValue[1]);
            }

            _Options = new Dictionary<string, string>(_Options.OrderBy(x => x.Key).ToArray());
        }
        catch (Exception)
        {
            return BadRequest();
        }

        string _OptionsKey = string.Join(", ", _Options.Select(x => $"{x.Key}={x.Value}"));
        
        string _CacheKey = $"image:resize:{_OptionsKey}:{path}";
        
        if (__CachedImages.TryGetValue(_CacheKey, out byte[] _CachedImage))
        {
            Response.Headers.Append("Cache-Control", __CacheControlHeaderValue);
            return File(_CachedImage, "image/webp");
        }

        try
        {
            string _FilePath = Path.Combine(__WebHostEnvironment.WebRootPath, path);
            
            using Image _Image = await Image.LoadAsync(__DecoderOptions, _FilePath);
            
            if (_Image == null)
            {
                return NotFound("Image not found.");
            }

            int _Width = _Image.Width;
            int _Height;

            //TODOK, this needs work

            if (ParseOption(_Options, "width", _Image.Width, out int _ParsedWidth) && ParseOption(_Options, "height", _Image.Height, out int _ParsedHeight))
            {
                _Width = _ParsedWidth;
                _Height = _ParsedHeight;
            }
            else
            {
                return BadRequest();
            }

            if (_Width > 0 || _Height > 0)
            {
                _Image.Mutate(x => x.Resize(_Width, _Height));
            }

            int _Quality = _Options.TryGetValue("quality", out string _QualityValue) && int.TryParse(_QualityValue, out int _QualityResult) ? _QualityResult : DEFAULT_QUALITY;

            IImageEncoder _Encoder = new WebpEncoder { Quality = _Quality };

            using MemoryStream _MemoryStream = new();
            await _Image.SaveAsync(_MemoryStream, _Encoder);
            _MemoryStream.Seek(0, SeekOrigin.Begin);
            
            byte[] _ImageBytes = _MemoryStream.ToArray();
            
            __CachedImages.TryAdd(_CacheKey, _ImageBytes);

            Response.Headers.Append("Cache-Control", __CacheControlHeaderValue);

            return File(_ImageBytes, "image/webp");
        }
        catch (Exception _Ex)
        {
            return BadRequest($"Error processing image: {_Ex.Message}");
        }
    }
}