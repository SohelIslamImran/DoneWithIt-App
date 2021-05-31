import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
