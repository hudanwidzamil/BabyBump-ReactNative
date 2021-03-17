import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.container}>
        <Image
        style = {{width:64,height:64}}
        source={require("./assets/icon.png")}/>
        <Text>BabyBump</Text>
    </View>
  );
}
function SocialScreen() {
  return (
    <View style={styles.container}>
      <Text>Social!</Text>
    </View>
  );
}
function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text>Shop!</Text>
    </View>
  );
}
function MyAccountScreen() {
  return (
    <View style={styles.container}>
      <Text>MyAccount!</Text>
    </View>
  );
}
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
});
