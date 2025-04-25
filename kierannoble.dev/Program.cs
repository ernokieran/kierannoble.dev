using kierannoble.dev.Pages;

namespace kierannoble.dev;

public class Program
{
    private static int CACHE_AGE = 60 * 60 * 24 * 7;
    
    public static void Main(string[] args)
    {
        WebApplicationBuilder _Builder = WebApplication.CreateBuilder(args);
        _Builder.Services.AddHttpContextAccessor();
        _Builder.Services.AddRazorPages();
        _Builder.Services.AddControllers();
        _Builder.Services.AddScoped<IImageManager, ImageManager>();
        _Builder.Services.AddScoped<ISlideshowMediaManager, SlideshowMediaManager>();
        _Builder.Services.AddResponseCompression(options =>
        {
            options.EnableForHttps = true;
        });

        WebApplication _App = _Builder.Build();
        
        if (!_App.Environment.IsDevelopment())
        {
            _App.UseExceptionHandler(ErrorModel.URL); //TODOK
            _App.UseHsts();
        }
        
        _App.UseStatusCodePagesWithReExecute("/error/{0}");

        _App.UseHttpsRedirection();
        _App.UseStaticFiles(new StaticFileOptions
        {
            OnPrepareResponse = context =>
            {
                context.Context.Response.Headers.Append("Cache-Control", $"public, max-age={CACHE_AGE}"); //TODOK
            }
        });
        _App.UseRouting();
        _App.UseAuthorization();
        _App.MapRazorPages();
        _App.MapControllers();
        _App.UseResponseCompression();

        _App.Run();
    }
}