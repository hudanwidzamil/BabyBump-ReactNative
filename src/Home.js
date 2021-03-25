import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const ForYouButton = (props) =>{
  return(
    <View style={{alignItems:"center", flex:1}}>
      <TouchableOpacity>
        <Image source={props.imgPath} resizeMode="contain"/>
      </TouchableOpacity>
      <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>{props.name}</Text>
    </View>
  );
}

const TrendingText = (props) =>{
  return(
    <TouchableOpacity>
      <View style={{flexDirection:"row", borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom:5, paddingTop:5}}>
        <Text style={{fontSize:20, flex:0.125}}>#{props.no}</Text>
        <Text numberOfLines={2} style={{fontSize:12, flex:1}}>{props.isi}</Text>
      </View>
    </TouchableOpacity>
    
  );
}

const DailyReadsText = (props) =>{
  return(
    <TouchableOpacity>
      <View style={{flexDirection:"row", borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom:5, paddingTop:5}}>
        <Image source={props.imgPath} style={{marginRight:5}}/>
        <View>
          <Text style={{fontSize:12, fontWeight:"bold"}}>{props.title}</Text>
          <Text numberOfLines={2} style={{fontSize:12}}>{props.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
            <ForYouButton
              name="Maternity Wear" 
              imgPath={require("../assets/shopicon/maternitywear.png")}
            />
            <ForYouButton
              name="Supplement"
              imgPath={require("../assets/shopicon/supplement.png")}
            />
            <ForYouButton
              name="Stroller"
              imgPath={require("../assets/shopicon/stroller.png")}
            />
            <ForYouButton
              name="Baby Wear"
              imgPath={require("../assets/shopicon/babywear.png")}
            />
          </View>
        </View>
        <View style={{paddingVertical:8, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>Daily Reads</Text>
          <DailyReadsText
              title="Dealing with morning sickness: Tips and tricks"
              content="If only morning sickness were just relegated to the mornings! Here's some help for women"
              imgPath={require("../assets/dailyreadsimg/image1.png")}
          />
          <DailyReadsText
              title="Which foods to eat and avoid during pregnancy"
              content="Pregnant women need to ensure that their diet provides enough nutrients and energy for the..."
              imgPath={require("../assets/dailyreadsimg/image2.png")}
          />
        </View>
        <View style={{paddingVertical:8, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>Trending in Social</Text>
          <TrendingText 
            no="1" 
            isi="Kenapa ya setiap pagi rasanya seluruh tubuhku kram, apa itu normal?"
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
      flex:0.75,
      backgroundColor: '#CAA8F5',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 32,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,
    },
  });

  export default HomeScreen;