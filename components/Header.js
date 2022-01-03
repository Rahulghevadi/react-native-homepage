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

import IconLogo from "./IconLogo.png";
import SearchInput from "./SearchInput";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';



const Header = ({ navigation }) => {
  return (

    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={IconLogo} style={styles.icon} />
        </View>
        <View>
          <SearchInput />
        </View>
        <Ionicons name="person-outline" size={25} onPress={
          () => navigation.navigate('Login')} />
        <Icon name="shopping-cart" size={30} color="#900" onPress={
          () => navigation.navigate('Cart')
        } />

      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    // backgroundColor: "#20b2aa",
    height: 100,
    flexDirection: "row",
    paddingTop: 50,
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
