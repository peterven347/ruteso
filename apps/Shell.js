import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { Alert, Animated, Button, Linking, Platform, StyleSheet, Text, useWindowDimensions, View} from "react-native"
import { DarkTheme, DefaultTheme, NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {useDimensions} from "@react-native-community/hooks";
import Icon from "react-native-vector-icons/Ionicons"
import HomeScreen from "./src/screens/Homescreen"
import Apple from "./src/screens/Apple"
import Auth from "./src/screens/Auth"
import { ActivityIndicator } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Tabs = createMaterialTopTabNavigator();


// const MyTheme = {
//   dark: true,
//   colors: {
//     primary: 'rgb(0, 0, 0)',
//     background: 'rgb(110, 110, 110)',
//     card: 'transparent',
//     text: 'rgb(0, 0, 0)',
//     border: 'rgb(0, 0, 0)',
//     notification: 'rgb(220, 0, 0)',
//   }
// }

// const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1'
// export default function App() {
//   // const [isReady, setIsReady] = useState(false)
//   // const [initialState, setInitialState] = useState()
//   // useEffect(() => {
//   //   const restoreState = async() => {
//   //     try{
//   //       const initialUrl = await Linking.getInitialURL()
//   //       if (Platform.OS !== 'web' && initialUrl == null){
//   //         const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
//   //         const state = savedStateString ? JSON.parse(savedStateString) :undefined

//   //         if (state !== undefined){
//   //           setInitialState(state)
//   //         }
//   //       }
//   //     }
//   //     finally{
//   //       setIsReady(true)
//   //     }
//   //   }
//   //   if (!isReady){
//   //     restoreState()
//   //   }   
//   // }, [isReady])
//   // if (!isReady){
//   //   return <ActivityIndicator/>
//   // }
//   // if (state.Loading){
//   //   return <Noti/>
//   // }
//   const navigationRef = useNavigationContainerRef(); //useRef();
//   const routeNameRef = useRef();

//   function A(){
//     return(
//       <>
//       <Icon style={{marginRight:24}} name = "search" color = "#fff" size = {30}/>
//       <Icon name = "list" color = "#fff" size = {30}/>
//       </>
//     )
//   }
//   function B(){
//     return(
//       <Text style={{color: "white"}}>Apple</Text>
//     )
//   }
// //  rgb10,10,50
//     return (
//     <NavigationContainer
//     // initialState = {initialState}
//     ref = {navigationRef}
//     onReady={() => {
//       routeNameRef.current = navigationRef.getCurrentRoute().name
//     }}
//     onStateChange= {async (state) => {
//       // AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
//       const previousRouteName = routeNameRef.current
//       const currentRouteName = navigationRef.getCurrentRoute().name
//       const trackScreenView = () => {

//       }
//       if (previousRouteName !== currentRouteName){
//         // Alert.alert(`the route changed ${previousRouteName} to ${currentRouteName}`)
//         routeNameRef.current = currentRouteName
//         // await trackScreenView(currentRouteName)
//       }
//     }}
//     theme={MyTheme}>    
//             <Stack.Navigator initialRouteName="Apple" screenOptions={{headerTintColor: "#fff", headerStyle:{backgroundColor: "#0000ff"}, headerTitleStyle:{fontSize: 29, fontFamily:"nosifer"}}}>
//                 <Stack.Screen name="Apple" component={Apple} options={{ title: 'Apple' }}/>
//                 <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "HomeScreen", headerShown: true, headerRight: () => <A/>}}/>
//                 <Stack.Screen name="Auth" component={Auth} options={{ title: 'Auth' }}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//   );
// }



// export default function App(){
// 	return(
// 		<NavigationContainer theme={MyThem}>
// 			<Tabs.Navigator  initialLayout={{height: useWindowDimensions().height}} screenOptions={{}}>
// 				<Tabs.Screen name="Apple" component={Apple}/>
// 				<Tabs.Screen name="Auth" component={Auth}/>
// 			</Tabs.Navigator>
// 		</NavigationContainer>
// 	)
// }



