namespace kierannoble.dev.Controls.Media;

[HtmlTargetElement(TAG_NAME)]
public class Image : TagHelperBase
{
    private readonly IImageManager __ImageManager;
    private const string TAG_NAME = "media:image";
    
    public Image(IHttpContextAccessor httpContextAccessor, IImageManager imageManager) : base(httpContextAccessor) => __ImageManager = imageManager;

    public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
    {
        if (string.IsNullOrWhiteSpace(Path))
        {
            throw new ArgumentException($"You must provide a {nameof(Path)}.");
        }
        
        if (!Width.HasValue && !Height.HasValue)
        {
            throw new ArgumentException($"You must provide either {nameof(Width)} or {nameof(Height)}.");
        }
        
        if (Width.HasValue && Height.HasValue)
        {
            throw new ArgumentException($"Only one of {nameof(Width)} or {nameof(Height)} should be provided.");
        }

        if (string.IsNullOrWhiteSpace(AltText))
        {
            throw new ArgumentException($"You must provide an {nameof(AltText)}.");
        }
        
        ImageEntity? _Image = await __ImageManager.GetImageAsync(Path);
        
        if (_Image == null)
        {
            throw new InvalidOperationException("Image not found");
        }
        
        if (Width.HasValue)
        {
            Height = (int)Math.Round(Width!.Value / _Image.Ratio);
        }
        else
        {
            Width = (int)Math.Round(Height!.Value * _Image.Ratio);
        }
        
        output.TagName = "img";
        
        output.Attributes.SetAttribute("src", $"/api/image/resize/width={Width},height={Height}{Path}");
        output.Attributes.SetAttribute("width", $"{Width}px");
        output.Attributes.SetAttribute("height", $"{Height}px");
        output.Attributes.SetAttribute("class", "image");
        output.Attributes.SetAttribute("alt", AltText);
        output.Attributes.SetAttribute("loading", "lazy");
        output.Attributes.SetAttribute("decoding", "async");
        output.Attributes.SetAttribute("style", $"--w: {Width}; --h: {Height};");
    }

    public required string Path { get; set; }
    public required string AltText { get; set; }
    public required decimal? Width { get; set; } = 800;
    public required decimal? Height { get; set; }
}