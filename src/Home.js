import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView } from 'react-native';

function HomeScreen() {
    return (
      <ScrollView style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <View style={styles.topBar}>
          <Text style={{fontSize:26,fontWeight:'bold',color:"#fff"}}>Good Morning</Text>
          <Text style={{fontSize:21,color:"#fff"}}>Day</Text>
          <Text style={{fontSize:18,color:"#fff"}}>days to your delivery</Text>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>For You</Text>
          <View style={{flexDirection:"row"}}>
            <View style={{alignItems:"center", flex:1}}>
              <Image source={require("../assets/shopicon/maternitywear.png")}/>
              <Text style={{fontSize:11, textAlign:"center"}}>Maternity Wear</Text>
            </View>
            <View style={{alignItems:"center", flex:1}}>
              <Image source={require("../assets/shopicon/supplement.png")}/>
              <Text style={{fontSize:11, textAlign:"center"}}>Supplement</Text>
            </View>
            <View style={{alignItems:"center", flex:1}}>
              <Image source={require("../assets/shopicon/stroller.png")}/>
              <Text style={{fontSize:11, textAlign:"center"}}>Stroller</Text>
            </View>
            <View style={{alignItems:"center", flex:1}}>
              <Image source={require("../assets/shopicon/babywear.png")}/>
              <Text style={{fontSize:11, textAlign:"center"}}>Baby Wear</Text>
            </View>
            
          </View>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>Daily Reads</Text>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32}}>
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
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    topBar:{
      flex:0.5,
      backgroundColor: '#CAA8F5',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 32,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,
    },
  });

  export default HomeScreen;