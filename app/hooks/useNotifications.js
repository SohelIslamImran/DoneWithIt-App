import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokens from "../api/expoPushTokens";
import logger from "../utility/logger";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) {
        const { granted } = await Notifications.requestPermissionsAsync();
        if (!granted)
          return alert(
            "You need to enable permission to access the notification."
          );
      }

      const { data } = await Notifications.getExpoPushTokenAsync();
      expoPushTokens.register(data);
    } catch (error) {
      logger.log("Error getting a push token", error);
    }
  };
};
