import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBGe2XAOYcvGL6TArKI0gS2b2Q5ShvYj-k",
  authDomain: "babybump-e453e.firebaseapp.com",
  projectId: "babybump-e453e",
  storageBucket: "babybump-e453e.appspot.com",
  messagingSenderId: "763716559924",
  appId: "1:763716559924:web:1cb6461a81b15c2ca85661",
  measurementId: "G-72GSNGVEF1"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
};

import LandingScreen from './src/auth/Landing';
import RegisterScreen from './src/auth/Register';
import LoginScreen from './src/auth/Login';
import MainScreen from  './src/Main';
import PostScreen from './src/main/Post';
import DetailScreen from './src/main/Detail';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
        loaded: false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render(){
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return(
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
          <Text>Loading</Text>
        </View>
      )
    } 
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
          <StatusBar style="auto"/>
        </NavigationContainer>  
      )  
    }
    return (
      <NavigationContainer>
        <StatusBar style="auto"/>
        <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Post" component={PostScreen} navigation={this.props.navigation}/>
        <Stack.Screen name="Detail" component={DetailScreen} navigation={this.props.navigation}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}

export default App;