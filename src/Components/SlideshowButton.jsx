function SlideshowButton(props) {
    return (
        <div className={`slideshow__button slideshow__button--${props.type}`} onClick={props.onClick}></div>
    );

}

export default SlideshowButton;