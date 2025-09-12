"use strict";

(function () {
    const
        CSS_SLIDESHOW_IMAGE_HOLDER = "slideshow__image-holder",
        CSS_SLIDESHOW_SHOWN = "slideshow--shown",
        CSS_SLIDESHOW_SINGLE = "slideshow--single",
        CSS_SLIDESHOW_THUMBNAIL = "slideshow__thumbnail",
        CSS_SLIDESHOW_THUMBNAIL_SELECTED = "slideshow__thumbnail--selected",
        DATA_SLIDESHOW = "data-slideshow";

    let
        slideshow = document.getElementById("slideshow"),
        slideshowClose = document.getElementById("slideshow-close"),
        slideshowDownload = document.getElementById("slideshow-download"),
        slideshowImageHolder = document.getElementById("slideshow-image-holder"),
        slideshowNext = document.getElementById("slideshow-next"),
        slideshowPrevious = document.getElementById("slideshow-previous"),
        slideshowThumbnailsHolder = document.getElementById("slideshow-thumbnails-holder");

    let
        currentIndex = 0,
        currentThumbnailElement,
        hasNext,
        hasPrevious,
        imageCount,
        images = [],
        isOpen = false,
        openedByElement;

    let
        touchStartX,
        touchEndX;

    let currentImageElement;

    function _addClickAndKeyboardEventListener(element, callback) {
        element.addEventListener("click", () => callback())

        element.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                callback();
            }
        });
    }

    function _init() {
        let slideshowElements = document.querySelectorAll(`[${DATA_SLIDESHOW}]`);

        if (slideshowElements.length !== 0) {
            slideshowElements.forEach((slideshow) => {
                const slideshowData = JSON.parse(slideshow.getAttribute(DATA_SLIDESHOW));

                slideshow.addEventListener("click", () => _open(slideshowData));
                slideshow.addEventListener("keydown", function (event) {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();

                        openedByElement = event.target
                        _open(slideshowData);
                    }
                });
            });

            slideshow.addEventListener("click", (event) => {
                if (event.target.classList.contains(CSS_SLIDESHOW_IMAGE_HOLDER)) {
                    _close();
                }
            });

            _addClickAndKeyboardEventListener(slideshowClose, () => _close());
            _addClickAndKeyboardEventListener(slideshowNext, () => _next());
            _addClickAndKeyboardEventListener(slideshowPrevious, () => _previous());

            slideshowImageHolder.addEventListener("touchstart", (event) => {
                touchStartX = event.changedTouches[0].screenX;
            });

            slideshowImageHolder.addEventListener("touchend", (event) => {
                touchEndX = event.changedTouches[0].screenX;

                let swipeThreshold = window.innerWidth * 0.1;

                if ((touchStartX - touchEndX) > swipeThreshold) {
                    _next();
                } else if ((touchEndX - touchStartX) > swipeThreshold) {
                    _previous();
                }
            });

            document.addEventListener("keydown", (event) => {
                if (!isOpen) {
                    return;
                }

                if (event.key === "ArrowLeft") {
                    _previous();
                }

                if (event.key === "ArrowRight") {
                    _next();
                }

                if (event.key === "Escape") {
                    _close();
                }
            });

            window.addEventListener("resize", _debounce(() => {
                if (isOpen) {
                    _renderThumbnails();
                    _selectImageByIndex(currentIndex);
                }
            }, 50));
        }
    }

    function _debounce(fn, delay) { //TODOK: move this to a utility file
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }


    function _close() {
        slideshow.classList.remove(CSS_SLIDESHOW_SHOWN);

        currentImageElement.remove();
        currentImageElement = null;
        slideshowThumbnailsHolder.innerHTML = '';

        if (imageCount === 1) {
            slideshow.classList.remove(CSS_SLIDESHOW_SINGLE);
        }

        openedByElement.focus();
        isOpen = false;
    }

    function _open(data) {
        images = data.Images;
        imageCount = images.length;

        let downloadURL = data.DownloadURL;

        if (downloadURL) {
            slideshowDownload.href = downloadURL;
            slideshowDownload.style.visibility = 'visible';
        } else {
            slideshowDownload.style.visibility = 'hidden';
        }

        if (imageCount === 1) {
            slideshow.classList.add(CSS_SLIDESHOW_SINGLE);
        }

        slideshow.classList.add(CSS_SLIDESHOW_SHOWN);

        _renderThumbnails();

        _selectImageByIndex(0);
        slideshowClose.focus();
        isOpen = true;
    }

    function _renderThumbnails() {
        if (imageCount !== 1) {
            slideshowThumbnailsHolder.innerHTML = '';

            slideshowThumbnailsHolder.scrollTo(0, 0);

            let thumbnailsFragment = document.createDocumentFragment();

            for (let i = 0; i < images.length; i++) {
                let currentImage = images[i];

                let holderElement = document.createElement("div"),
                    imageElement = document.createElement("img");

                let height = window.getComputedStyle(slideshow).getPropertyValue('--thumbnail-height').replace("px", ""),
                    width = Math.round(height * currentImage.Ratio);

                imageElement.src = `/api/image/resize/height=${height * 2}${currentImage.URL}`;

                imageElement.height = height;
                imageElement.width = width;

                imageElement.loading = "lazy";
                imageElement.decoding = "async";

                holderElement.classList.add(CSS_SLIDESHOW_THUMBNAIL);
                holderElement.appendChild(imageElement);

                holderElement.addEventListener("click", () => _selectImageByIndex(i));

                thumbnailsFragment.appendChild(holderElement);
            }

            slideshowThumbnailsHolder.appendChild(thumbnailsFragment);
        }
    }

    function _selectImageByIndex(index) {
        currentIndex = index;
        hasNext = currentIndex < imageCount - 1;
        hasPrevious = currentIndex > 0;

        slideshowNext.style.visibility = hasNext ? "visible" : "hidden";
        slideshowPrevious.style.visibility = hasPrevious ? "visible" : "hidden";

        let imgElement = document.createElement("img"),
            thumbnailElement = slideshowThumbnailsHolder.children[index];

        if (currentImageElement) {
            currentImageElement.remove();
        }

        if (imageCount !== 1 && currentThumbnailElement) {
            currentThumbnailElement.classList.remove(CSS_SLIDESHOW_THUMBNAIL_SELECTED);
        }

        imgElement.src = images[index].URL;
        slideshowImageHolder.appendChild(imgElement);
        currentImageElement = imgElement;

        if (imageCount !== 1) {
            currentThumbnailElement = thumbnailElement;
            thumbnailElement.classList.add(CSS_SLIDESHOW_THUMBNAIL_SELECTED);

            thumbnailElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
    }

    function _next() {
        if (hasNext) {
            _selectImageByIndex(currentIndex + 1);
        }
    }

    function _previous() {
        if (hasPrevious) {
            _selectImageByIndex(currentIndex - 1);
        }
    }

    _init();
})();