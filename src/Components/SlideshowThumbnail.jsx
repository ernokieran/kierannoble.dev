function SlideshowThumbnail(props) {
    return (
        <div className="slideshow__thumbnail" onClick={props.onClick}>
            <img width="120" height="60" src={props.src} loading="lazy" />
        </div>
    );
}

export default SlideshowThumbnail;