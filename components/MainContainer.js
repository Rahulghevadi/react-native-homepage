// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// import Cart from "./../pages/Cart";

// import HomeStackNavigator from "./HomeStackNavigator";
// import Login from "./Login";
// import LoginStackNavigator from "./LoginStackNavigator";
// import DrawerContainer from "./DrawerContainer";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import CartNavigation from "./CartNavigation";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainContainer = () => {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//                         if (route.name === "HOME") {
//                             iconName = focused ? "home" : "home-outline";
//                         } else if (route.name === "CART") {
//                             iconName = focused ? "cart" : "cart-outline";
//                         } else if (route.name === "LOGIN") {
//                             iconName = focused ? "log-in-outline" : "log-in-outline";
//                         }
//                         return <Ionicons name={iconName} size={size} color={color} />;
//                     },
//                     headerShown: false,
//                     tabBarActiveTintColor: "tomato",
//                     tabBarInactiveTintColor: "gray",
//         })}
//             >
//                 <Tab.Screen name="HOME" component={DrawerContainer} />
//                 <Tab.Screen name="CART" component={Cart} />
//                 <Tab.Screen name="LOGIN" component={LoginStackNavigator} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MainContainer;
