"use strict";

(function() {
    const
        CSS_SLIDESHOW_IMAGE_HOLDER = "slideshow__image-holder",
        CSS_SLIDESHOW_SHOWN = "slideshow--shown",
        CSS_SLIDESHOW_SINGLE =  "slideshow--single",
        CSS_SLIDESHOW_THUMBNAIL =  "slideshow__thumbnail",
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
        isOpen = false;
    
    let
        screenWidth,
        touchStartX,
        touchEndX;
    
    let currentImageElement;
    
    function _init() {
        let slideshowElements = document.querySelectorAll(`[${DATA_SLIDESHOW}]`);
        
        if (slideshowElements.length !== 0) {
            slideshowElements.forEach((slideshow) => {
                slideshow.addEventListener("click", () => _open(JSON.parse(slideshow.getAttribute(DATA_SLIDESHOW))));
            });
            
            slideshow.addEventListener("click", (event) => {
                if (event.target.classList.contains(CSS_SLIDESHOW_IMAGE_HOLDER)) {
                    _close();
                }
            })
            
            slideshowClose.addEventListener("click", () => _close());
            slideshowNext.addEventListener("click", () => _next());
            slideshowPrevious.addEventListener("click", () => _previous());

            slideshowImageHolder.addEventListener("touchstart", (event) => {
                touchStartX = event.changedTouches[0].screenX;
            });
            
            slideshowImageHolder.addEventListener("touchend", (event) => {
                touchEndX = event.changedTouches[0].screenX;
                
                let swipeThreshold = screenWidth * 0.1;
                
                if ((touchStartX - touchEndX) > swipeThreshold) {
                    _next();
                }
                else if ((touchEndX - touchStartX) > swipeThreshold) {
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
            
            window.addEventListener("resize", () => {
                console.log("resize");
               if (isOpen) {
                   //TODOK: debounce;
                   _renderThumbnails();
                   _selectImageByIndex(currentIndex);
               }
            });
        }
    }
    
    function _close() {
        slideshow.classList.remove(CSS_SLIDESHOW_SHOWN);

        currentImageElement.remove();
        currentImageElement = null;
        slideshowThumbnailsHolder.innerHTML = '';
        
        if (imageCount === 1) {
            slideshow.classList.remove(CSS_SLIDESHOW_SINGLE);
        }
        
        isOpen = false;
    }
    
    function _open(data) {
        images = data.Images;
        imageCount = images.length;

        let downloadURL = data.DownloadURL;
        
        if (downloadURL) {
            slideshowDownload.href = downloadURL;
            slideshowDownload.style.visibility = 'visible';
        }
        else {
            slideshowDownload.style.visibility = 'hidden';
        }
        
        if (imageCount === 1) {
            slideshow.classList.add(CSS_SLIDESHOW_SINGLE);
        }
        
        slideshow.classList.add(CSS_SLIDESHOW_SHOWN);
        
        _renderThumbnails();

        _selectImageByIndex(0);
        isOpen = true;
    }
    
    function _renderThumbnails() {
        screenWidth = window.innerWidth; //TODOK: move this;
        
        if (imageCount !== 1) {
            slideshowThumbnailsHolder.innerHTML = '';
            
            slideshowThumbnailsHolder.scrollTo(0, 0);

            let thumbnailsFragment = document.createDocumentFragment();

            for (let i = 0; i < images.length; i++) {
                let currentImage = images[i];

                let holderElement = document.createElement("div"),
                    imageElement = document.createElement("img");

                let height = window.getComputedStyle(slideshow).getPropertyValue('--thumbnail-height').replace("px", ""), //TODOK get from css
                    width = Math.round(height * currentImage.Ratio);

                imageElement.src = `/api/image/resize/height=${height}${currentImage.URL}`; //TODOK

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
            
            thumbnailElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
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