using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace kierannoble.dev.Controls;

public abstract class TagHelperBase : TagHelper
{
    private string __ChildContent;

    protected TagHelperBase(IHttpContextAccessor httpContextAccessor) => HttpContextAccessor = httpContextAccessor;

    internal static TagHelperOutput CreateTagHelperOutput()
        => CreateTagHelperOutput(new DefaultTagHelperContent());

    private static TagHelperOutput CreateTagHelperOutput(TagHelperContent childContent)
        => new(string.Empty, [], getChildContentAsync: (useCachedResult, encoder) => Task.FromResult(childContent));

    protected async Task<string> GetChildContentAsync(TagHelperOutput output)
    {
        __ChildContent ??= output.Content.IsModified ? output.Content.GetContent() : (await output.GetChildContentAsync()).GetContent();
        return __ChildContent;
    }

    protected IHttpContextAccessor HttpContextAccessor { get; private set; }

    [ViewContext]
    protected ViewContext ViewContext { get; set; }
}