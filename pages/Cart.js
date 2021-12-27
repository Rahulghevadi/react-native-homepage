import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cart = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={() => navigation.navigate("Home")}>
        {" "}
        click me to go home
      </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
