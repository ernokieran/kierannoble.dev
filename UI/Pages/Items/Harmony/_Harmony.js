define(["knockout", "utilities", "text!harmonyTemplate"],
    function (ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.pages.harmony;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.initialDesignsSlideshowShown = ko.observable(false);
                        self.prototypeSlideshowShown = ko.observable(false);
                        self.finalSlideshowShown = ko.observable(false);

                        self.showInitialDesignsSlideshow = () => { self.initialDesignsSlideshowShown(true); };
                        self.showPrototypeSlideshow = () => { self.prototypeSlideshowShown(true); };
                        self.showFinalSlideshow = () => { self.finalSlideshowShown(true); };

                        self.koComponents = {
                            slideshows: {
                                initialDesigns: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/harmony/initial-designs.webp"],
                                        visible: self.initialDesignsSlideshowShown
                                    }
                                },
                                prototype: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/harmony/prototype-ui.webp"],
                                        visible: self.prototypeSlideshowShown
                                    }
                                },
                                final: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/harmony/final-product-1.webp", "/assets/projects/harmony/final-product-2.webp", "/assets/projects/harmony/final-product-3.webp", "/assets/projects/harmony/final-product-4.webp", "/assets/projects/harmony/final-product-5.webp"],
                                        visible: self.finalSlideshowShown
                                    }
                                }
                            }
                        };
                    }
                });
            }

            utilities.preloadAssets.addAsset([
                "/assets/projects/harmony/process.webp",
                "/assets/projects/harmony/initial-designs.webp",
                "/assets/projects/harmony/prototype-ui.webp",
                "/assets/projects/harmony/final-product-1.webp"
            ]);
        }

        return {
            register: register
        };

    }
)