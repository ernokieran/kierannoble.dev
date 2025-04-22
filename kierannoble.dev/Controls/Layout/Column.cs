namespace kierannoble.dev.Controls.Layout;

[HtmlTargetElement(TAG_NAME)]
public class Column : TagHelperBase
{
    private const string TAG_NAME = "layout:column";

    public Column(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Attributes.SetAttribute("class", ClassName);
    }

    private static string ClassName => "layout__column";
}