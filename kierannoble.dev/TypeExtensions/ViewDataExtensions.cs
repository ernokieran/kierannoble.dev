using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace kierannoble.dev.TypeExtensions;

public static class ViewDataExtensions
{
    private const string TITLE_KEY = "Title";
    
    internal static void SetTitleText(this ViewDataDictionary viewData, string titleText)
        => viewData[TITLE_KEY] = titleText;
}