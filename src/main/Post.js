import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';
require("firebase/firestore");

export default function Post(props) {
    const [caption, setCaption] = useState("");

    const onPost = () => {
        firebase.firestore()
        .collection('posts')
        .add({
            uid:firebase.auth().currentUser.uid,
            caption,
            creationDate: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function(){
            Alert.alert("Posted Successfully")
            props.navigation.popToTop();
        }))
    }

    return (
        <View>
            <TextInput
                placeholder="What's on your mind?"
                onChangeText={(caption)=>setCaption(caption)}
            />
            <Button title="Post" onPress={()=> onPost()}/>
        </View>
    );
}
