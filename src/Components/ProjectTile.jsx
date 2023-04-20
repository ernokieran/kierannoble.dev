import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProjectTile(props) {
    return (
        <div className={`${props.name} ${props.className}`}>
            <Link to={props.route}>
                <article className="portfolio-card">
                    <div className="portfolio-card__title">
                        <div className="portfolio-card__title-logo"></div>
                        <div className="portfolio-card__title-description"></div>
                    </div>
                    <div className="portfolio-card__chip"></div>
                    {props.route != null && <>
                        <div className="portfolio-card__action">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <span className="portfolio-card__action-text"></span>
                    </>}
                </article>
            </Link>
        </div>
    );
}

export default ProjectTile