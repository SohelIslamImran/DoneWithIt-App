import { useEffect, useState } from "react";
import * as Location from "expo-location";

import logger from "../utility/logger";

export default useLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        alert("You need to enable permission to access the location.");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      alert("Please turn on your location!");

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });

      logger.log("Error getting location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
