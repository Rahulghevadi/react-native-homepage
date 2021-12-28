import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

import Icon from "./Icon.png";
import SearchInput from "./SearchInput";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={Icon} style={styles.icon} />
        </View>
        <View>
          <SearchInput />
        </View>
        <Button onPress={() => navigation.navigate("Login")} title="Login" />
      </View>
    </SafeAreaView>
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
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
