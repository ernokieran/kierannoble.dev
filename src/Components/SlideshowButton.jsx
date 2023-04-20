import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";

function SlideshowButton(props) {
    function getIconFromType(type) {
        switch (type) {
            case 'next':
                return faChevronRight;
            case 'previous':
                return faChevronLeft;
            case 'download':
                return faDownload;
            case 'close':
                return faTimes;
            default:
                return null;
        }
    }

    return (
        <div className={`slideshow__button slideshow__button--${props.type}`} onClick={props.onClick}>
            <FontAwesomeIcon icon={getIconFromType(props.type)} />
        </div>
    );

}

export default SlideshowButton;