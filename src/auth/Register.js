import React, {Component} from 'react';
import { View, Button, TextInput} from 'react-native';

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
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){
        const { email, password, name, uname } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    name,
                    email,
                    uname,
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
                        placeholder="name"
                        onChangeText={(name)=>this.setState({name})}/>
                    <TextInput
                        placeholder="username"
                        onChangeText={(uname)=>this.setState({uname})}/>    
                    <TextInput
                        placeholder="email"
                        onChangeText={(email)=>this.setState({email})}/>
                    <TextInput
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(password)=>this.setState({password})}/>
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