using Microsoft.AspNetCore.Mvc.Razor;

namespace kierannoble.dev.TypeExtensions;

public static class RazorPageBaseExtensions
{
    public static void SetTitleText(this RazorPageBase page, string titleText)
        => page.ViewContext.ViewData.SetTitleText(titleText);
    
    public static void SetProject(this RazorPageBase page, string project)
        => page.ViewContext.ViewData.SetProject(project);
}