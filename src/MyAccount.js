import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const MyOrderButton = (props) =>{
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

const DailyReadsText = (props) =>{
  return(
    <View style={{flexDirection:"row", borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom:5, paddingTop:5}}>
      <Image source={props.imgPath} style={{marginRight:5}}/>
      <View>
        <Text style={{fontSize:12, fontWeight:"bold"}}>{props.title}</Text>
        <Text style={{fontSize:12}}>{props.content}</Text>
      </View>
      
    </View>
  );
}
function MyAccountScreen(){
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <View style={styles.topBar}>
          <View style={{flexDirection: "row-reverse"}}>
            <Image source={require("../assets/accounttopbar/setting.png")} style={{left:-10}}/>
            <Image source={require("../assets/accounttopbar/notification.png")}/>
            <Text style={{fontSize:17,fontWeight:'bold',color:"#000000",paddingRight:180}}>My Profile</Text>
          </View>
          <View style={{flexDirection:"row", top:10}}>
            <Image source={require("../assets/accounttopbar/female-prof.png")}/>
            <View style={{flexDirection: "column", left:5, top:10}}>
              <Text style={{fontSize:17}}>Rina Setiawati</Text>
              <Text style={{fontSize:15}}>@rina123</Text>
              <Image source={require("../assets/accounttopbar/membership.png")} style={{top:4}}/>
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
              <Text style={{fontSize:14,fontWeight:'bold', alignSelf:'center', top:5}}>9 weeks pregnant</Text>
              <Image source={require("../assets/accounttopbar/pregnancylevel.png")} style={{top:4}}/>
            </View>
          </View>
        </View>
        <View style={{paddingVertical:16, paddingHorizontal:32, borderBottomWidth: 1, borderBottomColor:"#DADADA"}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize:21, paddingBottom:8}}>My Orders</Text>
            <Text style={{fontSize:14, paddingLeft:80, paddingTop:5}}>Transaction History ></Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <MyOrderButton
              name="Payment" 
              imgPath={require("../assets/accounticon/payment.png")}
            />
            <MyOrderButton
              name="Packaging"
              imgPath={require("../assets/accounticon/packaging.png")}
            />
            <MyOrderButton
              name="Shipping"
              imgPath={require("../assets/accounticon/shipping.png")}
            />
            <MyOrderButton
              name="Review"
              imgPath={require("../assets/accounticon/review.png")}
            />
          </View>
        </View>
        <View style={{paddingVertical:8, paddingHorizontal:32, borderBottomWidth: 1, borderBottomColor:"#DADADA"}}>
          <Text style={{fontSize:21}}>My Wishlist</Text>
          <DailyReadsText
              title="Dealing with morning sickness: Tips and tricks"
              content="If only morning sickness were just relegated to the mornings! Here's some help for women coping..."
              imgPath={require("../assets/dailyreadsimg/image1.png")}
          />
          <DailyReadsText
              title="Which foods to eat and avoid during pregnancy"
              content="Pregnant women need to ensure that their diet provides enough nutrients and energy for the..."
              imgPath={require("../assets/dailyreadsimg/image2.png")}
          />
        </View>
        <View style={{paddingVertical:8, paddingHorizontal:32}}>
          <Text style={{fontSize:21}}>Waiting for review</Text>
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
      backgroundColor: '#f8f4fd',
      alignItems: 'flex-start',
      paddingLeft: 22,
      paddingTop: 120,
    },
  });
  
export default MyAccountScreen;