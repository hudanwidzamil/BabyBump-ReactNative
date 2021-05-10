import React from 'react';
import { View, Image, Text } from 'react-native';

export default function Detail(props) {
    const item = props.route.params.item;
    return (
        <View>
            <Image style={{width:375, height:375}} source={{uri:item.image}}/>
            <View>
                <Text>{item.brand}</Text>
                <Text>{item.name}</Text>
                <Text>Rp{item.price}</Text>
                <Text>{item.desc}</Text>
            </View>
        </View>
    );
}