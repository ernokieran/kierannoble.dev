    define(["knockout", "utilities"],
        function (ko, utilities) {

            function mount() {
                let viewModel = function () {
                    let self = this;

                    const HOME_PAGE = utilities.componentNames.pages.home;

                    self.selectedContent = ko.observable(HOME_PAGE);

                    self.content = ko.pureComputed(() => { return self.koComponents.pages[ko.unwrap(self.selectedContent)]; });
                    self.hasSelectedContent = ko.pureComputed(() => { return self.selectedContent() != HOME_PAGE; });

                    self.koComponents = {
                        layout: {
                            navigation: {
                                name: utilities.componentNames.layout.navigation,
                                params: {
                                    data: {
                                        hasSelectedContent: self.hasSelectedContent
                                    },
                                    functions: {
                                        goHome: _goHome
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
                                name: utilities.componentNames.pages.pinewood
                            },
                            harmony: {
                                name: utilities.componentNames.pages.harmony
                            },
                            experimentalImagery: {
                                name: utilities.componentNames.pages.experimentalImagery
                            },
                            partsAndSections: {
                                name: utilities.componentNames.pages.partsAndSections
                            },
                        }
                    };
                    
                    function _updateSelectedContent(content) {
                        self.selectedContent(content);
                        utilities.rootElement.className = content;
                        setTimeout(() => {
                            if ('scrollRestoration' in history) {
                                history.scrollRestoration = 'manual';
                            }
                            window.scrollTo({
                                top: 0
                            });
                        }, 150)
                    };

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