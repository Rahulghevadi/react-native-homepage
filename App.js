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
