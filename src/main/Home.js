import React, { useEffect, useState } from 'react';
import {StyleSheet, ScrollView , View, Text, Image, TouchableOpacity } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore");

import * as WebBrowser from 'expo-web-browser';

const TrendingText = (props) =>{
  return(
      <View style={{flexDirection:"row", borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom:5, paddingTop:5}}>
        <Text style={{fontSize:20, flex:0.125}}>#{props.no}</Text>
        <Text numberOfLines={2} style={{fontSize:12, flex:1}}>{props.isi}</Text>
      </View>
    
  );
}

const DailyReadsText = (props) =>{
  return(
    <TouchableOpacity>
      <View style={{flexDirection:"row", borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom:5, paddingTop:5}}
          onPress={()=>{ WebBrowser.openBrowserAsync(props.href);}}
        >
        <Image source={props.imgPath} style={{marginRight:5}}/>
        <View>
          <Text style={{fontSize:12, fontWeight:"bold"}}>{props.title}</Text>
          <Text numberOfLines={2} style={{fontSize:12}}>{props.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


function HomeScreen(props) {

    const [user, setUser] = useState({name: ''});
    useEffect(() => {
      firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((result)=>{
          setUser(result.data())
          //console.log(result.data().registerDate.toDate())
        })
    }, []);


    return (
      <ScrollView style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <View style={styles.topBar}>
          <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>Good Morning,</Text>
          <Text style={{fontSize:26,fontWeight:'bold',color:"#fff"}}>{user.name}</Text>
          {user.isPregnant ? 
          ( <View>
              <Text style={{fontSize:20,color:"#fff"}}>Day {Number(user.pregDay)+ Math.ceil(( new Date() - user.registerDate.toDate()) / (1000 * 60 * 60 * 24))}</Text>
              <Text style={{fontSize:16,color:"#fff"}}>{280-(Number(user.pregDay)+ Math.ceil(( new Date() - user.registerDate.toDate()) / (1000 * 60 * 60 * 24)))} days to your delivery</Text>
            </View>
          ) : <Text></Text>}
          
        </View>
        
        <View style={{paddingVertical:16, paddingHorizontal:32}}>
          <Text style={{fontSize:21, paddingBottom:8}}>For You</Text>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('ShopCat',{cat:'mwear'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/shopicon/maternitywear.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Maternity Wear</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.navigate('ShopCat',{cat:'supplement'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/shopicon/supplement.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Supplement</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.navigate('ShopCat',{cat:'stroller'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/shopicon/stroller.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Stroller</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.navigate('ShopCat',{cat:'bwear'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/shopicon/babywear.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Baby Wear</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          
        

        <View style={{paddingVertical:8, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>Daily Reads</Text>
          <DailyReadsText
              title="Dealing with morning sickness: Tips and tricks"
              content="If only morning sickness were just relegated to the mornings! Here's some help for women"
              imgPath={require("../../assets/dailyreadsimg/image1.png")}
              href="https://www.parents.com/pregnancy/my-body/morning-sickness/15-tips-for-dealing-with-morning-sickness/"
          />
          <DailyReadsText
              title="Which foods to eat and avoid during pregnancy"
              content="Pregnant women need to ensure that their diet provides enough nutrients and energy for the..."
              imgPath={require("../../assets/dailyreadsimg/image2.png")}
              href="https://www.healthline.com/nutrition/11-foods-to-avoid-during-pregnancy"
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
      </ScrollView>
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