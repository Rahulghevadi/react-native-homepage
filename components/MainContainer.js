import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Homepage from "./../pages/Homepage";
import Cart from "./../pages/Cart";
import Login from "./Login";
import Signup from "./Signup";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
