function Column(props) {
    return (
        <div className={`layout layout__column ${props.size ?? false ? `layout--${props.size}` : ''} ${props.noGap ?? false ? 'layout--nogap' : ''} `}>
            {props.children}
        </div>
    );
}

export default Column;