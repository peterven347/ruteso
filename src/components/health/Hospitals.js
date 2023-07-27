import React, { useState } from 'react';
import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Person from "react-native-vector-icons/Ionicons";
import Doctor from "react-native-vector-icons/Fontisto";
import moonImage from "../src/assets/moon.png";
import ScreenidWrap from './ScreenidWrap';

export default function ListFn(props){
    const [nounName, setNounName] = useState(props.nounName)
    // const [nounList, setnounsList] = useState([])

    const singleNoun = ({item}) => {
        return (<TouchableOpacity >
                    <View style={styles.nounsList}>
                        <Image style={styles.image} source={item.image}/>
                        <Text style={styles.noundata} >{item.name}</Text>
                    </View>
                </TouchableOpacity>);
    }
    
    // const nounsList = <FlatList data = {nounList} renderItem = {(singleNoun)}/>
    return(
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <ScreenidWrap name={props.iconname} title={props.title} iconsizebg={props.iconsizebg} screenidbg={props.screenidbg}/> 
          

            <View style= {styles.captexticon}>
                <View style= {styles.texticon}>
                    <Icon name = "search" color ="lightblue" size = {16} style={{paddingLeft:6}}/>
                    <TextInput value={nounName} style={styles.textinput} placeholder={props.placeholder} onChangeText ={ (e) =>{setNounName(e); } }></TextInput>
                </View>
                <View style={{width: "30%", height: 50}}>
                    <props.vendor.Button name = {props?.name} color ={props?.color} size = {23} style={{width: "100%", height: "100%"}} onPress= { () =>  props.btnfn() }>ADD NEW</props.vendor.Button>
                    {/* <Button title="fntry" onPress={() => console.log(nounName)}/> */}
                </View>
            </View>


            {/* <View>{nounsList}</View> */}
        </>
    )
}


const styles =StyleSheet.create({
    texticon: {
        width: "55%",
        flexDirection: "row",
        marginLeft: "8%",
        borderRadius: 9,
        backgroundColor: "white",
        // backgroundColor: "blue",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
    textinput: {
        color: "#000",
        fontSize: 18,
    },
    captexticon: {
        width: "100%",
        height: 50,
        marginBottom: "6%",
        marginTop: "10%",
        flexDirection: "row",
        // backgroundColor: "rgb(220, 220, 220)",
        justifyContent: "space-around",
    },
    noundata: {
        paddingStart: 8,
        fontSize: 18,
        fontWeight: "bold",
    },
    nounsList:{
        height: 60,
        margin: 1,
        backgroundColor:"#fff",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: "13%",
        height: "85%",
        marginStart: 2,
        borderRadius: 50,
    },
})