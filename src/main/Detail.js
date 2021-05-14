import React, { useState } from 'react';
import { View, ScrollView, Image, Text, Button } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function Detail(props) {
    const item = props.route.params.item;
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const onCheckout = () => {
        props.navigation.navigate('Checkout', { shop : { item: item, count: count, total: total }});
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
                {count>0?<Button title="Checkout" onPress={()=> onCheckout()}/> : <Button  disabled={true} title="Checkout"/>}
                
            </View>
        </ScrollView>
    );
}