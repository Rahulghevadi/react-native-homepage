import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function Signup({ navigation }) {
  return (
    // <ImageBackground style={styles.image} source={require('')} resizeMode="cover">
    <View style={styles.signUpContainer}>
      <TextInput style={styles.row1} mode="outlined" label="Enter Name" />
      <TextInput
        style={styles.row1}
        mode="outlined"
        label="Enter Phone Number"
      />
      <TextInput style={styles.row1} mode="outlined" label="Enter Email" />
      <TextInput
        style={styles.row1}
        mode="outlined"
        secureTextEntry
        label="Password"
        right={<TextInput.Icon name="eye" />}
        // placeholder="Enter Password"
      />
      <Button
        style={{ margin: 10 }}
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Signup
      </Button>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    backgroundColor: `#deb887`,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 30,
    borderRadius: 15,
  },
  row1: {
    height: 40,
    width: 300,
    borderColor: "blue",
    // borderWidth: 20,
    borderRadius: 10,
    // margin: 10,
  },
});
