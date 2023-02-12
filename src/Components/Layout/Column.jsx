function Column(props) {
    return (
        <div className={`layout layout__column ${props.size ?? false ? `layout--${props.size}` : ''}`}>
            {props.children}
        </div>
    );
}

export default Column;