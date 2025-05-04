namespace kierannoble.dev.Pages;

public class ExperimentalImageryModel : PageModel
{
    internal const string URL = "/experimentalimagery";

    private static SlideshowEntity __BookSlideshow;
    private static SlideshowEntity __FurtherDevelopmentSlideshow;
    private static SlideshowEntity __FinalOutcomesSlideshow;
    private static SlideshowEntity __InitialOutcomesSlideshow;

    private readonly ISlideshowMediaManager __SlideshowMediaManager;
    public ExperimentalImageryModel(ISlideshowMediaManager slideshowMediaManager) => __SlideshowMediaManager = slideshowMediaManager;

    public async Task<IActionResult> OnGetAsync()
    {
        __BookSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(0, 209).Select(index => $"/img/Projects/ExperimentalImagery/Book/Experimental Imagery Final_{index:D3}.webp").ToList())
        };

        __InitialOutcomesSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(1, 3).Select(index => $"/img/Projects/ExperimentalImagery/InitialOutcomes/Hands_{index}.webp").ToList())
        };

        __FinalOutcomesSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(1, 8).Select(index => $"/img/Projects/ExperimentalImagery/FinalOutcomes/Final_{index}.webp").ToList())
        };

        __FurtherDevelopmentSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(["/img/Projects/ExperimentalImagery/Colours.webp"])
        };

        return Page();
    }

    public SlideshowEntity BookSlideshow => __BookSlideshow;
    public SlideshowEntity InitialOutcomesSlideshow => __InitialOutcomesSlideshow;
    public SlideshowEntity FinalOutcomesSlideshow => __FinalOutcomesSlideshow;
    public SlideshowEntity FurtherDevelopmentSlideshow => __FurtherDevelopmentSlideshow;
}