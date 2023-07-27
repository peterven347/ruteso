import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome";
import Edit from "react-native-vector-icons/FontAwesome5";
import Call from "react-native-vector-icons/Ionicons";
import ScreenidWrap from '../ScreenidWrap';

function Divider(){
    return (
        <View style={{ 
        width: "92%",
        margin: 10,
        alignSelf:"center",
        borderBottomColor: '#444', 
        borderBottomWidth: StyleSheet.hairlineWidth}}/> 
    )
}  

export default function Modala({navigation}, props){

    const[patientValue, setPatientValue] = useState(null)
    key = props.key
    useEffect(() => {
        const getData = async () => {
            try {
                setPatientValue(JSON.parse(await AsyncStorage.getItem(key)))
            } catch(e){
                console.log(e)
            }
        }
        getData();
    }, [])
    
        return(
        <>
        <Modal visible={true} transparent= {false}>
            <Call name="close-sharp" size={40} onPress={() => {navigation.goBack()}}/>
            <ScreenidWrap name="person" title="Patient's Info" iconsizebg="rgb(20, 150, 255)" screenidbg="rgb(120, 180, 255)"/>
            <View style={{margin: "10%", flexDirection:"row", alignItems:"center"}}>
                <View style={{width:"30%", height:"190%", borderRadius: 50,backgroundColor:"grey"}}></View>
                <View style={{paddingRight: "34%"}}>
                    <Text style={styles.textstyle}>{patientValue?.firstName} {patientValue?.lastName}</Text>
                    <Text style={styles.textstyle}>ID: {}<Text></Text></Text>
                </View>
                <View><Edit name="edit" color='black' size={18}/></View>
            </View>
            
                <Text style={styles.textstyle}>Email Address</Text>
                <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{patientValue?.email}</Text>
                <Divider/>
                <Text style={styles.textstyle}>House Address</Text>
                <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{patientValue?.haddr}</Text>
                <Divider/>
                <View style={{flexDirection: "row", alignItems:"center"}}>
                    <View>
                        <Text style={styles.textstyle}>Phone Number</Text>
                        <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{patientValue?.phone}</Text>
                    </View>
                    <View style={{paddingLeft:"43%"}}><Call.Button name="call" color="white">Call</Call.Button></View>
                </View>
                <Divider/>
                
                <View style={{paddingTop:20, flexDirection:"row",  justifyContent:"space-around"}}>
                    <Icon.Button name="plus" color="black" backgroundColor="grey">View Medical History</Icon.Button>
                    <Icon.Button name="send" backgroundColor="orange">Send for Consultation</Icon.Button>
                </View>
            </Modal>
        </>
        )
    }

const styles = StyleSheet.create({
    textstyle: {
        color: "black",
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: 18,
        paddingLeft: 18,
    }
}) 