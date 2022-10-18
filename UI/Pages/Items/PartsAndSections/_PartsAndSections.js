define(["knockout", "utilities", "text!partsAndSectionsTemplate"],
    function (ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.pages.partsAndSections;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.initialSlideshowShown = ko.observable(false);
                        self.polDevelopmentSlideshowShown = ko.observable(false);
                        self.faceMashSlideshowShown = ko.observable(false);
                        self.finalSlideshowShown = ko.observable(false);
                        self.bookSlideshowShown = ko.observable(false);

                        self.showInitialSlideshow = function() {
                            self.initialSlideshowShown(true);
                        };
                        self.showPolDevelopmentSlideshow = function() {
                            self.polDevelopmentSlideshowShown(true);
                        };
                        self.showFaceMashSlideshow = function() {
                            self.faceMashSlideshowShown(true);
                        };
                        self.showFinalSlideshow = function() {
                            self.finalSlideshowShown(true);
                        };
                        self.showBookSlideshow = function() {
                            self.bookSlideshowShown(true);
                        };

                        self.koComponents = {
                            slideshows: {
                                initial: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/partsandsections/Initial_1.webp", "/assets/projects/partsandsections/Initial_2.webp", "/assets/projects/partsandsections/Initial_3.webp"],
                                        visible: self.initialSlideshowShown
                                    }
                                },
                                polDevelopment: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/partsandsections/Pol_1.webp", "/assets/projects/partsandsections/Pol_2.webp", "/assets/projects/partsandsections/Pol_3.webp", "/assets/projects/partsandsections/Pol_4.webp", "/assets/projects/partsandsections/Pol_5.webp", "/assets/projects/partsandsections/Pol_6.webp", "/assets/projects/partsandsections/Pol_7.webp", "/assets/projects/partsandsections/Pol_8.webp"],
                                        visible: self.polDevelopmentSlideshowShown
                                    }
                                },
                                faceMash: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/partsandsections/PolFaceMash.webp"],
                                        visible: self.faceMashSlideshowShown
                                    }
                                },
                                final: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/partsandsections/Final_1.webp","/assets/projects/partsandsections/Final_2.webp", "/assets/projects/partsandsections/Final_3.webp"],
                                        visible: self.finalSlideshowShown
                                    }
                                },
                                book: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: _generateBookSlideshowImages(),
                                        visible: self.bookSlideshowShown
                                    }
                                },
                            }
                        };

                        function _generateBookSlideshowImages() {
                            let items = [];

                            for (let i = 0; i < 103; i++) {
                                items.push(`/assets/projects/partsandsections/book/Parts and Sections Final_${i}.webp`)
                            }

                            return items;
                        }
                    }
                });
            }

            utilities.preloadAssets.addAsset([
                "/assets/projects/experimentalimagery/book/Experimental Imagery Final_0.webp",
                "/assets/projects/partsandsections/Initial_1.webp",
                "/assets/projects/partsandsections/Initial_2.webp",
                "/assets/projects/partsandsections/Initial_3.webp",
                "/assets/projects/partsandsections/Pol_1.webp",
                "/assets/projects/partsandsections/Pol_2.webp",
                "/assets/projects/partsandsections/Pol_3.webp",
                "/assets/projects/partsandsections/Pol_4.webp",
                "/assets/projects/partsandsections/Pol_5.webp",
                "/assets/projects/partsandsections/Pol_6.webp",
                "/assets/projects/partsandsections/Pol_7.webp",
                "/assets/projects/partsandsections/Pol_8.webp",
                "/assets/projects/partsandsections/PolFaceMash.webp",
                "/assets/projects/partsandsections/Final_1.webp",
                "/assets/projects/partsandsections/Final_2.webp",
                "/assets/projects/partsandsections/Final_3.webp"
            ]);
        }

        return {
            register: register
        };

    }
)