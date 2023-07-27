import React, {useState} from "react"
import {Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native"

export default function ForgotPass(){
    return(
        <>
            <KeyboardAvoidingView style={{marginTop: 16, width:"80%", height: "45%", alignSelf:"center", justifyContent:"space-evenly", alignItems:"flex-start"}}>
                <Text>E-mail</Text>
                <TextInput style={{width:"100%", borderBottomWidth: 1, textAlignVertical:"bottom", padding: 0, fontSize: 16}} autoCorrect={false} placeholder="your E-mail address"></TextInput>
                <View style={{alignSelf:"center"}}>
                    <Button title="Submit"/>
                    <Text style={{alignSelf:"center"}}>Login</Text>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}