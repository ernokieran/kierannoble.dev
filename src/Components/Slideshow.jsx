import { useEffect, useState, useId, useRef } from 'react';
import { useBindKeyPress, useKeyPress } from '~/Hooks';
import { SlideshowImage, SlideshowThumbnail, SlideshowButton } from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Slideshow(props) {
    const slideshowRef = useRef();
    const [images] = useState(props.images ?? []);
    const [shownIndex, setShownIndex] = useState(props.shownIndex ?? null);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    let id = useId(),
        shown = shownIndex != null,
        hasMultipleImages = (images.length ?? 0) > 1,
        hasDownload = props.download ?? null != null;

    useBindKeyPress(useKeyPress("Escape"), close, [shown]);
    useBindKeyPress(useKeyPress("ArrowLeft"), previous, [shown, hasPrevious]);
    useBindKeyPress(useKeyPress("ArrowRight"), next, [shown, hasNext]);

    useEffect(() => {
        setHasPrevious(shownIndex > 0);
        setHasNext(shownIndex < (images.length ?? 0) - 1);

        let element = null;

        if (shown) {
            element = document.querySelector(`[data-thumbnail-identifier="${generateThumbnailId(shownIndex)}"]`);
        }

        element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }, [shown, shownIndex]);

    function open() { setShownIndex(0); }
    function close() { setShownIndex(null); }
    function previous() { setShownIndex(shownIndex - 1); }
    function next() { setShownIndex(shownIndex + 1); }

    function generateThumbnailId(index) {
        return `${id}-thumbnail-${index}`;
    }

    // TO DO: allow closing of the slideshow, without closing when clicking on the main image
    // useEffect(() => {
    //     slideshowRef.current.addEventListener('click', close);
    // }, [slideshowRef]);

    return (
        <span>
            <div onClick={open}>
                {props.children}
            </div>
            <div ref={slideshowRef} className={`slideshow ${shown ? 'slideshow--shown' : ''}`}>
                <div className={`slideshow__image ${!hasMultipleImages ? 'slideshow__image--full' : ''}`}>
                    <SlideshowImage src={images[shownIndex ?? 0]?.path ?? ""} />
                </div>
                {hasMultipleImages && (
                    <div className="slideshow__thumbnails-holder">
                        <div className="slideshow__thumbnails">
                            {images.map((image, index) => (
                                <SlideshowThumbnail key={index} srcset={image} onClick={() => { setShownIndex(index) }} identifier={generateThumbnailId(index)} />
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
                    // TO DO: Do this with JS so that SlideshowButton can be used and this does not need to know about FontAwesomeIcon
                    <a className="slideshow__button slideshow__button--download" href={props.download} download>
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                )}
            </div>
        </span>
    );
}

export default Slideshow;