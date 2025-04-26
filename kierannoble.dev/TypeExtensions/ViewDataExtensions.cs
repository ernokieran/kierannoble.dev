using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace kierannoble.dev.TypeExtensions;

public static class ViewDataExtensions
{
    private const string TITLE_KEY = "Title";
    private const string PROJECT_KEY = "Project";
    
    internal static void SetTitleText(this ViewDataDictionary viewData, string titleText)
        => viewData[TITLE_KEY] = titleText;
    
    internal static void SetProject(this ViewDataDictionary viewData, string project)
        => viewData[PROJECT_KEY] = project;
}