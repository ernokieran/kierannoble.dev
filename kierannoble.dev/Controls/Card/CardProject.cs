namespace kierannoble.dev.Controls.Layout.Card;

[HtmlTargetElement(TAG_NAME)]
public class CardProject : TagHelperBase
{
    internal const string TAG_NAME = "card:project";

    public CardProject(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "a";
        output.TagMode = TagMode.StartTagAndEndTag;
        output.Attributes.SetAttribute("href", URL);
        output.Attributes.SetAttribute("class", Featured ? "project project--featured" : "project");
        output.Attributes.SetAttribute("data-project", Project);
        
        output.Content.AppendHtml($"""
                                           <article data-background-image="{BackgroundImageURL}">
                                               <h1 class="project__title">
                                                   <img class="project__title-image" src="{LogoImageURL}" alt="{DescriptionText}" height="50" width="auto" />
                                                   <p class="project__title-description">{DescriptionText}</p>
                                               </h1>
                                               <span class="project__chip">{ChipText}</span>
                                               <div class="project__navigation">
                                                   <p class="project__navigation-tooltip">View Project</p>
                                                   <div class="project__navigation-button">
                                                       <i class="fa fa-arrow-right"></i>
                                                   </div>
                                               </div>
                                           </article>
                                       """);
    }
    
    public bool Featured { get; set; }
    public string URL { get; set; }
    public string Project { get; set; }
    public string ChipText { get; set; }
    public string DescriptionText { get; set; }
    public string LogoImageURL { get; set; }
    public string BackgroundImageURL { get; set; }
}
