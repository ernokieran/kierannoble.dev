define(["knockout", "utilities", "text!experimentalImageryTemplate"],
    function (ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.pages.experimentalImagery;

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
                                            imageUrl: "/assets/projects/experimentalimagery/book/Experimental Imagery Final_0.webp"
                                        },
                                        functions: {
                                            actionClicked: _showFinalBookSlideshow
                                        }
                                    }
                                },
                                colours: {
                                    name: utilities.componentNames.image,
                                    params: {
                                        data: {
                                            imageUrl: "/assets/projects/experimentalimagery/Colours.webp",
                                        },
                                        functions: {
                                            actionClicked: _showColoursSlideshow
                                        }
                                    }
                                }
                            }
                        }

                        self.showHandsSlideshow = () => {
                            _showHandsSlideshow()
                        };

                        self.showFinalSlideshow = () => {
                            _showFinalSlideshow()
                        };

                        function _showHandsSlideshow() {
                            params.functions.setSlideshowContent(
                                ["/assets/projects/experimentalimagery/Hands_1.webp",
                                    "/assets/projects/experimentalimagery/Hands_2.webp",
                                    "/assets/projects/experimentalimagery/Hands_3.webp"
                                ]
                            );
                        };

                        function _showFinalSlideshow() {
                            params.functions.setSlideshowContent(_generate());

                            function _generate() {
                                let items = [];

                                for (let i = 1; i < 9; i++) {
                                    items.push(`/assets/projects/experimentalimagery/Final_${i}.webp`)
                                }

                                return items;
                            }
                        };

                        function _showColoursSlideshow() {
                            params.functions.setSlideshowContent(["/assets/projects/experimentalimagery/Colours.webp"]);
                        };

                        function _showFinalBookSlideshow() {
                            params.functions.setSlideshowContent(_generate(), "/assets/projects/experimentalimagery/Experimental Imagery Final.pdf");

                            function _generate() {
                                let items = [];

                                for (let i = 0; i < 209; i++) {
                                    items.push(`/assets/projects/experimentalimagery/book/Experimental Imagery Final_${i}.webp`)
                                }

                                return items;
                            }
                        };

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