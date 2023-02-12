function Section(props) {
    return (
        <div className={`section ${props.type ?? false ? `section--${props.type}` : ""} ${props.align ?? false ? `section--${props.align}` : ""}`}>
            <div className="content layout__column layout--small">
                {props.children}
            </div>
        </div>
    );
}

export default Section;