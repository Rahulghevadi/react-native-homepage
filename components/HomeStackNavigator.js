import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import Homepage from "./../pages/Homepage";
import Login from "./Login";
import Signup from "./Signup";
import LoginStackNavigator from "./LoginStackNavigator";
import Cart from "../pages/Cart";
import Header from "./Header";
import Slider from "./Slider";
import Maincontent from "./Maincontent";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    // <NavigationContainer>
    // <HomeStack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    // >
    // <HomeStack.Screen name="Home2" component={Homepage} />
    <Homepage />

    /* <HomeStack.Screen name="Slider" component={Slider} />
    <HomeStack.Screen name="Header" component={Header} />
    <HomeStack.Screen name="Main" component={Maincontent} /> */
    /* </HomeStack.Navigator> */
    /* </NavigationContainer> */
  );
};
export default HomeStackNavigator;
