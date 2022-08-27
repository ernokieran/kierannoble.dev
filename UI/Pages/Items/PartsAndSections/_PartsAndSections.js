define(["knockout", "utilities", "text!partsAndSectionsTemplate"],
    function (ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.pages.partsAndSections;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.koComponents = {
                            images: {
                                book: {
                                    name: utilities.componentNames.image,
                                    params: {
                                        data: {
                                            imageUrl: "/assets/projects/partsandsections/book/Parts and Sections Final_0.webp"
                                        },
                                        functions: {
                                            actionClicked: _showFinalBookSlideshow
                                        }
                                    }
                                },
                            }
                        }

                        self.showInitialSlideshow = () => {
                            _showInitialSlideshow();
                        };

                        self.showFaceMashSlideshow = () => {
                            _showFaceMashSlideshow();
                        };

                        self.showPolDevelopmentSlideshow = () => {
                            _showPolDevelopmentSlideshow();
                        };

                        self.showFinalSlideshow = () => {
                            _showFinalSlideshow();
                        };

                        function _showInitialSlideshow() {
                            params.functions.setSlideshowContent(["/assets/projects/partsandsections/Initial_1.webp",
                                "/assets/projects/partsandsections/Initial_2.webp",
                                "/assets/projects/partsandsections/Initial_3.webp",
                            ]);
                        };

                        function _showPolDevelopmentSlideshow() {
                            params.functions.setSlideshowContent(["/assets/projects/partsandsections/Pol_1.webp",
                                "/assets/projects/partsandsections/Pol_2.webp",
                                "/assets/projects/partsandsections/Pol_3.webp",
                                "/assets/projects/partsandsections/Pol_4.webp",
                                "/assets/projects/partsandsections/Pol_5.webp",
                                "/assets/projects/partsandsections/Pol_6.webp",
                                "/assets/projects/partsandsections/Pol_7.webp",
                                "/assets/projects/partsandsections/Pol_8.webp"
                            ]);
                        };

                        function _showFinalSlideshow() {
                            params.functions.setSlideshowContent(["/assets/projects/partsandsections/Final_1.webp",
                                "/assets/projects/partsandsections/Final_2.webp",
                                "/assets/projects/partsandsections/Final_3.webp"
                            ]);
                        };

                        function _showFaceMashSlideshow() {
                            params.functions.setSlideshowContent(["/assets/projects/partsandsections/PolFaceMash.webp"]);
                        };

                        function _showFinalBookSlideshow() {
                            params.functions.setSlideshowContent(_generate(), "/assets/projects/partsandsections/Parts and Sections Final.pdf");

                            function _generate() {
                                let items = [];

                                for (let i = 0; i < 103; i++) {
                                    items.push(`/assets/projects/partsandsections/book/Parts and Sections Final_${i}.webp`)
                                }

                                return items;
                            }
                        };

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