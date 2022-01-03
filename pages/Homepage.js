import * as React from "react";
import { SafeAreaView } from "react-native";
import Header from "./../components/Header";
import Slider from "./../components/Slider";
import Maincontent from "./../components/Maincontent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

const Homepage = (props) => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#20b2aa", }}>
      <Header navigation={props.navigation} />
      <Slider />
      <Maincontent navigation={props.navigation} /> 
    </SafeAreaView>
  ); 
};

export default Homepage;
