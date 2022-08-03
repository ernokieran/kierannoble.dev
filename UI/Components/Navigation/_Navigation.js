(function () {

    let template = `
        <nav class="navigation">
            <div class="layout layout__row layout__row--ignoreMobile layout--nomargin" data-bind="click: goHome.bind($data)">
                <div class="navigation__back" data-bind="css: { 'navigation__back--hidden': !hasSelectedContent() }"></div>
                <div class="logo"></div>
            </div>
            <a class="navigation__action" href="/assets/KieranNoble-CV-Aug22.pdf">CV</a>
        </nav>
    `;

    var name = utilities.componentNames.navigation;

    ko.components.register(name, {

        template: template,

        viewModel: function (params) {
            var self = this;

            self.hasSelectedContent = params.data.hasSelectedContent;
            self.goHome = params.functions.goHome;
        }

    });

}());