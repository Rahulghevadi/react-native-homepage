import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import Homepage from "./../pages/Homepage";
import Login from "./Login";
import Signup from "./Signup";
import LoginStackNavigator from "./LoginStackNavigator";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Homepage} />
      <HomeStack.Screen name="Login" component={LoginStackNavigator} />

      <HomeStack.Screen name="Signup" component={Signup} />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;
