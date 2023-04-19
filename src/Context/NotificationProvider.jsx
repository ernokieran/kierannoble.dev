import { useState } from 'react';
import { NotificationContext } from '~/Context';

function NotificationContextProvider(props) {
    const [notifications, setNotifications] = useState([]);

    const doAction = (index) => {
        return () => {
            if (notifications[index].action) {
                notifications[index].action();
            }

            const newNotifications = [...notifications];
            newNotifications.splice(index, 1);
            setNotifications(newNotifications);
        }
    }


    return (
        <NotificationContext.Provider value={{ notifications, setNotifications }}>
            <div className="notifications">
                <div className="notifications__holder">

                    {notifications.map((notification, index) => (
                        <div key={index} className={`notification notification--${notification.type}`} onClick={doAction(index)}>
                            <div className="notification__icon"></div>
                            <div className="notification__content">
                                <div className="notification__title">{notification.title}</div>
                                <div className="notification__message">{notification.message}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider;
