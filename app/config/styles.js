import { Platform, StyleSheet } from "react-native";

import colors from "./colors";

const defaultStyles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default defaultStyles;
