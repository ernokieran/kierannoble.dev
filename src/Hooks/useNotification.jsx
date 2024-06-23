import { useContext } from 'react';
import { NotificationContext } from '@/Context';

function useNotification() {
    const { notifications, setNotifications } = useContext(NotificationContext);

    return {
        addNotification: (type, title, message, action = null) => {
            setNotifications([
                ...notifications,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    type: type,
                    title: title,
                    message: message,
                    action: action
                }
            ]);
        },
        removeNotification: (id) => {
            let notification = notifications.find(notification => notification.id === id);

            const newNotifications = [...notifications];
            newNotifications.splice(notifications.indexOf(notification), 1);
            setNotifications(newNotifications);
        }
    }
}

export default useNotification;