import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Signup from './Signup';
import Homepage from '../pages/Homepage';
import Help from './Help';
import Cart from '../pages/Cart';
import LoginStackNavigator from './LoginStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: 'brown',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                }}
            >
                <Drawer.Screen name="Home" component={Homepage} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={25} color={color} />
                    )
                }} />
                <Drawer.Screen name="Login" component={LoginStackNavigator} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={25} color={color} />
                    )
                }} />
                <Drawer.Screen name="Cart" component={Cart} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="cart" size={25} color={color} />
                    )
                }} />

                <Drawer.Screen name="Help" component={Help} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="help" size={25} color={color} />
                    )
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
