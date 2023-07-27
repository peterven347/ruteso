import React, {useState} from "react"
import {Button, KeyboardAvoidingView, Text, TextInput, View} from "react-native"
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';



const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Verify = () => {}

export default function CreateAcc(){
    const [hidePassword, setHidePassword] = useState(true);
    const passwordProp = {
        placeholder: "Password",
        textContentType: 'password',
        keyboardType: 'ascii-capable',
        secureTextEntry: hidePassword,
        spellCheck: false,
        caretHidden: true,
        autoCompleteType: false,
        autoCorrect: false,
    }
    
    return(
        <>
        <KeyboardAvoidingView style={{marginTop: 16, width:"60%", height: "45%", alignSelf:"center", justifyContent:"space-evenly"}}>
                <TextInput style={{backgroundColor: "white", width:"100%", borderRadius: 6, fontSize: 14}} placeholder="Name"></TextInput>
                <TextInput style={{backgroundColor: "white", width:"100%", borderRadius: 6, fontSize: 14}} placeholder="Email"></TextInput>
                <View>
                    <TextInput style={{backgroundColor: "white", width:"100%", borderRadius: 6, fontSize: 14}} {...passwordProp} auto></TextInput>
                    <Mci name={hidePassword? "eye" : "eye-off"} size={20} style={{ positMci: 'absolute', right: 10, top: 14 }} onPress={() =>{setHidePassword(!hidePassword)}}/>
                </View>
                <Button style={{}} title="Create Account"/>
        </KeyboardAvoidingView>
        </>
    )
}