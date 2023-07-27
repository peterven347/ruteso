import React, {} from 'react'
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { useDrawerStatus } from '@react-navigation/drawer';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons'
import Ion from 'react-native-vector-icons/Ionicons'


function Divider(){
    return (
        <View style={{ 
        width: "100%",
        margin: 24,
        alignSelf:"center",
        borderBottomColor: '#444', 
        borderBottomWidth: StyleSheet.hairlineWidth}}/> 
    )
}  

export default function DrawerView(){
    const isDrawerOpen = useDrawerStatus() === 'open'
    if (isDrawerOpen){
        Keyboard.dismiss()
    }
    return(
        <>
        <View style={{flex:0.7, backgroundColor:"cyan", marginBottom: 18}}>
        </View>
        <TouchableOpacity style={{paddingStart: 6, flexDirection: "row"}}>
            <Mci name="format-list-checks" color="black" size={24}/>
            <Text style={{fontSize: 16, fontWeight:"bold", paddingStart: 8}}>Make List</Text>
        </TouchableOpacity><Divider/>
        <TouchableOpacity style={{paddingStart: 6, flexDirection: "row"}}>
            <Mci name="book-open" color="black" size={24}/>
            <Text style={{fontSize: 16, fontWeight:"bold", paddingStart: 8}}>Manage me</Text>
        </TouchableOpacity><Divider/>
        <TouchableOpacity style={{paddingStart: 6, flexDirection: "row"}}>
            <Ion name="settings" color="black" size={24}/>
            <Text style={{fontSize: 16, fontWeight:"bold", paddingStart: 8}}>Preferences</Text>
        </TouchableOpacity><Divider/>
        <TouchableOpacity style={{paddingStart: 6, flexDirection: "row"}}>
            <Ion name="people" color="black" size={24}/>
            <Text style={{fontSize: 16, fontWeight:"bold", paddingStart: 8}}>Beneficiaries</Text>
        </TouchableOpacity><Divider/>
        <TouchableOpacity style={{paddingStart: 6, flexDirection: "row"}}>
            <Mci name="account-star" color="black" size={24}/>
            <Text style={{fontSize: 16, fontWeight:"bold", paddingStart: 8}}>Register as Vendor</Text>
        </TouchableOpacity><Divider/>
        </>
    )
}