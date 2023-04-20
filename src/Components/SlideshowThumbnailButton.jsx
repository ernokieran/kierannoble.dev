import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function SlideshowThumbnailButton(props) {
    return (
        <div className="section__image">
            {props.children}
            <span className="image__action">
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <span className="image__action-text"></span>
        </div>
    );
}

export default SlideshowThumbnailButton;