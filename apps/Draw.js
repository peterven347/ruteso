import React, {useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Taab(){
  return(
    <>
      <Tab.Navigator>
        <Tab.Screen name= "dgfhg" component={Noti}></Tab.Screen>
        <Tab.Screen name= "dg" component={Noti}></Tab.Screen>
      </Tab.Navigator>
    </>
  )
}
function Noti(){
    return(
    <>
        <Animated.View style={styles.styledraw}>
            <Text>I hope this works!</Text>
        </Animated.View>
    </>
    )
}

export default function App() {

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

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Notif" screenOptions={{
          // drawerPosition: "right",
          // drawerType: "slide",
          // overlayColor: "yellow"
        }}>
          <Drawer.Screen style={styles.styledraw} name="Notif" component={Taab} options={{ title: 'Auth'}}/>
          <Drawer.Screen style={styles.styledraw} name="Notifica" component={Taab} options={{ title: 'Authen'}}/>
          {/* <Drawer.Screen style={styles.styledraw} name="Notification" component={Noti} options={{ title: 'Authenty', drawerLabel: "dfgh"}}/> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
}
 const styles = StyleSheet.create({
    styledraw: {
      height: "20%",
    }
 })