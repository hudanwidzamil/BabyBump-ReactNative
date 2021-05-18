import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore");


export default function MyOrderScreen(props){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      if (props.route.params.cat !== 'all' ) {
        firebase.firestore()
        .collection("orders")
        .doc(firebase.auth().currentUser.uid)
        .collection("userOrders")
        .where('order.status', '==', props.route.params.cat)
        .get()
        .then((snapshot)=>{
          let orders = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data}
          })
          setOrders(orders);
        })
      
      } else {
        firebase.firestore()
        .collection("orders")
        .doc(firebase.auth().currentUser.uid)
        .collection("userOrders")
        .get()
        .then((snapshot)=>{
          let orders = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data}
          })
          setOrders(orders);
        })
        
      }
        
    }, []);

    return (
      <View style={{flex:1}}>
        <FlatList
          data = {orders}
          renderItem = {({item})=>
            (
              <View style={{flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                backgroundColor:'#f8f8f8',
                padding:8}}>
                <Image style={{width:100, height:100, maxWidth:'25%'}} source={{uri:item.order.item.image}}/>
                <View>
                  <Text>Order ID: {item.id}</Text>
                  <Text>{item.order.creationDate.toDate().toDateString()}</Text>
                  <Text>{item.order.item.brand}</Text>
                  <Text>{item.order.item.name}</Text>
                  <Text>Price: Rp{item.order.item.price}</Text>
                  <Text>{item.order.count}pc(s)</Text>
                  <Text>Total: Rp{item.order.total}</Text>
                  <Text>Address: {item.order.address}</Text>
                  <Text>Order status: {item.order.status}</Text>
                  
                </View>
              </View>
            )
          }
        />
      </View>
    );
  }

