namespace kierannoble.dev.Controls.Media;

[HtmlTargetElement(TAG_NAME)]
public class Image : TagHelperBase
{
    internal const string TAG_NAME = "media:image";

    public Image(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "img";
        
        output.Attributes.SetAttribute("src", $"/api/image/resize/width={Width},height={Height}{URL}");
        output.Attributes.SetAttribute("width", $"{Width}px");
        output.Attributes.SetAttribute("height", $"{Height}px");
        output.Attributes.SetAttribute("class", "image");
        output.Attributes.SetAttribute("alt", AltText);
        output.Attributes.SetAttribute("loading", "loading");
        output.Attributes.SetAttribute("decoding", "sync");
        output.Attributes.SetAttribute("style", $"--w: {Width}; --h: {Height};");
    }

    public required string URL { get; set; }
    public required string AltText { get; set; }
    public required decimal Width { get; set; } = 800;
    public required decimal Height { get; set; } = 450;
}