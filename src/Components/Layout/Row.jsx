function Row(props) {
    return (
        <div className={`layout layout__row ${props.equal ?? false ? 'layout__row--equal' : ''}`}>
            {props.children}
        </div>
    );
}

export default Row;