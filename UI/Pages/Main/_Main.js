    define(["knockout", "utilities"],
        function (ko, utilities) {

            function mount() {
                let viewModel = function () {
                    let self = this;

                    self.selectedContent = ko.observable(utilities.componentNames.portfolioCards);

                    self.content = ko.pureComputed(function () {
                        return ko.unwrap(self.hasSelectedContent) ? self.selectedContent() : self.koComponents.portfolioCards;
                    });

                    self.hasSelectedContent = ko.pureComputed(function () {
                        return self.selectedContent() != utilities.componentNames.portfolioCards;
                    });

                    self.showIntro = ko.pureComputed(function () {
                        return !self.hasSelectedContent();
                    });


                    self.slideshowImages = ko.observableArray([]);
                    self.slideshowDownloadUrl = ko.observable(undefined);
                    self.hasSlideshow = ko.pureComputed(function() {
                        return ko.unwrap(self.slideshowImages).length > 0;
                    })

                    self.koComponents = {
                        slideshow: {
                            name: utilities.componentNames.slideshow,
                            params: {
                                data: {
                                    slideshowImages: self.slideshowImages,
                                    downloadUrl: self.slideshowDownloadUrl
                                }
                            }
                        },
                        navigation: {
                            name: utilities.componentNames.navigation,
                            params: {
                                data: {
                                    hasSelectedContent: self.hasSelectedContent
                                },
                                functions: {
                                    goHome: _goHome,
                                    showCV: _showCV
                                }
                            }
                        },
                        intro: {
                            name: utilities.componentNames.intro
                        },
                        portfolioCards: {
                            name: utilities.componentNames.portfolioCards,
                            params: {
                                functions: {
                                    updateSelectedContent: _updateSelectedContent
                                }
                            }
                        },
                        footer: {
                            name: utilities.componentNames.footer,
                            params: {
                                data: {
                                    hasSelectedContent: self.hasSelectedContent
                                }
                            }
                        }
                    };

                    function _setSlideshowContent(slideshowImages, downloadUrl = undefined)
                    {
                        self.slideshowImages(slideshowImages);
                        self.slideshowDownloadUrl(downloadUrl);
                    }

                    function _showCV() { 
                        _setSlideshowContent(
                            ["/assets/KieranNoble-CV-Aug22.webp"],
                            "/assets/KieranNoble-CV-Aug22.pdf"
                        );
                    };
                    
                    function _updateSelectedContent(content) {
                        self.selectedContent(content);

                        utilities.rootElement.className = content;
                        setTimeout(() => {
                            utilities.rootElement.scrollIntoView();
                        }, 100);
                    };

                    function _goHome() {
                        _updateSelectedContent(utilities.componentNames.portfolioCards);
                    };

                    (function _init() {
                        utilities.preventBackNavigation(_goHome);
                        utilities.preloadAssets.init();
                    })();

                };

                ko.applyBindings(viewModel, utilities.rootElement);
            }

            return {
                mount: mount
            }
        }
    )