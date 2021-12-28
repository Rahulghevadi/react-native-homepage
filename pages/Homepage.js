import * as React from "react";
import { SafeAreaView } from "react-native";
import Header from "./../components/Header";
import Slider from "./../components/Slider";
import Maincontent from "./../components/Maincontent";

const Homepage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Slider />
      <Maincontent />
    </SafeAreaView>
  );
};

export default Homepage;
