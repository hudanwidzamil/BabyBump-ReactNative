import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';
require("firebase/firestore");

export default function Post(props) {
    const [caption, setCaption] = useState("");

    const [user, setUser] = useState({name: ''});
    useEffect(() => {
      firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((result)=>{
          setUser(result.data())
        })
    }, [user]);

    const onPost = () => {
        firebase.firestore()
        .collection('posts')
        .add({
            uid:firebase.auth().currentUser.uid,
            caption,
            creationDate: firebase.firestore.FieldValue.serverTimestamp(),
            uname: user.uname
        }).then((function(){
            Alert.alert("Posted Successfully")
            props.navigation.popToTop();
        }))
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <TextInput
                placeholder="What's on your mind?"
                onChangeText={(caption)=>setCaption(caption)}
                style={{padding:16}}
            />
            <Button title="Post" onPress={()=> onPost()}/>
        </View>
    );
}
