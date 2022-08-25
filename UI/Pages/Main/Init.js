(function() {

    require(["main", "navigation", "intro", "home", "pinewood", "harmony", "footer", "slideshow", "image"],
        function(main, intro, navigation, home, pinewood, harmony, footer, slideshow, image) {
            navigation.register();
            intro.register();
            home.register();

            pinewood.register();
            harmony.register();

            footer.register();

            slideshow.register();
            image.register();

            main.mount();
        }
    )

})();