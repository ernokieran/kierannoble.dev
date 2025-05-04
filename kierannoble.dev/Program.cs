using kierannoble.dev.Managers.Application;
using kierannoble.dev.Pages;

namespace kierannoble.dev;

public class Program
{
    private const string CACHE_CONTROL = "Cache-Control";
    private static readonly int __CacheAge = 60 * 60 * 24 * 7;
    private static readonly string __CacheControlValue = $"public, max-age={__CacheAge}";

    public static void Main(string[] args)
    {
        WebApplicationBuilder _Builder = WebApplication.CreateBuilder(args);
        _Builder.Services.AddHttpContextAccessor();
        _Builder.Services.AddRazorPages();
        _Builder.Services.AddControllers();
        _Builder.Services.AddScoped<IVersionManager, VersionManager>();
        _Builder.Services.AddScoped<IImageManager, ImageManager>();
        _Builder.Services.AddScoped<ISlideshowMediaManager, SlideshowMediaManager>();
        _Builder.Services.AddResponseCompression(options => {
            options.EnableForHttps = true;
        });

        WebApplication _App = _Builder.Build();

        if (!_App.Environment.IsDevelopment())
        {
            _App.UseExceptionHandler(ErrorModel.URL);
            _App.UseHsts();
        }

        _App.UseStatusCodePagesWithReExecute("/error/{0}");

        _App.UseHttpsRedirection();
        _App.UseStaticFiles(new StaticFileOptions
        {
            OnPrepareResponse = context => {
                context.Context.Response.Headers.Append(CACHE_CONTROL, __CacheControlValue);
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