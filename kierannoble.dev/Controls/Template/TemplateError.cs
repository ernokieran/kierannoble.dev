namespace kierannoble.dev.Controls.Template;

[HtmlTargetElement(TAG_NAME)]
public class TemplateError : BaseTemplate
{
    internal const string TAG_NAME = "template:error";
    
    public TemplateError(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

    protected override bool ShowActions => false;
}