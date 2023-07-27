import React, {useState} from "react";
import {Button, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();
const Tabs = createMaterialTopTabNavigator();
const Tabss = createMaterialBottomTabNavigator();
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

<View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
</View>

function G(){
    const[badgeCounted, setbadgeCount] = useState(3)
    return badgeCounted 
}

function Message(){
    // const[badgeCounted, setbadgeCount] = useState(0)
    return(
        <>
        <View style={styles.arrange}>
            <View>
                
            </View>
            <Text style={styles.textstyle}>This should be the first screen</Text>
        </View>
    </>
    )
}
function Notifications(){
    return(
    <>
        <View style={styles.arrange}>
            <Text style={styles.textstyle}>This should be the second screen</Text>
        </View>
    </>
    )
}


export default function Auth(route) {
    return (
        <Tab.Navigator screenOptions={ ({route}) => ({tabBarIcon: ({focused}) => {
            let colorx;
            let sizex;
            let iconx;
            colorx = focused? "white":"grey"
            sizex= focused? 44:32
            iconx= (route.name === "Message")? "book":"list"
            return (<Icon name={iconx} size={sizex} color={colorx}/>)
        },tabBarActiveTintColor: "blue", tabBarInactiveTintColor: "grey", showLabel: false, showIcon: false, pressColor: "black", pressOpacity: 40, tabBarAccessibilityLabel: 'Appareil Photo', style:{}})}>
            <Tab.Screen name="Message"  component={Message} options={{headerShown: false, tabBarBadge: [G()]}} />
            <Tab.Screen name="Notificatons"  component={Notifications} options={{headerShown: false}} />
        </Tab.Navigator>
      
    );
  }

//   export default function Auth(){
// 	return(
// 			<Tabs.Navigator  initialLayout={{height: useWindowDimensions().height}} screenOptions={{}}>
// 				<Tabs.Screen name="Message" component={Message}/>
// 				<Tabs.Screen name="Noifications" component={Notifications}/>
// 			</Tabs.Navigator>
// 	)
// }


const styles = StyleSheet.create({
    arrange: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textstyle: {
        fontSize: 26
    }
})