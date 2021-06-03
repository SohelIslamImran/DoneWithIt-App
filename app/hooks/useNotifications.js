import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokens from "../api/expoPushTokens";

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
      if (!permission.granted) return;

      const { data } = await Notifications.getExpoPushTokenAsync();
      expoPushTokens.register(data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
