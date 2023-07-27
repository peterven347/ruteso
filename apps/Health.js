import React, { useEffect, useRef } from "react";
import {Button, StyleSheet, Text, View, StatusBar} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Geolocation from '@react-native-community/geolocation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigationContainerRef} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Home from './health/Home';
import Patients from './health/Patients';
import Doctors from './health/Doctors';
import DoctorReport from './health/DoctorReport';

const Tab = createBottomTabNavigator();
const MyTheme = {
    colors: {
    backgroundColor: "rgb(180,180,255)",
    card: 'white',
     }
}
function Title(){
    return(
    <Text style={{fontSize: 32, marginRight:"30%"}}>Patient's Form</Text>
    )
}

function A({navigation}){
    return(
      <>
      <Icon name = "arrow-back" color = "#000" size = {30} />
      </>
    )
  }


export default function Health({navigation}){
    const navigationRef = useNavigationContainerRef(); 
    const routeNameRef = useRef();

    return (
        <>
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let colorx;
                    let sizex;
                    let iconx;
                    colorx = focused ? "blue" : "grey";
                    sizex = focused ? 32 : 32;
                    iconx = (route.name === "Home") ? "home" : (route.name === "Patients") ? "calendar" : (route.name === "Doctors") ? "newspaper" : "person";
                    return (<Icon name={iconx} size={sizex} color={colorx} />);
                }, tabBarActiveTintColor: "blue", tabBarInactiveTintColor: "grey", tabBarHideOnKeyboard: true
            })}>
                <Tab.Screen name="Home" component={Home} options={{}}></Tab.Screen>
                <Tab.Screen name="Patients" component={Patients} options={{}}></Tab.Screen>
                <Tab.Screen name="Doctors" component={Doctors}></Tab.Screen>
                {/* <Tab.Screen name="modala" component={Modala} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="result" component={Result} options={{headerShown: false}}></Tab.Screen> */}
                <Tab.Screen name="DoctorReport" component={DoctorReport} options={{headerShown: false}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer></>
    )
}