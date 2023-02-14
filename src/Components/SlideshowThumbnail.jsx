function SlideshowThumbnail(props) {
    let image = props?.srcset?.thumbnail ?? props?.srcset?.path ?? null;

    return (
        <div className="slideshow__thumbnail" onClick={props.onClick}>
            <img width="120" height="60" src={image} loading="lazy" />
        </div>
    );
}

export default SlideshowThumbnail;