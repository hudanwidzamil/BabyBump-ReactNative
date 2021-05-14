import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';

import firebase from 'firebase'
require("firebase/firestore")

export default function Checkout(props) {
    const shop = props.route.params.shop;
    const [address, setAddress] = useState("");
    const [shipment, setShipment] = useState("BB Send");
    const [payment, setPayment] = useState("COD");
    const onOrder = () => {
        const order = {
            item : shop.item,
            count: shop.count,
            total: shop.total,
            address: address,
            shipment: shipment,
            payment: payment,
            status: "Packaging",
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
        <View style={{backgroundColor:'white', flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image style={{width:150, height:150}} source={{uri:shop.item.image}}/>
            <Text>{shop.item.brand}</Text>
            <Text>{shop.item.name}</Text>
            <Text>Rp{shop.item.price}</Text>
            <Text>{shop.count}pc(s)</Text>
            <Text>Total: Rp{shop.total}</Text>
            <Text>Shipping method: </Text>
            <Text>{shipment}</Text>
            <Text>Payment method: </Text>
            <Text>{payment}</Text>
            <Text>Alamat: </Text>
            <TextInput 
                placeholder="Isi alamat anda ......"
                onChangeText={setAddress}/>
            {address == "" ?<Button  disabled={true} title="Order"/> :<Button title="Order" onPress={()=> onOrder()}/>}
        </View>
    );
}