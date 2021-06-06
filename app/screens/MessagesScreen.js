import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messages";
import ErrorScreen from "./ErrorScreen";
import ActivityIndicator from "../components/ActivityIndicator";

const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: messages,
    setData,
    error,
    loading,
    request: loadMessages,
  } = useApi(messagesApi.get);

  useEffect(() => {
    loadMessages();
    return () => setRefreshing(false);
  }, [refreshing]);

  const handleDelete = (message) => {
    setData(messages.filter((m) => m.id !== message.id));
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        <ErrorScreen
          style={styles.error}
          visible={error}
          error="Couldn't retrieve the messages."
          onPress={loadMessages}
        />
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.fromUser.name}
              subTitle={item.content}
              image={require("../assets/user.png")}
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

export default MessagesScreen;

const styles = StyleSheet.create({
  error: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
});
