import { useEffect } from "react";

function Redirection(props) {
    const REDIRECTION_TIMEOUT = 0;

    useEffect(() => {
        setTimeout(() => {
            window.location.replace(props.url)
        }, REDIRECTION_TIMEOUT);
    }, []);

    return (
        <div className="redirection">
            <h1 className="redirection__title">{`Redirecting to ${props.name}`}</h1>
            <a href={props.url} className="redirection__subtitle">{props.url}</a>
            <a href={props.url} className="redirection__description">If you are not redirected automatically, please click here.</a>
        </div>
    );
}

export default Redirection;