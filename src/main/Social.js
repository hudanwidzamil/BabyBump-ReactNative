import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore");


function SocialScreen({navigation}){
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      firebase.firestore()
        .collection("posts")
        .orderBy("creationDate", "desc")
        .get()
        .then((snapshot)=>{
          let posts = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data}
          })
          setPosts(posts);
          //console.log(posts);
        })

        firebase.firestore()
        .collection("users")
        .get()
        .then((snapshot)=>{
          let users = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data}
          })
          setUsers(users);
          //console.log(users);
        })
        
    }, []);

    function fetchUser(uid) {
      firebase.firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((result)=>{
          let user = result.data();
          //console.log(user.uname);
          return user.uname;
        })
    }

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
      <View style={{flex:1, backgroundColor: '#ffffff',padding: 32,}}>
        <TextInput 
          placeholder="Search for spesific posts ..." 
          onChangeText={(search)=>fetchPosts(search)}
          style={{backgroundColor:'lightgrey', padding: 8, borderRadius:10}}
        />
        <FlatList
          data = {posts}
          renderItem = {({item})=>
            (<View style={{backgroundColor:'#F8F8F8', padding: 8, borderRadius:10, marginVertical:5}} >
              <Text style={{ fontSize:14, opacity:0.6}}>{item.uname}</Text>
              <Text>{item.caption}</Text>
              <Text style={{ fontSize:10, opacity:0.4, textAlign:'right'}}>{item.creationDate.toDate().toDateString()}</Text>
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
          <Text style={{ color:'white', fontSize:32 }}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default SocialScreen;