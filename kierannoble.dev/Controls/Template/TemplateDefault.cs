namespace kierannoble.dev.Controls.Template;

[HtmlTargetElement(TAG_NAME)]
public class TemplateDefault : BaseTemplate
{
    internal const string TAG_NAME = "template:default";

    public TemplateDefault(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) {}
}