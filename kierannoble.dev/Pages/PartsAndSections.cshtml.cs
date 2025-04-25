namespace kierannoble.dev.Pages;

public class PartsAndSectionsModel : PageModel
{
    internal const string URL = "/partsandsections";
    
    private readonly ISlideshowMediaManager __SlideshowMediaManager;
    public PartsAndSectionsModel(ISlideshowMediaManager slideshowMediaManager) => __SlideshowMediaManager = slideshowMediaManager;

    private static SlideshowEntity? __BookSlideshow;
    private static SlideshowEntity? __FurtherDevelopmentSlideshow;
    private static SlideshowEntity? __FinalOutcomesSlideshow;
    private static SlideshowEntity? __PolaroidSlideshow;
    private static SlideshowEntity? __IntroductionSlideshow;

    public async Task<IActionResult> OnGetAsync()
    {
        __BookSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(0, 103).Select(index => $"/img/Projects/PartsAndSections/Book/Parts and Sections Final_{index:D3}.webp").ToList())
        };

        __IntroductionSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(1, 3).Select(index => $"/img/Projects/PartsAndSections/Introduction/Initial_{index}.webp").ToList())
        };

        __PolaroidSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(1, 8).Select(index => $"/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_{index}.webp").ToList())
        };

        __FinalOutcomesSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(1, 3).Select(index => $"/img/Projects/PartsAndSections/FinalOutcomes/OFinal_{index}.webp").ToList())
        };
        
        __FurtherDevelopmentSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(["/img/Projects/PartsAndSections/PolFaceMash.webp"])
        };

        return Page();
    }

    public SlideshowEntity BookSlideshow => __BookSlideshow!;
    public SlideshowEntity PolaroidSlideshow => __PolaroidSlideshow!;
    public SlideshowEntity IntroductionSlideshow => __IntroductionSlideshow!;
    public SlideshowEntity FinalOutcomesSlideshow => __FinalOutcomesSlideshow!;
    public SlideshowEntity FurtherDevelopmentSlideshow => __FurtherDevelopmentSlideshow!;
}