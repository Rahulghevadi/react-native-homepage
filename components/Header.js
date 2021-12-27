import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import Icon from "./Icon.png";
import SearchInput from "./SearchInput";
import { Button } from "react-native-paper";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Icon} style={styles.icon} />
      </View>
      <View>
        <SearchInput />
      </View>
      {/* <View onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "green", fontSize: 20 }}>LogIn </Text>
      </View> */}
      <Button
        style={{ margin: 10 }}
        mode="contained"
        onPress={() => navigation.navigate("Signup")}
      >
        Login
      </Button>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    height: 100,
    flexDirection: "row",
    padding: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
