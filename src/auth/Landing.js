import React from 'react';
import { Text, View, Button } from 'react-native';

function Landing({navigation}) {
    return (
        <View style={{flex:1, backgroundColor:"#55367BF0"}}>
            <View style={{flex:1, justifyContent:"space-evenly", marginVertical:330, marginHorizontal:80}}>
                <Button
                    title="Register"
                    color="#CAA8F5"
                    onPress={()=> navigation.navigate("Register")}/>
                <Button
                    title="Login"
                    color="#CAA8F5"
                    onPress={()=> navigation.navigate("Login")}/>    
            </View>
        </View>
    );
}

export default Landing;