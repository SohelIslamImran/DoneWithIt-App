import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import { ListItem } from "../components/lists";
import colors from "../config/colors";
import { ContactSellerForm } from "../components/forms";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/user.png")}
            title="Sohel Islam Imran"
            subTitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </ScrollView>
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
