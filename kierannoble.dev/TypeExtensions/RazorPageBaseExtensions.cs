using Microsoft.AspNetCore.Mvc.Razor;

namespace kierannoble.dev.TypeExtensions;

public static class RazorPageBaseExtensions
{
    public static void SetTitleText(this RazorPageBase page, string titleText)
        => page.ViewContext.ViewData.SetTitleText(titleText);
}