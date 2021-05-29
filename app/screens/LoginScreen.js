import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        icon="email"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        placeholder="Password"
        icon="lock"
      />
      <AppButton />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
