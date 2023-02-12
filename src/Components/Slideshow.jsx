import { useEffect, useState } from 'react';
import { SlideshowImage, SlideshowThumbnail, SlideshowButton } from './';

function Slideshow(props) {
    const [shownIndex, setShownIndex] = useState(props.shownIndex ?? null);
    const [images] = useState(props.images ?? []);

    let shown = shownIndex != null,
        hasMultipleImages = (images.length ?? 0) > 1,
        hasPrevious = shownIndex > 0,
        hasNext = shownIndex < (images.length ?? 0) - 1,
        hasDownload = props.download ?? null != null;

    useEffect(() => {
        // if (shown) {
        //     console.log("mount");
        // } else {
        //     console.log("unmount");
        // }
    }, [shown]);

    function open() { setShownIndex(0); }
    function close() { setShownIndex(null); }
    function previous() { setShownIndex(shownIndex - 1); }
    function next() { setShownIndex(shownIndex + 1); }

    return (
        <span>
            <div onClick={open}>
                {props.children}
            </div>
            <div className={`slideshow ${shown ? 'slideshow--shown' : ''}`}>
                <div className={`slideshow__image ${!hasMultipleImages ? 'slideshow__image--full' : ''}`}>
                    <SlideshowImage src={images[shownIndex ?? 0].path} />
                </div>
                {hasMultipleImages && (
                    <div className="slideshow__thumbnails-holder">
                        <div className="slideshow__thumbnails">
                            {images.map((image, index) => (
                                <SlideshowThumbnail key={index} src={image.path} onClick={() => { setShownIndex(index) }} />
                            ))}
                        </div>
                    </div>
                )}
                <SlideshowButton type="close" onClick={close} />
                {hasPrevious && (
                    <SlideshowButton type="previous" onClick={previous} />
                )}
                {hasNext && (
                    <SlideshowButton type="next" onClick={next} />
                )}
                {hasDownload && (
                    <a className="slideshow__button slideshow__button--download" href={props.download} download></a>
                )}
            </div>
        </span>
    );
}

export default Slideshow;