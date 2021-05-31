import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { ListItem } from "../components/lists";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image source />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem title subTitle image />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 7,
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});
