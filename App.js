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

const IconBottom = (props) => {
  const { color, focused } = props.data
  let colorSelected = focused ? color : 'grey'
  return (
      <View>
          <Image source={props.image} style={{ width: 24, height: 26, tintColor: colorSelected }} />
      </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'black'
      }}>
        <Tab.Screen name = "Home" component = {HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./assets/navbaricon/home.png')}/>
            )
          }}
        />
        <Tab.Screen name = "Social" component = {SocialScreen}
          options={{
            tabBarLabel: "Social",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./assets/navbaricon/social.png')}/>
            )
          }}
        />
        <Tab.Screen name = "Shop" component = {ShopScreen}
          options={{
            tabBarLabel: "Shop",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./assets/navbaricon/shop.png')}/>
            )
          }}
        />
        <Tab.Screen name = "MyAccount" component = {MyAccountScreen}
          options={{
            tabBarLabel: "My Account",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./assets/navbaricon/myaccount.png')}/>
            )
          }}
        />
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
