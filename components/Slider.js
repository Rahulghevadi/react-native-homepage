import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SliderData from "./data";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { imgUrl, info } = SliderData[index];

  const checkNumber = (number) => {
    if (number > SliderData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return SliderData.length - 1;
    }
    return number;
  };

  const preBtnHandle = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextBtnHandle = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <View style={styles.Container}>
      <View style={{ paddingLeft: 10 }}>
        <TouchableOpacity onPress={preBtnHandle}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.slider}>
        <View styale={{ borderRadius: 15, }}>
          <Image source={{ uri: imgUrl }} style={styles.image}></Image>
        </View>
        <View style={styles.info}>
          <Text>{info}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={nextBtnHandle} style={{ paddingRight: 10 }}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  Container: {
    width: "auto",
    height: "35%",
    marginTop: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      backgroundColor: 'rgba(101, 92, 92, 0.91)',
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#F4F48F",
  },

  slider: {
    width: 260,
    height: 160,
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginLeft: 20,
    width: 125,
  },
  image: {
    borderRadius: 15,
    width: 130,
    height: 130,
  },
});
