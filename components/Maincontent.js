import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Fruits from "./fruits.png";
import Vegetables from "./vegetables.png";
import { NavigationContainer } from "@react-navigation/native";

const Maincontent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 20 }}>Catogeries</Text>
      </View>
      <View style={styles.itemcontainer}>
        <View style={styles.list} onPress={() => navigation.navigate("fruits")}>
          <Image
            source={Fruits}
            style={{ width: 120, height: 110, borderRadius: 5 }}
          />
          <Text style={{ fontSize: 20 }}>Fruits </Text>
        </View>
        <View style={styles.list}>
          <Image
            source={Vegetables}
            style={{ width: 120, height: 110, borderRadius: 5 }}
          />
          <Text style={{ fontSize: 20 }}>Vegetables </Text>
        </View>
      </View>
    </View>
  );
};

export default Maincontent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "48%",
    marginTop: 10,
    display: "flex",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
    position: "relative",
  },
  itemcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  list: {
    width: 150,
    height: 150,
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    bottom: 30,
    position: "relative",
  },
  text: {
    position: "relative",
    paddingLeft: 150,
  },
});
