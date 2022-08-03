(function () {

    let template = `
        <header class="intro">
            <img class="intro__avatar" src="https://aylo.net/static/portfolio/kieran.webp" height="150"
                alt="A photo of Kieran Noble">
            <div class="intro__text-container">
                <div class="intro__name">Howdy, I'm Kieran</div>
                <div class="intro__title">Full Stack Developer</div>
                <div class="seperator seperator--small"></div>
                <div class="intro__description">Hello There! I'm an aspiring and enthusiastic full stack web experience
                    developer 🙋‍♂️</div>
            </div>
        </header>
        <div class="seperator"></div>
    `;

    var name = utilities.componentNames.intro;

    ko.components.register(name, {

        template: template,

        viewModel: function (params) {
            var self = this;

        }

    });

}());