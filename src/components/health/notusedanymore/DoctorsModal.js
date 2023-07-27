import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function DoctorsModal(){
    return(
        <>
            <View style={{borderRadius: 12}}>
                <Text style={{padding:"10%", }}>Select an Available Doctor</Text>
                <ScrollView>
                    
                </ScrollView>
            </View>
            <View style={{width: "50%", margin:"10%", alignSelf:"center"}}>
                <Icon.Button name="send" size={14}>Send</Icon.Button>
            </View>
        </>
    )
}