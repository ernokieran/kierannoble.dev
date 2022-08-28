define(["knockout", "utilities", "text!navigationTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.layout.navigation;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;
       
                        self.hasSelectedContent = params.data.hasSelectedContent;
                        self.goHome = params.functions.goHome;
                        self.showCV = params.functions.showCV;

                        self.CVSlideshowShown = ko.observable(false);

                        self.showCVSlideshow = function () {
                            self.CVSlideshowShown(true);
                        }

                        self.koComponents = {
                            slideshows: {
                                cv: {
                                    name: utilities.componentNames.slideshow,
                                    params: {
                                        images: ["/assets/KieranNoble-CV-Aug22.webp"],
                                        downloadUrl: "/assets/KieranNoble-CV-Aug22.pdf",
                                        visible: self.CVSlideshowShown
                                    }
                                }
                            }
                        }

                    }
                });
            }
        }

        return {
            register: register
        };

    }    
)