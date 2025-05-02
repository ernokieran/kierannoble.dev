namespace kierannoble.dev.Controls.Template;

[HtmlTargetElement(TAG_NAME)]
public class TemplateIntroduction : BaseTemplate
{
    private const string TAG_NAME = "template:introduction";

    public TemplateIntroduction(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) {}

    protected override string Header
        => """
           <header>
               <img src="/api/image/resize/width=135,height=135/img/avatar.webp" class="avatar" height="135px" width="135px" alt="A photo of Kieran" loading="lazy" decoding="async" />
               <div class="introduction">
                   <h1 class="introduction__name">Hi, I'm Kieran 👋</h1>
                   <h2 class="introduction__title">Full Stack Developer</h2>
                   <div class="separator separator--small"></div>
                   <p class="introduction__bio">
                       <span>Hey! I’m a full stack developer who enjoys building fast, user-friendly platforms and tools ⚡</span>
                       <span>I mostly work with .NET, but I also use React to bring ideas to life.</span>
                       <span>I'm a big fan of clean architecture and smooth experiences for users and devs alike 🛠️</span>
                   </p>
               </div>
           </header>
           <div class="separator"></div>
           """;
}