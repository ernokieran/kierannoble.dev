namespace kierannoble.dev.Controls.Layout.Section;

[HtmlTargetElement(TAG_NAME)]
public class Section : TagHelperBase
{
    private const string TAG_NAME = "layout:section";

    public Section(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) {}

    public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Attributes.SetAttribute("class", GetStyleClasses());
        output.PreContent.AppendHtml("""<div class="section__content layout layout__column layout--small">""");
        string _ChildContent = await GetChildContentAsync(output);

        if (!string.IsNullOrWhiteSpace(Title))
        {
            output.Content.AppendHtml($"""<h1 class="section__title">{Title}</h1>""");
        }

        if (!string.IsNullOrWhiteSpace(LogoURL))
        {
            output.Content.AppendHtml($"""<img class="section__logo" src="{LogoURL}" alt="{Title}" width="300" height="50" loading="lazy" decoding="async" />""");
        }

        if (!string.IsNullOrWhiteSpace(SubTitle))
        {
            output.Content.AppendHtml($"""<h2 class="section__subtitle">{SubTitle}</h2>""");
        }

        output.Content.AppendHtml(_ChildContent);
        output.PostContent.AppendHtml("</div>");
    }

    private string GetStyleClasses() => $"section {ToClass(Type)} {ToClass(Alignment)}";

    private static string ToClass(SectionType type) => type switch
    {
        SectionType.Primary => "section--primary",
        SectionType.Secondary => "section--secondary",
        SectionType.Tertiary => "section--tertiary",
        _ => string.Empty
    };

    private static string ToClass(SectionAlignment alignment) => alignment switch
    {
        SectionAlignment.Centered => "section--centered",
        SectionAlignment.Right => "section--right",
        _ => string.Empty
    };

    public SectionAlignment Alignment { get; set; } = SectionAlignment.Left;
    public SectionType Type { get; set; } = SectionType.None;
    public string Title { get; set; }
    public string LogoURL { get; set; }
    public string SubTitle { get; set; }
}