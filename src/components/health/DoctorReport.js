import React from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import {ResultView} from "./notusedanymore/Result"

function Divider(){
  return (
<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 100, textAlign: 'center', fontSize:16, fontWeight:"bold"}}>Doctor's Report</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
  )
}

function Val(){
  return(
      <TextInput style={styles.nameinput} maxLength={15} onChangeText ={ (e) => setFirstName(e) }/>
  )
}
export default function Home({navigation}){
    return(
        <>
        
            <StatusBar visible={false} barStyle="light-content" backgroundColor="#ccc" />
            <ResultView textinput={Val()}/>
            <Divider/>
            <Text style={{margin:8}}>Diagnosis</Text>
            <TextInput multiline={true} style={{width: "90%", height: "20%", marginLeft: 8, textAlignVertical: 'top',backgroundColor:"#fff"}}></TextInput>
            <Text style={{margin:8}}>Prescribed Drugs</Text>
            <TextInput multiline={true} style={{width: "90%", height: "20%", marginLeft: 8, textAlignVertical: 'top', backgroundColor:"#fff"}}></TextInput>
            
            <TouchableOpacity style={{width: "60%", height:35, marginHorizontal: "20%", paddingTop: 8, marginTop: 16, borderRadius: 2, backgroundColor:"#fff"}}>
                <Text style={{alignSelf:"center", fontWeight: "bold"}}>Refer to another Hospital</Text>
            </TouchableOpacity> 
            <View style={{width: "60%", marginHorizontal:"20%", marginTop: 8}}>
                <Button title="done" onPress= {() =>{console.log(process.env.NODE_ENV)}}/>
            </View>
              
            <View style={{height: 4}}></View>
        </>
    )
}


const styles = StyleSheet.create({
  nameinput: {
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#eee",
},
})