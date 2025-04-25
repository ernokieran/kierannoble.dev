namespace kierannoble.dev.Pages;

public class HarmonyModel : PageModel
{
    internal const string URL = "/harmony";
    
    private readonly ISlideshowMediaManager __SlideshowMediaManager;
    public HarmonyModel(ISlideshowMediaManager slideshowMediaManager) => __SlideshowMediaManager = slideshowMediaManager;
}