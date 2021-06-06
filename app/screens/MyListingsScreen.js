import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import ErrorScreen from "./ErrorScreen";

const MyListingsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: myListings,
    setData,
    error,
    loading,
    request: loadMyListings,
  } = useApi(listingsApi.getMyListings);

  useEffect(() => {
    loadMyListings();
    return () => setRefreshing(false);
  }, [refreshing]);

  const handleDelete = ({ id }) => {
    setData(myListings.filter((listing) => listing.id !== id));
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        <ErrorScreen
          style={styles.error}
          visible={error}
          error="Couldn't retrieve the listings."
          onPress={loadMyListings}
        />
        <FlatList
          data={myListings}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={`$${item.price}`}
              subTitle={item.title}
              url={item.images[0].thumbnailUrl}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      </Screen>
    </>
  );
};

export default MyListingsScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  error: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
});
