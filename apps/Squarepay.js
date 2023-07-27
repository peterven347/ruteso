import React, {useEffect, useState} from 'react';
import {Button, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons'

import DrawerView from '../src/components/squarepay/Drawerview'
import Home from '../src/components/squarepay/Home'
import History from '../src/components/squarepay/History'
import CreateAcc from '../src/components/squarepay/CreateAcc'
import SignIn from '../src/components/squarepay/SignIn';
import ForgotPass from '../src/components/squarepay/ForgotPass';

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function Disp(){
    return(
        <View style={{alignSelf: "center"}}>
            <Text>Peterven</Text>  
        </View>
    )
}

function Tabs(){
    return(
        <Tab.Navigator screenOptions={ ({route}) => ({tabBarIcon: ({focused}) => {
            let colorx;
            let iconx;
            colorx = focused? 'lime': 'grey'
            switch(route.name){
                case "Home":
                    iconx ="home"
                break
                case "History":
                    iconx = "history"
                break
            }
            return  (<Mci name={iconx} color={colorx} size={24}/>)
        },headerShown: false, tabBarHideOnKeyboard:true, tabBarActiveTintColor:"lime"
        })}>
            <Tab.Screen name="Home" component={History}/>
            <Tab.Screen name="History" component={Home}/>
        </Tab.Navigator>
    )
}
export default function Square(){
    const isSignedIn = false
    useEffect(() => {
        async function prepare(){
          try{
              new Promise(resolve => setTimeout(resolve,5000)); 
          }catch(e){
              console.warn(e);
          }finally{
              SplashScreen.hide();
          }
        }
        prepare(); 
        }, []);
    return(
        isSignedIn?(
        <>
        <Screenc/>
        </>):(
            <>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={DrawerView} screenOptions={{headerTitle: () => <Disp/>, headerTitleAlign: 'center'}}>
                    <Drawer.Screen name="Tabs" component={Tabs}/>
                </Drawer.Navigator>
            </NavigationContainer>
            </>
        )
    )
}
