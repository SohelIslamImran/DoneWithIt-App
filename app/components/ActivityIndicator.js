import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: colors.white,
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
    elevation: 1,
  },
});
