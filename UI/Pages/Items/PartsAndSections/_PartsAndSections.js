define(["knockout", "utilities", "text!partsAndSectionsTemplate"],
    function(ko, utilities, template) {

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
                                }
                            }
                        }

                        function _showFinalBookSlideshow() {
                            params.functions.setSlideshowContent(_generate(), "/assets/projects/partsandsections/Parts and Sections Final.pdf");

                            function _generate() {
                                let items = [];

                                for(let i = 0; i < 103; i++) {
                                    items.push(`/assets/projects/partsandsections/book/Parts and Sections Final_${i}.webp`)
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