import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Fruits from "./fruits.png";
import Vegetables from "./vegetables.png";

const Maincontent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 25, color: "white", }}>Catogeries</Text>
      </View>
      <View style={styles.itemcontainer}>
        <View style={styles.list} >
          <Image 
            source={Fruits}
            style={{ width: 150, height: 120, borderRadius: 15, }}
          />
          <Text onPress={() => navigation.navigate("Fruits")} style={{ fontSize: 20 }}>Fruits </Text>
        </View>
        <View style={styles.list}>
          <Image
            source={Vegetables}
            style={{ width: 150, height: 120, borderRadius: 15, }}
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
    width: "auto",
    height: "45%",
    margin: 10,
    borderRadius: 10,
    marginTop: 0,
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
    backgroundColor: "brown",
    position: "relative",
  },
  itemcontainer: {
    flexDirection: "row",
    borderRadius: 10,
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
      borderRadius: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    elevation: 5,
    bottom: 30,
    position: "relative",
  },
  text: {
    position: "relative",
    paddingLeft: 150,
  },
});
