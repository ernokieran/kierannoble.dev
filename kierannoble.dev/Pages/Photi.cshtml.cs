namespace kierannoble.dev.Pages;

public class PhotiModel : PageModel
{
    internal const string URL = "/photi";
    
    private readonly ISlideshowMediaManager __SlideshowMediaManager;
    public PhotiModel(ISlideshowMediaManager slideshowMediaManager) => __SlideshowMediaManager = slideshowMediaManager;

    private static SlideshowEntity? __ReportSlideshow;
    private static SlideshowEntity? __DesignsSlideshow;

    public async Task<IActionResult> OnGetAsync()
    {
        __ReportSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(1, 148).Select(index => $"/img/Projects/Photi/Report/FYP-R-C-{index:D3}.webp").ToList())
        };
        
        __DesignsSlideshow ??= new SlideshowEntity
        {
            Images = await __SlideshowMediaManager.GetImagesAsync(Enumerable.Range(1, 10).Select(index => $"/img/Projects/Photi/Designs/Designs-{index:D2}.webp").ToList())
        };


        return Page();
    }

    public SlideshowEntity ReportSlideshow => __ReportSlideshow!;
    public SlideshowEntity DesignsSlideshow => __DesignsSlideshow!;
}