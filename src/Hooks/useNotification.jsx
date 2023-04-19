import { useContext } from 'react';
import { NotificationContext } from '~/Context';

function useNotification() {
    const { notifications, setNotifications } = useContext(NotificationContext);

    return {
        addNotification: (type, title, message, action = null) => {
            setNotifications([
                ...notifications,
                {
                    type: type,
                    title: title,
                    message: message,
                    action: action
                }
            ]);
        }
    }
}

export default useNotification;