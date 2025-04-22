namespace kierannoble.dev.Controls.Template;

public abstract class BaseTemplate : TagHelperBase
{
    protected BaseTemplate(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = null;

        output.PreContent.AppendHtml($"""
                                     <nav>
                                         <a href="/" class="logo"><div class="sr-only">Kieran Noble</div></a>
                                         {(ShowActions ? ACTIONS_MARKUP : string.Empty)}
                                     </nav>
                                     {Header}
                                     <main class="layout">
                                     """);

        output.PostContent.AppendHtml("""
                                      </main>
                                      <footer>
                                          <a href="/" class="logo"><div class="sr-only">Kieran Noble</div></a>
                                          <a href="mailto:hi@kierannoble.dev" class="contact">hi@kierannoble.dev</a>
                                          <p class="contact-note">Feel free to drop me an email, I'd love to hear from you!</p>
                                      </footer>
                                      """);
    }
    
    private const string ACTIONS_MARKUP = """
                                          <div class="actions">
                                                  <a href="/cv" class="action">CV</a>
                                              </div>
                                          </nav>
                                          """;

    protected virtual string Header { get; set; } = string.Empty;
    protected virtual bool ShowActions { get; set; } = true;
}