import React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import MyAccountScreen from './main/MyAccount';
import ShopScreen from './main/Shop';
import SocialScreen from './main/Social';
import HomeScreen from './main/Home';

const IconBottom = (props) => {
    const { color, focused } = props.data
    let colorSelected = focused ? color : 'grey'
    return (
        <View>
            <Image source={props.image} style={{ width: 24, height: 26, tintColor: colorSelected }} />
        </View>
    )
  }

function Main(props) {

    
    return (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor:'black'}}>
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
    );
}

export default Main;