using System.Diagnostics;

namespace kierannoble.dev.Pages;

[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
[IgnoreAntiforgeryToken]
public class ErrorModel : PageModel
{
    public const string URL = "/error";
    
    public string? RequestId { get; set; }
    public int ErrorCode { get; set; }

    public string HomeURL => IndexModel.URL;
    
    public string ErrorMessage => ErrorCode switch
    {
        404 => "That page could not be found",
        500 => "Internal server error",
        _ => "An error occurred"
    };

    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    
    public IActionResult OnGet()
    {
        ErrorCode = HttpContext.Response.StatusCode;
        RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;

        return Page();
    }
}