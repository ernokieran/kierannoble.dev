define(["knockout", "utilities", "text!pinewoodTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.pages.pinewood;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.koComponents = {
                            images: {
                                outcome: {
                                    name: utilities.componentNames.image,
                                    params: {
                                        data: {
                                            imageUrl: "/assets/projects/pinewood/dashboard-1.webp", 
                                        },
                                        functions: {
                                            actionClicked: _showOutcomeSlideshow
                                        }
                                    }
                                }
                            }
                        };

                        function _showOutcomeSlideshow() {
                            params.functions.setSlideshowContent(
                                [
                                    "/assets/projects/pinewood/dashboard-1.webp", 
                                    "/assets/projects/pinewood/dashboard-2.webp", 
                                    "/assets/projects/pinewood/dashboard-3.webp", 
                                    "/assets/projects/pinewood/dashboard-4.webp", 
                                    "/assets/projects/pinewood/dashboard-5.webp"
                                ]
                            )
                        };

                    }
                });
            }

            utilities.preloadAssets.addAsset([
                "/assets/projects/pinewood/dashboard-1.webp", 
            ]);
        }

        return {
            register: register
        };

    }    
)