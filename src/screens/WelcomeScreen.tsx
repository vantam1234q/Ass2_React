/* eslint-disable prettier/prettier */
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/coffee_assets/back1.png')}
      style={{
        width: '100%',
        height: '100%',
      }}>
     <View style={{paddingHorizontal:40,
    flex:1}}>
     <View style={{flex: 1}}></View>
      <View style={{
        justifyContent:'center',
        alignItems :'center',
        alignContent:'center',
        flexDirection :'column',
        gap :18,
        marginBottom : 20,
      }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign:'center'
          }}>
          Coffee so good, you will love it.
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            textAlign:'center'
          }}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Tab")}>
    <View style={{
      width:250,
      height:50,
      backgroundColor :'#C67C4E',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
    }}>
      <Text style={{color:'white',
    fontSize:15,
    fontWeight:'bold'}}>Let Started</Text>
    </View>
    </TouchableOpacity>
      </View>
     </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
