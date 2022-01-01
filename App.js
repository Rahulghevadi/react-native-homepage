import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StatusBar } from "react-native";

import DrawerContainer from "./components/DrawerContainer";


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <DrawerContainer />
    </>
  );
};
