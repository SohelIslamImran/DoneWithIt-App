import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { ListItem } from "../components/lists";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/me.png")}
            title="Sohel Islam Imran"
            subTitle="5 Listings"
          />
        </View>
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
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
