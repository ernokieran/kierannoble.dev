(function() {

    require(["main", "navigation", "intro", "portfolioCards", "pinewood", "harmony", "footer"],
        function(main, intro, navigation, portfolioCards, pinewood, harmony, footer) {
            navigation.register();
            intro.register();
            portfolioCards.register();

            pinewood.register();
            harmony.register();

            footer.register();

            main.mount();
        }
    )

})();