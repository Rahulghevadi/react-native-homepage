import * as React from "react";
import { SafeAreaView } from "react-native";
import Header from "./../components/Header";
import Slider from "./../components/Slider";
import Maincontent from "./../components/Maincontent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

const Homepage = () => {
  return (

    // <NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen name="Main" component={Maincontent} />
    //   <Stack.Screen name="Header" component={Header} />
    //   <Stack.Screen name="Slider" component={Slider} />

    // </Stack.Navigator>
    /* </NavigationContainer> */


    <SafeAreaView style={{ flex: 1, backgroundColor: "#20b2aa", }}>
      <Header />
      <Slider />
      <Maincontent />
    </SafeAreaView>
  ); 
};

export default Homepage;
