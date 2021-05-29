import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: "1",
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/logo-red.png"),
  },
  {
    id: "2",
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/logo-red.png"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { title, price, image } }) => (
          <Card title={title} subTitle={"$" + price} image={image} />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
