import React, {useState} from "react"
import {Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native"
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignIn(){
    const [hidePassword, setHidePassword] = useState(true);
    const [rememberMe, setRememberMe] = useState(true)
    const passwordProp = {
        placeholder: "Password",
        textContentType: 'password',
        keyboardType: 'ascii-capable',
        secureTextEntry: hidePassword,
        spellCheck: false,
        caretHidden: true,
        autoCompleteType: false,
        autoCorrect: false,
        contextMenuHidden: true
    }
    return(
        <>
            <KeyboardAvoidingView style={{marginTop: 16, width:"80%", height: "50%", alignSelf:"center", justifyContent:"space-evenly"}}>
            <TextInput style={{backgroundColor: "white", width:"100%", borderRadius: 6, fontSize: 14}} placeholder="Email"></TextInput>
            <View>
                <TextInput style={{backgroundColor: "white", width:"100%", borderRadius: 6, fontSize: 14}} {...passwordProp} auto></TextInput>
                <Mci name={hidePassword? "eye" : "eye-off"} size={20} style={{ position: 'absolute', right: 10, top: 14 }} onPress={() =>{setHidePassword(!hidePassword)}}/>
            </View>
            <View style={{flexDirection: "row", justifyContent:"space-between", marginVertical: 20}}>
                <View style={{flexDirection: "row"}}>
                    <Mci name={rememberMe? "checkbox-marked": "checkbox-blank-outline"} size={20} onPress={() => {setRememberMe(!rememberMe)}}/>
                    <Text>Remember me</Text>
                </View>
                <TouchableOpacity>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <Button style={{}} title="Sign In"/>
            <Button style={{}} title="Create Account"/>
        </KeyboardAvoidingView>
        </>
    )
}