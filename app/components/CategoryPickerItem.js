import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({
  item: { backgroundColor, icon, label },
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={backgroundColor} name={icon} size={80} />
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
