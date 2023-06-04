import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function WebFrame(props) {
    return (
        <div className="section__frame">
            <iframe src={props.src} className="frame" />
            <a className="frame__action" href={props.src} target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <span className="frame__action-text"></span>
        </div >
    );
}

export default WebFrame;