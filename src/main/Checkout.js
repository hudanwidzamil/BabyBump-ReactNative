import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';

import firebase from 'firebase'
require("firebase/firestore")

export default function Checkout(props) {
    const shop = props.route.params.shop;
    const [address, setAddress] = useState("");
    const [shipment, setShipment] = useState("BB Delivery");
    const [payment, setPayment] = useState("COD");
    const onOrder = () => {
        const order = {
            item : shop.item,
            count: shop.count,
            total: shop.total,
            address: address,
            shipment: shipment,
            payment: payment,
            creationDate: firebase.firestore.FieldValue.serverTimestamp()
        };
        console.log(order);
        firebase.firestore()
        .collection('orders')
        .doc(firebase.auth().currentUser.uid)
        .collection("userOrders")
        .add({
            order
        }).then((function(){
            props.navigation.popToTop()
        }));
    }

    return (
        <View>
            <Image style={{width:100, height:100}} source={{uri:shop.item.image}}/>
            <Text>{shop.item.brand}</Text>
            <Text>{shop.item.name}</Text>
            <Text>Rp{shop.item.price}</Text>
            <Text>{shop.count}pc(s)</Text>
            <Text>Total: Rp{shop.total}</Text>
            <TextInput 
                placeholder="alamat"
                onChangeText={setAddress}/>
            <Text>Shipping method: </Text>
            <Text>{shipment}</Text>
            <Text>Payment method: </Text>
            <Text>{payment}</Text>
            <Button title="Order" onPress={()=> onOrder()}/>
        </View>
    );
}