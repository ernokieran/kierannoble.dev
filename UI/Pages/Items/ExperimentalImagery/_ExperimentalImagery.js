define(["knockout", "utilities", "text!experimentalImageryTemplate"],
    function(ko, utilities, template) {

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
                                }
                            }
                        }

                        function _showFinalBookSlideshow() {
                            params.functions.setSlideshowContent(_generate(), "/assets/projects/experimentalimagery/Experimental Imagery Final.pdf");

                            function _generate() {
                                let items = [];

                                for(let i = 0; i < 209; i++) {
                                    items.push(`/assets/projects/experimentalimagery/book/Experimental Imagery Final_${i}.webp`)
                                }

                                return items;
                            }
                        };
        
                    }
                });
            }

            utilities.preloadAssets.addAsset([
                "/assets/projects/experimentalimagery/book/Experimental Imagery Final_0.webp"
            ]);
        }

        return {
            register: register
        };

    }    
)