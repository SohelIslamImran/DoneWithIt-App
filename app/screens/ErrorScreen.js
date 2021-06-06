import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";

const ErrorScreen = ({ visible, error, onPress, style }) => {
  if (!visible || !error) return null;
  return (
    <View style={[styles.error, style]}>
      <AppText style={styles.errorText}>{error}</AppText>
      <AppButton title="Retry" onPress={onPress} />
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  error: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    marginBottom: 20,
    color: colors.danger,
    fontWeight: "600",
  },
});
