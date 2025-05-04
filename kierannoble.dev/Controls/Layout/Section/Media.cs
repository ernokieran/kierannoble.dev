using System.Text.Json;

namespace kierannoble.dev.Controls.Layout.Section;

[HtmlTargetElement(TAG_NAME)]
public class Media : TagHelperBase
{
    private const string TAG_NAME = "section:media";

    public Media(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) {}

    public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Attributes.SetAttribute("class", Full ? "section__media section__media--full" : "section__media");
        output.Attributes.SetAttribute("tabindex", 0);

        if (Slideshow is not null)
        {
            output.Attributes.SetAttribute("data-slideshow", JsonSerializer.Serialize(Slideshow));
        }

        output.Content.AppendHtml(await GetChildContentAsync(output));

        if (Slideshow is not null)
        {
            output.Content.AppendHtml("""
                                        <div class="section__media-action">
                                            <p class="section__media-action-tooltip">View Media</p>
                                            <div class="section__media-action-button">
                                                <i class="fa fa-arrow-right"></i>
                                            </div>
                                        </div>
                                      """);
        }
    }

    public SlideshowEntity Slideshow { get; set; }

    public bool Full { get; set; }
}