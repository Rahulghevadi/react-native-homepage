import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";

// const { width: WIDTH } = Dimensions.get('window')
// const image = { uri: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk' }

export default function Login({ navigation }) {
  return (
    // <ImageBackground style={styles.backgroundImage} sizeMode='cover' source={image}>
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Enter Email/Number"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        secureTextEntry
        label="Password"
      />
      <Button
        style={{ margin: 10 }}
        mode="contained"
        onPress={() => navigation.navigate("Home")}
      >
        Login
      </Button>
      <Text>New to VEGES?</Text>
      <Button
        style={{ margin: 10 }}
        mode="outlined"
        onPress={() => navigation.navigate("Signup")}
      >
        Register Here!
      </Button>
    </View>

    // </ImageBackground>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: `#deb887`,
    padding: 30,
    flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  // backgroundImage: {
  //     width: 'auto',
  //     height: 'auto',
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  // },
  input: {
    width: 300,
    height: 40,
    // paddingLeft: 45,
    marginHorizontal: 25,
    fontSize: 16,
    // backgroundColor: 'red',
    borderRadius: 25,
  },
});
