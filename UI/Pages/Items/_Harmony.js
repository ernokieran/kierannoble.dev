define(["knockout", "utilities", "text!harmonyTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.harmony;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;


                        self.koComponents = {
                            images: {
                                process: {
                                    name: utilities.componentNames.image,
                                    params: {
                                        data: {
                                            imageUrl: "/assets/projects/harmony/process.webp", 
                                            clickable: false,
                                            shadow: false,
                                        },
                                    }
                                },
                                initialDesigns: {
                                    name: utilities.componentNames.image,
                                    params: {
                                        data: {
                                            imageUrl: "/assets/projects/harmony/initial-designs.webp", 
                                        },
                                        functions: {
                                            actionClicked: _showInitialDesignsSlideshow
                                        }
                                    }
                                },
                                prototype: {
                                    name: utilities.componentNames.image,
                                    params: {
                                        data: {
                                            imageUrl: "/assets/projects/harmony/prototype-ui.webp", 
                                        },
                                        functions: {
                                            actionClicked: _showPrototypeSlideshow
                                        }
                                    }
                                },
                                final: {
                                    name: utilities.componentNames.image,
                                    params: {
                                        data: {
                                            imageUrl: "/assets/projects/harmony/final-product-1.webp", 
                                        },
                                        functions: {
                                            actionClicked: _showFinalSlideshow
                                        }
                                    }
                                }
                            }
                        };

                        function _showInitialDesignsSlideshow() {
                            params.functions.setSlideshowContent(
                                [
                                    "/assets/projects/harmony/initial-designs.webp"
                                ]
                            )
                        };

                        function _showPrototypeSlideshow() {
                            params.functions.setSlideshowContent(
                                [
                                    "/assets/projects/harmony/prototype-ui.webp"
                                ]
                            )
                        };

                        function _showFinalSlideshow() {
                            params.functions.setSlideshowContent(
                                [
                                    "/assets/projects/harmony/final-product-1.webp",
                                    "/assets/projects/harmony/final-product-2.webp",
                                    "/assets/projects/harmony/final-product-3.webp",
                                    "/assets/projects/harmony/final-product-4.webp",
                                    "/assets/projects/harmony/final-product-5.webp"
                                ]
                            )
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