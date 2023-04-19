import { createContext } from "react";

const NotificationContext = createContext({
    notifications: [],
    setNotifications: (notifications) => { }
});

export default NotificationContext;