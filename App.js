import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyAccountScreen from './src/MyAccount';
import ShopScreen from './src/Shop';
import SocialScreen from './src/Social';
import HomeScreen from './src/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component = {HomeScreen}/>
        <Tab.Screen name = "Social" component = {SocialScreen}/>
        <Tab.Screen name = "Shop" component = {ShopScreen}/>
        <Tab.Screen name = "MyAccount" component = {MyAccountScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar:{
    flex:0.25,
    backgroundColor: '#CAA8F5',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 32,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
  },
});
