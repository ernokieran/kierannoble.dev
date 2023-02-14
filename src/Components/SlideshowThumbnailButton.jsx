function SlideshowThumbnailButton(props) {
    return (
        <div className="section__image">
            {props.children}
            <span className="image__action"></span>
            <span className="image__action-text"></span>
        </div>
    );
}

export default SlideshowThumbnailButton;