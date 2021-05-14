import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore");


function ShopScreen({navigation}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
      firebase.firestore()
        .collection("products")
        .get()
        .then((snapshot)=>{
          let products = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data}
          })
          setProducts(products);
        })
        
    }, []);

    const fetchProducts = (search) => {
      firebase.firestore()
      .collection('products')
      .where('name', '>=', search)
      .get()
      .then((snapshot)=>{
          let products = snapshot.docs.map(doc => {
              const data = doc.data();
              const id = doc.id;
              return {id, ...data} 
          });
          setProducts(products);
      })
  }

    return (
      <View style={{flex:1, backgroundColor: '#ffffff',padding: 32,}}>
        <TextInput placeholder="Search for spesific products ..." onChangeText={(search)=>fetchProducts(search)}
        style={{backgroundColor:'lightgrey', padding: 8, borderRadius:10}}/>
        <FlatList
          data = {products}
          renderItem = {({item})=>
            (
              <TouchableOpacity onPress={()=> navigation.navigate('Detail', {item})}>
                <View style={{flex: 1,
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                              backgroundColor:'#F8F8F8', padding: 8, borderRadius:10, marginVertical:5}}>
                                
                  <Image style={{width:75, height:75, maxWidth:'25%'}} source={{uri:item.image}}/>
                  <View>
                    <Text>{item.brand}</Text>
                    <Text>{item.name}</Text>
                    <Text>Rp{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }

export default ShopScreen;