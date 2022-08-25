(function() {

    require(["main", "navigation", "intro", "portfolioCards", "pinewood", "harmony", "footer", "slideshow", "image"],
        function(main, intro, navigation, portfolioCards, pinewood, harmony, footer, slideshow, image) {
            navigation.register();
            intro.register();
            portfolioCards.register();

            pinewood.register();
            harmony.register();

            footer.register();

            slideshow.register();
            image.register();

            main.mount();
        }
    )

})();