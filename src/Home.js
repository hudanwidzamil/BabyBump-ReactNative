import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const ForYouButton = (props) =>{
  return(
    <View style={{alignItems:"center", flex:1}}>
      <Image source={props.imgPath}/>
      <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>{props.name}</Text>
    </View>
  );
}

const TrendingText = (props) =>{
  return(
    <View style={{flexDirection:"row", borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom:5, paddingTop:5}}>
      <Text style={{fontSize:20, flex:0.125}}>#{props.no}</Text>
      <Text style={{fontSize:12, flex:1}}>{props.isi}</Text>
    </View>
  );
}

function HomeScreen() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <View style={styles.topBar}>
          <Text style={{fontSize:26,fontWeight:'bold',color:"#fff"}}>Good Morning, Sri</Text>
          <Text style={{fontSize:21,color:"#fff"}}>Day 64</Text>
          <Text style={{fontSize:18,color:"#fff"}}>216 days to your delivery</Text>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32}}>
          <Text style={{fontSize:21, paddingBottom:8}}>For You</Text>
          <View style={{flexDirection:"row"}}>
            <ForYouButton name="Maternity Wear" imgPath={require("../assets/shopicon/maternitywear.png")}/>
            <ForYouButton name="Supplement" imgPath={require("../assets/shopicon/supplement.png")}/>
            <ForYouButton name="Stroller" imgPath={require("../assets/shopicon/stroller.png")}/>
            <ForYouButton name="Baby Wear" imgPath={require("../assets/shopicon/babywear.png")}/>
          </View>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>Daily Reads</Text>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>Trending in Social</Text>
          <TrendingText 
            no="1" 
            isi="Kenapa ya setiap pagi rasanya seluruh tubuhku kram,, apa itu normal??"
          />
          <TrendingText 
            no="2" 
            isi="Klo hamil lebih bagus makan ikan atau sapi ya?"
          />
        </View>
      </View>
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