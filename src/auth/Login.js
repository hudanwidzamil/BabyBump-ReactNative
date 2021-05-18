import React, {Component} from 'react';
import { View, Button, TextInput} from 'react-native';

import firebase from 'firebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
        this.onSignIn = this.onSignIn.bind(this)
    }
    onSignIn(){
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
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
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="email"
                        onChangeText={(email)=>this.setState({email})}/>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(password)=>this.setState({password})}/>
                    <Button
                        onPress={()=>this.onSignIn()}
                        color="#55367BF0"
                        title="Sign in"
                    />        
                </View>
            </View>
        );
    }
    
}

export default Login;