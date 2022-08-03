(function () {

    let template = `
        <section class="layout__row">
            <div class="harmony layout__column--double" data-bind="click: setContent.bind($data, 'harmony')">
                <article class="portfolio-card">
                    <div class="portfolio-card__title">
                        <img class="portfolio-card__title-logo" src="/assets/projects/harmony/logo.svg" width="195"
                            height="45" alt="Harmony Logo">
                        <div class="portfolio-card__title-description">An E-Commerce platform for a modern music store
                        </div>
                    </div>
                    <div class="portfolio-card__chip">
                        Backend
                    </div>
                    <div class="portfolio-card__action"></div>
                    <span class="portfolio-card__action-text"></span>
                </article>
            </div>
            <div href="pinewood.html" class="pinewood" data-bind="click: setContent.bind($data, 'pinewood')">
                <article class="portfolio-card">
                    <div class="portfolio-card__title">
                        <img class="portfolio-card__title-logo" src="/assets/projects/pinewood/logo.svg">
                        <div class="portfolio-card__title-description">Software Development Placement</div>
                    </div>
                    <div class="portfolio-card__chip">
                        Internship
                    </div>
                    <div class="portfolio-card__action"></div>
                    <span class="portfolio-card__action-text"></span>
                </article>
            </div>
        </section>
    `;

    var name = utilities.componentNames.portfolioCards;

    ko.components.register(name, {

        template: template,

        viewModel: function (params) {
            var self = this;
            
            self.updateSelectedContent = params.functions.updateSelectedContent;

            self.setContent = function(component) {
                self.updateSelectedContent(component);
            };

        }

    });

}());