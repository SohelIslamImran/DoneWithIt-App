import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import ErrorScreen from "./ErrorScreen";

const ListingsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
    return () => setRefreshing(false);
  }, [refreshing]);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        <ErrorScreen
          visible={error}
          error="Couldn't retrieve the listings."
          onPress={loadListings}
        />
        <FlatList
          data={listings}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      </Screen>
    </>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: colors.light,
  },
});
