using kierannoble.dev.Managers.Application;

namespace kierannoble.dev
{
    internal static class ServiceCollectionExtensions
    {
        internal static IServiceCollection RegisterDependencies(this IServiceCollection services)
            => services.AddScoped<IVersionManager, VersionManager>()
                .AddScoped<IImageManager, ImageManager>()
                .AddScoped<ISlideshowMediaManager, SlideshowMediaManager>();
    }
}
