namespace kierannoble.dev.Controls.Layout;

[HtmlTargetElement(TAG_NAME)]
public class Row : TagHelperBase
{
    internal const string TAG_NAME = "layout:row";

    public Row(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) {}

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Attributes.SetAttribute("class", ClassName);
    }

    private string ClassName
        => Equal
            ? "layout__row layout__row--equal"
            : "layout__row";

    public bool Equal { get; set; }
}