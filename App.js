import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppProvider from "./Context/Context";
import Home from "./Componentes/Home";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator1 from "./Navigation/StackNavigator1";
export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <StackNavigator1 />
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
