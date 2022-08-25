define(["knockout", "utilities", "text!slideshowTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.slideshow;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;
                        
                        var touchStart,
                            touchEnd;

                        self.slideshowImages = params.data.slideshowImages;
                        self.downloadUrl = params.data.downloadUrl;
                        self.selectedIndex = ko.observable(0);

                        self.showSlideshow = ko.pureComputed(function() {
                            let length = 0;
                            
                            if (self.slideshowImages()) {
                                length = self.slideshowImages().length;
                            }

                            return length != 0;
                        });

                        self.showPrevious = ko.pureComputed(function() {
                            return ko.unwrap(self.selectedIndex) > 0;
                        });

                        self.showNext = ko.pureComputed(function() {
                            return ko.unwrap(self.selectedIndex) < (ko.unwrap(self.slideshowImages).length - 1)
                        });

                        self.showDownload = ko.pureComputed(function() {
                            return ko.unwrap(self.downloadUrl) != undefined;
                        });

                        self.showThumbnails = ko.pureComputed(function() {
                            return ko.unwrap(self.slideshowImages).length > 1;
                        });

                        self.selectedImage = ko.pureComputed(function() {
                            return ko.unwrap(self.slideshowImages)[ko.unwrap(self.selectedIndex)];
                        });
                        
                        self.previous = () => { _previous() };
                        self.next = () => { _next() };
                        self.close = () => { _close(); }

                        selectImage = function(index) {
                            self.selectedIndex(index);
                        }

                        function _previous() {
                            if (ko.unwrap(self.showPrevious)) {
                                let previousIndex = ko.unwrap(self.selectedIndex) - 1;
    
                                self.selectedIndex(previousIndex);
                            }
                        }

                        function _next() {
                            if (ko.unwrap(self.showNext)) {
                                let nextIndex = ko.unwrap(self.selectedIndex) + 1;
    
                                self.selectedIndex(nextIndex);
                            }
                        }

                        function _close() {
                            self.slideshowImages([]);
                            self.selectedIndex(0);
                        }

                        function _keypress(event) {
                            let keyCode = event.keyCode;

                            if (keyCode === 39) {
                                _next();
                            } else if (keyCode === 37) {
                                _previous();
                            } else if (keyCode === 27) {
                                _close();
                            }
                        }

                        function _touchStart(event) {
                            touchStart = event.changedTouches[0].screenX;
                        }
                    
                        function _touchEnd(event) {
                            var threshold = 50;
                    
                            touchEnd = event.changedTouches[0].screenX;
                    
                            if (touchEnd < touchStart - threshold) {
                               _next();
                            } else if (touchEnd > touchStart + threshold) {
                                _previous();
                            }
                        }

                        function _bindEvents() {
                            document.addEventListener("click", (e) => { if (e.srcElement.classList.contains("slideshow__image")) { _close(); } })
                            document.addEventListener("touchstart", _touchStart);
                            document.addEventListener("touchend", _touchEnd);
                            document.addEventListener("keydown", _keypress, true);
                        }

                        function _init() {
                            _bindEvents();
                        }

                        _init()
                    }
                });
            }
        }

        return {
            register: register
        };

    }    
)