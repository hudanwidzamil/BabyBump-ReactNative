import React, {Component} from 'react';
import { View, Button, TextInput, Switch, Text } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore");

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            name: '',
            uname: '',
            isPregnant: false,
            registerDate: new Date(),
            pregDay: 0,
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const { email, password, name, uname, isPregnant, pregDay, registerDate } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    name,
                    email,
                    uname,
                    isPregnant,
                    pregDay,
                    registerDate,
                });
            console.log(result);
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    render(){
        return (
            <View style={{flex:1, backgroundColor:"#f8f4fd"}}>
                <View style={{flex:1, justifyContent:"center", marginHorizontal:50}}>
                    <TextInput
                        autoCorrect={false}
                        placeholder="Name"
                        onChangeText={(name)=>this.setState({name})}/>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Username"
                        onChangeText={(uname)=>this.setState({uname})}/>    
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Email"
                        onChangeText={(email)=>this.setState({email})}/>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password)=>this.setState({password})}/>
                    <Text>Is Pregnant?</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.isPregnant ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(isPregnant)=>this.setState({isPregnant})}
                        value={this.state.isPregnant}
                    />
                    <TextInput
                        placeholder="Days since your pregancy starts"
                        keyboardType='number-pad'
                        onChangeText={(pregDay)=>this.setState({pregDay})}/>
                    <Button
                        onPress={()=>this.onSignUp()}
                        title="Sign Up"
                        color="#55367BF0"
                    />        
                </View>
            </View>
        );
    }
    
}

export default Register;