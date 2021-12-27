import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import Homepage from "./../pages/Homepage";
import Login from "./Login";
import Signup from "./Signup";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{
          title: "Main",
          headerStyle: {
            backgroundColor: "#09f",
          },
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
