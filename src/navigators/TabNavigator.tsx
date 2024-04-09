/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon:({forcused})=>{
            return(
              <View>
                <Image source={require('../assets/app_images/ic_home-removebg-preview.png')}
                resizeMode="contain"
                style={{width:25}}></Image>
              </View>
            )
          }
        }} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon:({forcused})=>{
            return(
              <View>
                <Image source={require('../assets/app_images/cart_ic-removebg-preview.png')}
                resizeMode="contain"
                style={{width:25}}></Image>
              </View>
            )
          }
        }} />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon:({forcused})=>{
            return(
              <View>
                <Image source={require('../assets/app_images/ic_favorites-removebg-preview.png')}
                resizeMode="contain"
                style={{width:25}}></Image>
              </View>
            )
          }
        }}/>
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon:({forcused})=>{
            return(
              <View>
                <Image source={require('../assets/app_images/ic_thongbaos-removebg-preview.png')}
                resizeMode="contain"
                style={{width:25}}></Image>
              </View>
            )
          }
        }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: COLORS.primaryWhiteHex,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
