import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
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
        borderTopColor: 'black', 
        borderTopWidth: StyleSheet.hairlineWidth}}/> 
    )
}

export function ResultView(props){
    return(
        <>
        <View style={[styles.main, {paddingBottom: 0, marginButtom: 0}]}>
            <View style={[styles.namecap, {flex: 1, padding: 0, marginLeft: "13%", marginButtom: 0}]}>
                <Text style={styles.name}>Weight</Text>
                <Text>57</Text>
            </View>
            <View style={[styles.namecap, {flex: 1, paddingLeft: 0, padding: 0}]}>
                <Text style={styles.name}>Height</Text>
                <Text>95</Text>
            </View>
        </View>

        <View style={[styles.main, {paddingLeft: 0, justifyContent:"space-around"}]}>
            <View style={styles.namecap}>
                <Text style={styles.name}>Blood Pressure</Text>
                {props.textinput}
            </View>
            <View style={styles.namecap}>
                <Text style={styles.name}>Body Temperature</Text>
                {props.textinput}
            </View>
        </View>
        </>
    )
}
function Val(){
    return(
        <TextInput style={styles.nameinput} maxLength={15} onChangeText ={ (e) => setFirstName(e) }/>
    )
}

export default function Modala({navigation}){

    const[displayButton, setDisplayButton] = useState(<OneButton/>)

    function OneButton(){
        return(
            <View style={{width: "70%", marginHorizontal:"15%"}}>
                <Button title= "SAVE" onPress={() => {setDisplayButton(TwoButtons)}}/>
            </View>
        )
    }

    function TwoButtons(){
        return(
            <View style={{paddingTop:10, flexDirection:"row",  justifyContent:"space-around"}}>
                <Edit.Button name="edit" color="black" backgroundColor="grey" onPress={() => {setDisplayButton(OneButton)}}>Edit Result</Edit.Button>
                <Icon.Button name="send" backgroundColor="orange">Send to Doctor</Icon.Button>
            </View>    
        )
    }

    return(
        <>
            <Call name="close-sharp" size={40}/>
            <ScreenidWrap name="person" title="Patient's Info" iconsizebg="rgb(20, 150, 255)" screenidbg="rgb(120, 180, 255)"/>
            <View style={{margin: "8%", flexDirection:"row", alignItems:"center"}}>
                <View style={{width:"28%", height:"200%", borderRadius: 50, backgroundColor:"grey"}}></View>
                <View style={{paddingRight: "34%"}}>
                    <Text style={styles.textstyle}>Sadiq Peter</Text>
                    <Text style={styles.textstyle}>ID: <Text></Text></Text>
                </View>
                {/* <View><Edit name="edit" color='black' size={18}/></View> */}
            </View>
            <Divider/>
            <Text style={{fontSize: 16, color: "black", alignSelf:"center"}}>Enter vital Results</Text>
            <Divider/>

            <ResultView textinput={Val()}/>

            <View>{displayButton}</View>
            </>
    )
}

const styles =StyleSheet.create({
    textstyle: {
        color: "black",
        fontFamily: "Avenir Medium",
        fontWeight: "600",
        fontSize: 18,
        paddingLeft: 18,
    },
    main: {
        flexDirection: "row",

    },
    namecap: {
        padding: "2%",
        // paddingLeft : "10%",
        // backgroundColor: "blue",

    },
    name: {
        color: "black",
        fontSize: 16,
        fontFamily: "sans-serif",
        fontWeight: 200,
    },
    nameinput: {
        width: "100%",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#eee",
    },
})