import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image, ScrollView , TouchableOpacity, Button } from 'react-native';

import ProgressBar from 'react-native-progress/Bar';

import firebase from 'firebase';
require('firebase/firestore');

const WishlistCard = (props) =>{
  return(
    <TouchableOpacity>
      <View style={{marginRight:10, alignItems:'center', height:120, width:90, flexDirection:"column", borderColor: '#B8B8B8', borderRadius:5, borderWidth: 1, padding:5}}>
        <Image source={props.imgPath}/>
        <Text style={{fontSize:12, flex:1, padding:5}}>{props.name}</Text>
        <Text style={{fontSize:12, flex:1, fontWeight:'bold'}}>Rp{props.price}</Text>
      </View>  
    </TouchableOpacity>
    
  );
}

const WaitingForReviewCard = (props) =>{
  return(
    <TouchableOpacity>
      <View style={{flexDirection:"row", paddingBottom:5, paddingTop:5}}>
        <View style={{borderColor: '#B8B8B8', borderRadius:5, borderWidth: 1, padding:5}}>
        <Image source={props.imgPath}/>
        </View>
        <View style={{width:210, paddingLeft:10, paddingTop:5}}>
          <Text style={{fontSize:12, fontWeight:"bold"}}>{props.product}</Text>
          <Text style={{fontSize:12, paddingTop:2}}>{props.description}</Text>
          <Text style={{fontSize:12, paddingTop:5, alignSelf:"flex-end"}}>{props.qty}x</Text>
        </View> 
      </View>
    </TouchableOpacity>
  );
}



function MyAccountScreen(props){

    const [user, setUser] = useState(null);
    var loggedIn = true;
    useEffect(() => {
      if (loggedIn) {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((result)=>{
          setUser(result.data())
        })  
      }
      
    }, [user]);

    if (user === null) {
      return <View/>
    }
    
    const onLogout = () => {
      firebase.auth().signOut();
      loggedIn = false;
    }

    return (
      <ScrollView style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <View style={styles.topBar}>
          <View style={{flexDirection: "row-reverse"}}>
            <TouchableOpacity onPress={()=>onLogout()}>
              <Image source={require("../../assets/accounttopbar/setting.png")} style={{left:15}}/>
            </TouchableOpacity>
            
            <Image source={require("../../assets/accounttopbar/notification.png")}/>
            <Text style={{fontSize:17,fontWeight:'bold',color:"#000000",paddingRight:180}}>My Profile</Text>
          </View>
          <View style={{flexDirection:"row", top:10}}>
            <Image source={require("../../assets/accounttopbar/female-prof.png")}/>
            <View style={{flexDirection: "column", left:5, top:10}}>
              <Text style={{fontSize:17}}>{user.name}</Text>
              <Text style={{fontSize:15}}>@{user.uname}</Text>
              <TouchableOpacity>
                <Image source={require("../../assets/accounttopbar/membership.png")} style={{top:4}}/>
              </TouchableOpacity>
              
            </View>
            <View style={{flexDirection: "column", left:30, top: 5, alignSelf:'center'}}>
              <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", left:5}}>
                  <Text style={{fontSize:22,fontWeight:'bold', alignSelf:'center'}}>24</Text>
                  <Text style={{fontSize:12}}>followers</Text>
                </View>
                <View style={{flexDirection: "column", left:20}}>
                  <Text style={{fontSize:22,fontWeight:'bold', alignSelf:'center'}}>12</Text>
                  <Text style={{fontSize:12}}>following</Text>
                </View>
              </View>
              {user.isPregnant?
                (<View>
                  <Text style={{fontSize:14,fontWeight:'bold', alignSelf:'center', top:5, marginBottom:8}}>{Math.ceil((Number(user.pregDay)+ Math.ceil(( new Date() - user.registerDate.toDate()) / (1000 * 60 * 60 * 24)))/7)} weeks pregnant</Text>
                  <ProgressBar color='purple' progress={((Number(user.pregDay)+ Math.ceil(( new Date() - user.registerDate.toDate()) / (1000 * 60 * 60 * 24)))/7)/40} width={120} />    
                </View>)
              :<View></View>}
            </View>
          </View>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32, borderBottomWidth: 1, borderBottomColor:"#DADADA"}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize:21, paddingBottom:8}}>My Orders</Text>
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyOrder', { cat: 'all'})}>
              <Text style={{fontSize:14, paddingLeft:80, paddingTop:5}}>Transaction History</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyOrder',{cat:'Payment'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/accounticon/payment.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyOrder',{cat:'Packaging'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/accounticon/packaging.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Packaging</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyOrder',{cat:'Shipping'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/accounticon/shipping.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Shipping</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyOrder',{cat:'Review'})}>
              <View style={{alignItems:"center", flex:1, paddingHorizontal:5}}>
                <Image source={require("../../assets/accounticon/review.png")} resizeMode="contain"/>
                <Text style={{fontSize:11, textAlign:"center", paddingTop:8}}>Review</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical:8, paddingHorizontal:32, borderBottomWidth: 1, borderBottomColor:"#DADADA"}}>
          <Text style={{fontSize:21}}>My Wishlist</Text>
          <ScrollView horizontal={true} style={{paddingVertical:8, paddingHorizontal:1}}>
            <WishlistCard 
              imgPath={require("../../assets/mywishlistimg/flowystroller.png")}
              name='Flowy stroller'
              price='400.000'
            />
            <WishlistCard 
              imgPath={require("../../assets/mywishlistimg/blessing.png")}
              name='Blessing'
              price='190.000'
            />
            <WishlistCard 
              imgPath={require("../../assets/mywishlistimg/hnm.png")}
              name='H&M'
              price='400.000'
            />
            <WishlistCard 
              imgPath={require("../../assets/mywishlistimg/flowystroller.png")}
              name='Baby jogger'
              price='400.000'
            />
          </ScrollView>
        </View>
        <View style={{paddingVertical:8, paddingHorizontal:32}}>
          <Text style={{fontSize:15}}>Waiting for review</Text>
          <View style={{flexDirection:"column", overflow:'scroll'}}>
            <WaitingForReviewCard
              imgPath={require("../../assets/waitingforreviewimg/blackmores.jpg")}
              product="Blackmores"
              description="Pregnancy & Breast-Feeding Gold"
              qty="1"
            />
          </View>
        </View>
        <Button title="LOGOUT" onPress={()=>onLogout()}/>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    topBar:{
      flex:1,
      backgroundColor: '#f8f4fd',
      alignItems: 'flex-start',
      paddingLeft: 22,
      paddingTop: 48,
      paddingBottom:32
    },
  });
  
export default MyAccountScreen;