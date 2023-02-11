import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../Context";

function Header() {
    const { project } = useContext(ProjectContext);

    return (
        <nav className="navigation">
            <div className="layout layout__row layout__row--ignoreMobile layout--nomargin">
                <Link to="/">
                    <div className={`navigation__back ${project != 'home' ? '' : 'navigation__back--hidden'}`}></div>
                    <div className="logo"></div>
                </Link>
            </div>
            <a className="navigation__action">CV</a>
        </nav >
    );
}

export default Header