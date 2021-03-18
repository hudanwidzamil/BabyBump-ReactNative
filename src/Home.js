import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

function HomeScreen() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <View style={styles.topBar}>
          <Text style={{fontSize:26,fontWeight:'bold',color:"#fff"}}>Good Morning</Text>
          <Text style={{fontSize:21,color:"#fff"}}>Day</Text>
          <Text style={{fontSize:18,color:"#fff"}}>days to your delivery</Text>
        </View>
        <View style={{padding:32}}>
          <Text style={{fontSize:21}}>For You</Text>
        </View>
        <View style={{padding:32}}>
          <Text style={{fontSize:21}}>Daily Reads</Text>
        </View>
        <View style={{padding:32}}>
          <Text style={{fontSize:21}}>Trending in Social</Text>
          <View style={{flexDirection:"row", margin:5, borderBottomColor: '#888', borderBottomWidth: 1}}>
            <Text style={{fontSize:20, flex:0.1}}>#1</Text>
            <Text style={{fontSize:12, flex:1}}>Kenapa ya setiap pagi rasanya seluruh tubuhku kram,, apa itu normal??</Text>
          </View>
          <View style={{flexDirection:"row", margin:5, borderBottomColor: '#888', borderBottomWidth: 1}}>
            <Text style={{fontSize:20, flex:0.1}}>#2</Text>
            <Text style={{fontSize:12, flex:1}}>Klo hamil lebih bagus makan ikan atau sapi ya?</Text>
          </View>
        </View>
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    topBar:{
      flex:0.25,
      backgroundColor: '#CAA8F5',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 32,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25
    },
  });

  export default HomeScreen;