import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Componentes/Home";
import Cart from "../Componentes/CartScreen";
const Stack = createStackNavigator();

export default function StackNavigator1() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        name="Cart"
        options={{ headerShown: false }}
        component={Cart}
      />
    </Stack.Navigator>
  )
}
