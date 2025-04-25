namespace kierannoble.dev.Pages;

public class HarmonyModel : PageModel
{
    internal const string URL = "/harmony";
    
    private readonly ISlideshowMediaManager __SlideshowMediaManager;
    public HarmonyModel(ISlideshowMediaManager slideshowMediaManager) => __SlideshowMediaManager = slideshowMediaManager;

    private static SlideshowEntity? __InitialDesignsSlideshow;
    private static SlideshowEntity? __UIUXSlideshow;
    
    public async Task<IActionResult> OnGetAsync()
    {
        __UIUXSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(["/img/Projects/Harmony/prototype-ui.webp"])
        };

        __InitialDesignsSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(["/img/Projects/Harmony/initial-designs.webp"])
        };

        return Page();
    }
    
    public SlideshowEntity InitialDesignsSlideshow => __InitialDesignsSlideshow!;
    public SlideshowEntity UIUXSlideshow => __UIUXSlideshow!;
}