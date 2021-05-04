import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore");


function SocialScreen({navigation}){
    const [posts, setPosts] = useState([]);
    /*useEffect(() => {
      firebase.firestore()
        .collection("posts")
        .get()
        .then((snapshot)=>{
          let posts = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data}
          })
          console.log(posts);
          setPosts(posts);
        })
        
    }, []);*/

    const fetchPosts = (search) => {
      firebase.firestore()
      .collection('posts')
      .where('caption', '>=', search)
      .get()
      .then((snapshot)=>{
          let posts = snapshot.docs.map(doc => {
              const data = doc.data();
              const id = doc.id;
              return {id, ...data} 
          });
          //console.log(posts);
          setPosts(posts);
      })
  }

    return (
      <View style={{flex:1}}>
        <TextInput placeholder="Search for spesific posts ..." onChangeText={(search)=>fetchPosts(search)}/>
        <FlatList
          data = {posts}
          renderItem = {({item})=>
            (<View>
              <Text>{item.uid}</Text>
              <Text>{item.caption}</Text>
            </View>)
          }
        />
        <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            position: 'absolute',                                          
            bottom: 20,                                                    
            right: 20,
            width:60,
            height:60,
            backgroundColor:'#CAA8F5',
            borderRadius:100,
          }}
          onPress={()=> navigation.navigate('Post')}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default SocialScreen;