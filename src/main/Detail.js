import React, { useState } from 'react';
import { View, ScrollView, Image, Text, Button, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input';

import firebase from 'firebase'
require("firebase/firestore")

export default function Detail(props) {
    const item = props.route.params.item;
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const onCheckout = () => {
        props.navigation.navigate('Checkout', { shop : { item: item, count: count, total: total }});
    }
    const onWishlist = () => {
        
        firebase.firestore()
        .collection('wishlists')
        .doc(firebase.auth().currentUser.uid)
        .collection("userWishlists")
        .add(item)
        .then((function(){
            Alert.alert("Successfully added to wishlist")
        }));
    }

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <Image style={{width:375, height:375,}} source={{uri:item.image}}/>
            <View style={{padding:16}}>
                <Text style={{fontWeight:'bold'}}>{item.brand}</Text>
                <Text>{item.name}</Text>
                <Text>Rp{item.price}</Text>
                <Text>{item.desc}</Text>
                <Text>Count:</Text>
                <NumericInput onChange={value => {setCount(value); setTotal(value*item.price)}} minValue={0} maxValue={item.stock}/>
                <Text style={{fontWeight:'bold', marginTop:10}}>Total:</Text>
                <Text style={{fontWeight:'bold'}}>Rp{total}</Text>
                <Button title="Add to wishlist" onPress={()=> onWishlist()}/>
                {count>0?<Button title="Checkout" onPress={()=> onCheckout()}/> : <Button  disabled={true} title="Checkout"/>}
                
            </View>
        </ScrollView>
    );
}