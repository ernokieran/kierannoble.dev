import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faExclamation, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useNotification } from '@/Hooks';

function Notification(props) {
    const NotificationManager = useNotification();

    const doAction = (action) => {
        return () => {
            if (action) {
                action();
            }

            NotificationManager.removeNotification(props.id);
        }
    }

    function getIconForType(type) {
        switch (type) {
            case 'success':
                return faCheck;
            case 'error':
                return faTimes;
            case 'warning':
                return faExclamation;
            case 'info':
                return faInfo;
            default:
                return null;
        }
    }

    return (
        <div className={`notification notification--${props.type}`} onClick={doAction(props.action)}>
            <div className="notification__icon">
                <FontAwesomeIcon icon={props.icon ?? getIconForType(props.type)} />
            </div>
            <div className="notification__content">
                <div className="notification__title">{props.title}</div>
                <div className="notification__message">{props.message}</div>
            </div>
        </div>
    )
}

export default Notification;