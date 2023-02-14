function Error(props) {
    const url = new URL(import.meta.url);

    function goHome() {
        window.location.href = url.origin;
    }

    return (
        <div className="error">
            <h1 className="error__title">{props.title ?? "Whoops!"}</h1>
            <h2 className="error__subtitle">{props.subtitle ?? "Something went wrong 🥲"}</h2>
            <p className="error__description">{props.description ?? "Please try again later."}</p>
            <div className="error__action" onClick={goHome}>Go Home</div>
        </div>
    );
}

export default Error