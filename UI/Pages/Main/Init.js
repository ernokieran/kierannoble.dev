(function() {

    require(["main", "navigation", "intro", "portfolioCards", "pinewood", "harmony", "footer", "slideshow"],
        function(main, intro, navigation, portfolioCards, pinewood, harmony, footer, slideshow) {
            navigation.register();
            intro.register();
            portfolioCards.register();

            pinewood.register();
            harmony.register();

            footer.register();

            slideshow.register();

            main.mount();
        }
    )

})();