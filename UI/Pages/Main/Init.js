(function() {

    require(["main", "navigation", "intro", "home", "pinewood", "harmony", "experimentalImagery", "partsAndSections", "footer", "slideshow"],
        function(main, intro, navigation, home, pinewood, harmony, experimentalImagery, partsAndSections, footer, slideshow) {
            navigation.register();
            intro.register();
            home.register();

            pinewood.register();
            harmony.register();
            experimentalImagery.register();
            partsAndSections.register();

            footer.register();

            slideshow.register();

            main.mount();
        }
    )

})();