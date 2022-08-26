    define(["knockout", "utilities"],
        function (ko, utilities) {

            function mount() {
                let viewModel = function () {
                    let self = this;

                    const HOME_PAGE = utilities.componentNames.pages.home;

                    self.selectedContent = ko.observable(HOME_PAGE);

                    self.content = ko.pureComputed(function () {
                        return self.koComponents.pages[ko.unwrap(self.selectedContent)];
                    });

                    self.hasSelectedContent = ko.pureComputed(function () {
                        return self.selectedContent() != HOME_PAGE;
                    });

                    self.showIntro = ko.pureComputed(function () {
                        return !self.hasSelectedContent();
                    });

                    self.slideshowImages = ko.observableArray([]);
                    self.slideshowDownloadUrl = ko.observable(undefined);
                    self.hasSlideshow = ko.pureComputed(function() {
                        return ko.unwrap(self.slideshowImages).length > 0;
                    })

                    self.pageName = ko.pureComputed(function() {
                        return ko.unwrap(self.hasSelectedContent) ? ko.unwrap(self.selectedContent) : "";
                    });

                    self.koComponents = {
                        layout: {
                            navigation: {
                                name: utilities.componentNames.layout.navigation,
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
                                name: utilities.componentNames.layout.intro
                            },
                            footer: {
                            name: utilities.componentNames.layout.footer,
                            params: {
                                data: {
                                    hasSelectedContent: self.hasSelectedContent
                                }
                            }
                        }
                        },
                        pages: {
                            home: {
                                name: utilities.componentNames.pages.home,
                                params: {
                                    functions: {
                                        updateSelectedContent: _updateSelectedContent
                                    }
                                }
                            },
                            pinewood: {
                                name: utilities.componentNames.pages.pinewood,
                                params: {
                                    functions: {
                                        setSlideshowContent: _setSlideshowContent
                                    }
                                }
                            },
                            harmony: {
                                name: utilities.componentNames.pages.harmony,
                                params: {
                                    functions: {
                                        setSlideshowContent: _setSlideshowContent
                                    }
                                }
                            },
                            experimentalImagery: {
                                name: utilities.componentNames.pages.experimentalImagery,
                                params: {
                                    functions: {
                                        setSlideshowContent: _setSlideshowContent
                                    }
                                }
                            },
                            partsAndSections: {
                                name: utilities.componentNames.pages.partsAndSections,
                                params: {
                                    functions: {
                                        setSlideshowContent: _setSlideshowContent
                                    }
                                }
                            },
                        },
                        slideshow: {
                            name: utilities.componentNames.slideshow,
                            params: {
                                data: {
                                    slideshowImages: self.slideshowImages,
                                    downloadUrl: self.slideshowDownloadUrl
                                }
                            }
                        },
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

                    _test = function() {
                        _setSlideshowContent(_generate());

                        function _generate() {
                            let items = [];

                            for(let i = 0; i < 209; i++) {
                                items.push(`/assets/projects/experimentalimagery/book/Experimental Imagery Final_${i}.webp`)
                            }

                            return items;
                        }
                    }

                    function _goHome() {
                        _updateSelectedContent(HOME_PAGE);
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