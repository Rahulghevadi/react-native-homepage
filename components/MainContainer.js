// // import React from 'react'
// // import { View } from 'react-native'
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import Header from './Header';
// // import Cart from '../pages/Cart';
// // import Login from './Login';
// // import LoginStackNavigator from './LoginStackNavigator';
// // import Fruits from './Fruits';
// // import Home from './Home';
// // import { NavigationContainer } from '@react-navigation/native';

// // const Stack = createNativeStackNavigator();
// // function MainContainer() {
// //     return (
// //         <View>
// //             <NavigationContainer>
// //                 <Stack.Screen name="Home" component={Home} />
// //                 <Stack.Screen name="Cart" component={Cart} />
// //                 <Stack.Screen name="Login" component={LoginStackNavigator} />
// //                 <Stack.Screen name="Fruits" component={Fruits} />
// //             </NavigationContainer>
// //         </View>

// //     )
// // }

// // export default MainContainer






// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// import { NavigationContainer, useLinkProps } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// import Cart from "./../pages/Cart";

// import HomeStackNavigator from "./HomeStackNavigator";
// import Login from "./Login";
// import LoginStackNavigator from "./LoginStackNavigator";
// import DrawerContainer from "./DrawerContainer";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import CartNavigation from "./CartNavigation";
// // import Homepage from "../pages/Homepage";

// // const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainContainer = (props) => {
//     return (
//         // <NavigationContainer>
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;

//                     if (route.name === "HOME") {
//                         iconName = focused ? "home" : "home-outline";
//                     } else if (route.name === "CART") {
//                         iconName = focused ? "cart" : "cart-outline";
//                     } else if (route.name === "LOGIN") {
//                         iconName = focused ? "log-in-outline" : "log-in-outline";
//                     }
//                     return <Ionicons name={iconName} size={size} color={color} />;
//                 },
//                 headerShown: false,
//                 tabBarActiveTintColor: "tomato",
//                 tabBarInactiveTintColor: "gray",
//             })}
//         >
//             <Tab.Screen name="HOME" component={HomeStackNavigator} />
//             <Tab.Screen name="CART" component={Cart} />
//             <Tab.Screen name="LOGIN" component={LoginStackNavigator} />
//         </Tab.Navigator>
//         // </NavigationContainer>
//     );
// };

// export default MainContainer;
