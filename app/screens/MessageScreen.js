import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import ListItem from "../components/ListItem";

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data
        keyExtractor
        renderItem={({ item }) => <ListItem title subTitle image />}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
