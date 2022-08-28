define(["knockout", "utilities", "text!experimentalImageryTemplate"],
    function (ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.pages.experimentalImagery;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.bookSlideshowShown = ko.observable(false);
                        self.coloursSlideshowShown = ko.observable(false);
                        self.handsSlideshowShown = ko.observable(false);
                        self.finalSlideshowShown = ko.observable(false);

                        self.showBookSlideshow = function() {
                            self.bookSlideshowShown(true);
                        };
                        self.showColoursSlideshow = function() {
                            self.coloursSlideshowShown(true);
                        };
                        self.showHandsSlideshow = function() {
                            self.handsSlideshowShown(true);
                        };
                        self.showFinalSlideshow = function() {
                            self.finalSlideshowShown(true);
                        };

                        self.koComponents = {
                            slideshows: {
                                book: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: _generateBookSlideshowImages(),
                                        downloadUrl: "/assets/projects/experimentalimagery/Experimental Imagery Final.pdf",
                                        visible: self.bookSlideshowShown
                                    }
                                },
                                hands: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/experimentalimagery/Hands_1.webp", "/assets/projects/experimentalimagery/Hands_2.webp", "/assets/projects/experimentalimagery/Hands_3.webp"],
                                        visible: self.handsSlideshowShown
                                    }
                                },
                                colours: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/projects/experimentalimagery/Colours.webp"],
                                        visible: self.coloursSlideshowShown
                                    }
                                },
                                final: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: _generateFinalSlideshowImages(),
                                        visible: self.finalSlideshowShown
                                    }
                                },
                            }
                        }

                        function _generateBookSlideshowImages() {
                            let items = [];

                            for (let i = 0; i < 209; i++) {
                                items.push(`/assets/projects/experimentalimagery/book/Experimental Imagery Final_${i}.webp`)
                            }

                            return items;
                        }

                        function _generateFinalSlideshowImages() {
                            let items = [];

                            for (let i = 1; i < 9; i++) {
                                items.push(`/assets/projects/experimentalimagery/Final_${i}.webp`)
                            }

                            return items;
                        }
                    }
                });
            }

            utilities.preloadAssets.addAsset([
                "/assets/projects/experimentalimagery/book/Experimental Imagery Final_0.webp",
                "/assets/projects/experimentalimagery/Hands_1.webp",
                "/assets/projects/experimentalimagery/Hands_2.webp",
                "/assets/projects/experimentalimagery/Hands_3.webp",
                "/assets/projects/experimentalimagery/Colours.webp",
                "/assets/projects/experimentalimagery/Motion_1.mp4",
                "/assets/projects/experimentalimagery/Motion_2.mp4",
                "/assets/projects/experimentalimagery/Final_1.webp",
                "/assets/projects/experimentalimagery/Final_2.webp",
                "/assets/projects/experimentalimagery/Final_3.webp",
                "/assets/projects/experimentalimagery/Final_4.webp",
                "/assets/projects/experimentalimagery/Final_5.webp",
                "/assets/projects/experimentalimagery/Final_6.webp",
                "/assets/projects/experimentalimagery/Final_7.webp",
                "/assets/projects/experimentalimagery/Final_8.webp",
                "/assets/projects/experimentalimagery/Final.mp4"
            ]);
        }

        return {
            register: register
        };

    }
)