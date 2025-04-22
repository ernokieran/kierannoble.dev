using Microsoft.AspNetCore.Mvc;

namespace kierannoble.dev.Controllers;

[Route("/")]
public class CatchallController : ControllerBase
{
    private static readonly Dictionary<string, string?> __Redirections = new(StringComparer.OrdinalIgnoreCase)
    {
        { "github", "https://github.com/ernokieran" },
        { "plex", "https://app.plex.tv/desktop" },
        { "lastfm", "https://www.last.fm/user/ernokieran" },
        { "linkedin", "https://www.linkedin.com/in/kierannoble/" }
    };
    
    [HttpGet("{**path}")]
    public IActionResult CatchAll(string path)
    {
        if (__Redirections.TryGetValue(path, out string? _RedirectURL))
        {
            return Redirect(_RedirectURL!);
        }

        return NotFound();
    }
}