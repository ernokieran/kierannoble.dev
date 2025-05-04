namespace kierannoble.dev.Pages;

public class HarmonyModel : PageModel
{
    internal const string URL = "/harmony";

    private static SlideshowEntity __InitialDesignsSlideshow;
    private static SlideshowEntity __UiuxSlideshow;

    private readonly ISlideshowMediaManager __SlideshowMediaManager;
    public HarmonyModel(ISlideshowMediaManager slideshowMediaManager) => __SlideshowMediaManager = slideshowMediaManager;

    public async Task<IActionResult> OnGetAsync()
    {
        __UiuxSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(["/img/Projects/Harmony/prototype-ui.webp"])
        };

        __InitialDesignsSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(["/img/Projects/Harmony/initial-designs.webp"])
        };

        return Page();
    }

    public SlideshowEntity InitialDesignsSlideshow => __InitialDesignsSlideshow;
    public SlideshowEntity UiuxSlideshow => __UiuxSlideshow;
}