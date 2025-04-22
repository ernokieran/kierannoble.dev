namespace kierannoble.dev.Pages;

public class HarmonyModel : PageModel
{
    private readonly ISlideshowMediaManager __SlideshowMediaManager;
    public HarmonyModel(ISlideshowMediaManager slideshowMediaManager) => __SlideshowMediaManager = slideshowMediaManager;

    private static SlideshowEntity? __BookSlideshow;

    public async Task<IActionResult> OnGetAsync()
    {
        __BookSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(0, 209).Select(index => $"/img/Projects/ExperimentalImagery/Book/Experimental Imagery Final_{index:D3}.webp").ToList())
        };

        return Page();
    }

    public SlideshowEntity BookSlideshow => __BookSlideshow!;
}