import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../Context";
import { Slideshow } from "../../Components";
import cv from "../../assets/KieranNoble-CV-Nov22.webp"
import cvPDF from "../../assets/KieranNoble-CV-Nov22.pdf"

function Header() {
    const { project } = useContext(ProjectContext);

    let cvItems = [
        {
            path: cv,
        }
    ];

    return (
        <nav className="navigation">
            <Link to="/" className="layout layout__row layout__row--ignoreMobile layout--nomargin">
                <div className={`navigation__back ${project != 'home' ? '' : 'navigation__back--hidden'}`}></div>
                <div className="logo"></div>
            </Link>
            <Slideshow images={cvItems} download={cvPDF}>
                <div className="navigation__action">CV</div>
            </Slideshow>
        </nav>
    );
}

export default Header