import { useEffect, useState } from 'react';
import { useBindKeyPress, useKeyPress } from '../Hooks';
import { SlideshowImage, SlideshowThumbnail, SlideshowButton } from './';

function Slideshow(props) {
    const [images] = useState(props.images ?? []);
    const [shownIndex, setShownIndex] = useState(props.shownIndex ?? null);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    let shown = shownIndex != null,
        hasMultipleImages = (images.length ?? 0) > 1,
        hasDownload = props.download ?? null != null;

    useBindKeyPress(useKeyPress("Escape"), close, [shown]);
    useBindKeyPress(useKeyPress("ArrowLeft"), previous, [shown, hasPrevious]);
    useBindKeyPress(useKeyPress("ArrowRight"), next, [shown, hasNext]);

    useEffect(() => {
        setHasPrevious(shownIndex > 0);
        setHasNext(shownIndex < (images.length ?? 0) - 1);
    }, [shownIndex]);

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
                    <SlideshowImage src={images[shownIndex ?? 0]?.path ?? ""} />
                </div>
                {hasMultipleImages && (
                    <div className="slideshow__thumbnails-holder">
                        <div className="slideshow__thumbnails">
                            {images.map((image, index) => (
                                <SlideshowThumbnail key={index} srcset={image} onClick={() => { setShownIndex(index) }} />
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