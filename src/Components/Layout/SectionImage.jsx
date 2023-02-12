function SectionImage(props) {
    return (
        <div className="section__image">
            <img src={props.src} alt={props.alt} className={`image ${props.noShadow ? "no-shadow" : ""}`} loading="lazy" decoding="async" />
        </div>
    );
}

export default SectionImage;