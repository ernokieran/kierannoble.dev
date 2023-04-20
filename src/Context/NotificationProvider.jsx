import { useState } from 'react';
import { NotificationContext } from '~/Context';
import { Notification } from '~/Components';

function NotificationContextProvider(props) {
    const [notifications, setNotifications] = useState([
        // {
        //     id: Math.random().toString(36).substr(2, 9),
        //     type: 'success',
        //     title: 'Success',
        //     message: 'This is a success message',
        //     action: () => {
        //         console.log('Success action');
        //     }
        // },
        // {
        //     id: Math.random().toString(36).substr(2, 9),
        //     type: 'error',
        //     title: 'Error',
        //     message: 'This is an error message',
        //     action: () => {
        //         console.log('Error action');
        //     }
        // },
        // {
        //     id: Math.random().toString(36).substr(2, 9),
        //     type: 'warning',
        //     title: 'Warning',
        //     message: 'This is a warning message',
        //     action: () => {
        //         console.log('Warning action');
        //     }
        // },
        // {
        //     id: Math.random().toString(36).substr(2, 9),
        //     type: 'info',
        //     title: 'Info',
        //     message: 'This is an info message',
        //     action: () => {
        //         console.log('Info action');
        //     }
        // }
    ]);

    return (
        <NotificationContext.Provider value={{ notifications, setNotifications }}>
            <div className="notifications">
                <div className="notifications__holder">
                    {notifications.map((notification, index) => (
                        <Notification
                            key={index}
                            id={notification.id}
                            type={notification.type}
                            title={notification.title}
                            message={notification.message}
                            action={notification.action}
                        />
                    ))}
                </div>
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider;
