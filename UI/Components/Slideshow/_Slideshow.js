define(["knockout", "utilities", "text!slideshowTemplate"],
    function (ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.slideshow,
            SCROLL_CONTAINER = utilities.rootElement.querySelector("body");
        CSS = {
            NO_SCROLL: "no-scroll"
        };

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        var touchStart,
                            touchEnd;

                        let _id = `slideshow-${Math.random().toString().replace(".", "")}`,
                            _slideshow,
                            _image,
                            _thumbnails;

                        self.id = ko.observable(_id);
                        self.visible = params.visible;
                        self.slideshowImages = params.images;
                        self.downloadUrl = params.downloadUrl;

                        self.selectedIndex = ko.observable(0);

                        self.showPrevious = ko.pureComputed(function () {
                            return ko.unwrap(self.selectedIndex) > 0;
                        });

                        self.showNext = ko.pureComputed(function () {
                            return ko.unwrap(self.selectedIndex) < (ko.unwrap(self.slideshowImages).length - 1)
                        });

                        self.showDownload = ko.pureComputed(function () {
                            return ko.unwrap(self.downloadUrl) != undefined;
                        });

                        self.showThumbnails = ko.pureComputed(function () {
                            return ko.unwrap(self.slideshowImages).length > 1;
                        });

                        self.visible.subscribe(function (visible) {
                            if (visible) {
                                SCROLL_CONTAINER.classList.add(CSS.NO_SCROLL);
                            } else {
                                SCROLL_CONTAINER.classList.remove(CSS.NO_SCROLL);
                            }
                        })

                        self.selectedImage = ko.pureComputed(function () {
                            let _actionableThumbnails = [];

                            if (_thumbnails) {
                                Array.from(_thumbnails.childNodes)
                                    .forEach((element) => {
                                        if (element.className == "slideshow__thumbnail") {
                                            _actionableThumbnails.push(element)
                                        }
                                    });

                                _actionableThumbnails[ko.unwrap(self.selectedIndex)]
                                    .scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                        inline: "center"
                                    });
                            }

                            return ko.unwrap(self.slideshowImages)[ko.unwrap(self.selectedIndex)];
                        });

                        self.previous = () => { _previous() };
                        self.next = () => { _next() };
                        self.close = () => { _close(); }
                        generateThumbnailUrl = function (url, index) {
                            let _src = url.split(".")[0] + "-thumbnail" + "." + url.split(".")[1];

                            return {
                                'src': _src,
                                'data-index': index
                            };

                        };

                        selectImage = function (index) {
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
                            self.visible(false);
                            self.selectedIndex(0);
                        }

                        function _bindEvents() {
                            if (_thumbnails) {
                                _thumbnails.addEventListener("click", (e) => {
                                    let _element = e.srcElement;

                                    if (_element.tagName == "IMG") {
                                        let _index = parseInt(_element.dataset.index);

                                        self.selectedIndex(_index);
                                    }
                                })
                            }

                            _image.addEventListener("click", (e) => {
                                let _element = e.srcElement;

                                if (_element.tagName != "IMG") {
                                    _close();
                                }
                            });

                            _image.addEventListener("touchstart", _touchStart);
                            _image.addEventListener("touchend", _touchEnd);
                            document.addEventListener("keydown", _keypress, true);

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
                        }

                        function _findElements() {
                            _slideshow = document.getElementById(_id);
                            _image = _slideshow.querySelector(".slideshow__image");
                            _thumbnails = _slideshow.querySelector(".slideshow__thumbnails");
                        };

                        (function () {
                            setTimeout(() => {
                                _findElements();
                                _bindEvents();
                            })
                        })();

                    }
                });
            }
        }

        return {
            register: register
        };

    }
)