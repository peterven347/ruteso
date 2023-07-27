import React from 'react';
import { StyleSheet, Text, useNavigationContainerRef, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwes from "react-native-vector-icons/FontAwesome";
import Doctor from "react-native-vector-icons/Fontisto";
import Person from "react-native-vector-icons/Ionicons";


export default function ScreenidWrap(props){
    // const icon_d = <Doctor name={props.name} color={props.color} size={20}/>
    const icon = <Person name={props.name} color={props.color} size={20}/>
    const icon_p = <Icon name={props.name} color={props.color} size={20}/>
    const icon_d = <Doctor name={props.name} color={props.color} size={20}/>
    let val = icon_d;
    switch(props.title){
        case "Doctors":
            val= icon_d
        break;
        case "Patients":
        case "Add New Patient":
            val= icon
        break;
    }
    return(
        <View style={styles.screenidwrap}>
            <View style={[styles.screenid, {backgroundColor: props.screenidbg}]}>
                <View style={[styles.iconsize, {backgroundColor: props.iconsizebg}]}>
                    {val}
                </View>
                <Text style={{marginStart:"30%"}}>{props.title}</Text>
            </View>
        </View>

    )
}
// {props.title == "Doctors"? icon_d:props.title == "Message"? icon_p:icon}

const styles = StyleSheet.create({
    iconsize: {
        width: "15%",
        height: "60%",
        marginLeft: 18,
        borderRadius: 55,
        marginStart: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    screenid: {
        width: "58%",
        height: "100%",
        borderRadius: 22,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-around",
    },
    screenidwrap: {
        // width: "50%",
        height: "10%",
        marginTop: 4,
        alignItems: "center",
        justifyContent: "space-around",
    }
})