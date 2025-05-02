using System.Reflection;

namespace kierannoble.dev.Managers.Application;

public class VersionManager : IVersionManager
{
    private static string? __Version;
    
    private readonly IWebHostEnvironment __WebHostEnvironment;
    
    public VersionManager(IWebHostEnvironment webHostEnvironment) 
        => __WebHostEnvironment = webHostEnvironment;
    
    public string GetVersion()
        => __WebHostEnvironment.IsDevelopment()
            ? DateTime.UtcNow.ToString("yyyy.MM.dd.HHmmss")
            : __Version ??= Assembly.GetEntryAssembly()?.GetName().Version?.ToString() ?? throw new Exception("Version not found");
}