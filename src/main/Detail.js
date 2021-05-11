import React, { useState } from 'react';
import { View, ScrollView, Image, Text, Button } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function Detail(props) {
    const item = props.route.params.item;
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const onCheckout = () => {
        props.navigation.navigate('Checkout');
    }

    return (
        <ScrollView>
            <Image style={{width:375, height:375}} source={{uri:item.image}}/>
            <View>
                <Text>{item.brand}</Text>
                <Text>{item.name}</Text>
                <Text>Rp{item.price}</Text>
                <Text>{item.desc}</Text>
                <NumericInput onChange={value => {setCount(value); setTotal(value*item.price)}} minValue={0} maxValue={item.stock}/>
                <Text>Total:</Text>
                <Text>Rp{total}</Text>
                <Button title="Checkout" onPress={()=> onCheckout()}/>
            </View>
        </ScrollView>
    );
}