import React from 'react';
import { Button, Keyboard, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Message from "react-native-vector-icons/AntDesign";
import Doctor from "react-native-vector-icons/Fontisto";
import Calendar from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}){
    function B(){
        return "search for a card"
    }
    const getk = async () =>{
        let keys =[]
        try {
            keys = await AsyncStorage.getAllKeys() 
        }catch(e){
            console.log(e)
        }
        console.log(keys)
    }
    return(
        <>
        <Button title= "gdvcy" onPress={()=>{getk()}}/>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        <View style={{alignItems: "center", backgroundColor: "rgb(180,180,255)"}}>
            <TextInput style={styles.textinput} placeholder="search for a card"></TextInput>
        </View>
        

        <View style={styles.capviewholder}>
            <View style={styles.viewholder}>
                <TouchableOpacity style={[styles.card, {backgroundColor: "rgb(120, 190, 225)"}]}  onPress={() => navigation.navigate('Patients')}>
                    <View style={styles.iconcontainer}>
                        <View style={[styles.iconsize, {backgroundColor: "rgb(20, 150, 255)"}]}>
                            <Icon name="person" color="#222" size={30}/>
                        </View>
                        <Icon name="person" color="blue" size={65} style={styles.icons}/>
                    </View>
                    <Text style={styles.textstyle}>Patients</Text>
                    <Text style={{paddingLeft: 18}}>Patients</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, {backgroundColor: "pink"}]}  onPress={() => navigation.navigate('Consultation')}>
                    <View style={styles.iconcontainer}>
                        <View  style={[styles.iconsize, {backgroundColor: "orange"}]}>
                            <Message name="message1" color="#222" size={30}/>
                        </View>
                        <Message name="message1" color="#222" size={65} style={[styles.icons, {paddingLeft:"20%"}]}/>
                    </View>
                    <Text style={styles.textstyle}>Consultation</Text>
                    <Text style={{paddingLeft: 18}}>Consultation</Text>
                </TouchableOpacity>
            </View>


            {/* section */}


            <View style={styles.viewholder}>
                <TouchableOpacity style={[styles.card, {backgroundColor: "rgb(120, 120, 120)"}]}  onPress={() => navigation.navigate('Doctors')}>
                    <View style={styles.iconcontainer}>
                        <View style={[styles.iconsize, {backgroundColor: "grey"}]}>
                            <Doctor name="doctor" color="#222" size={30}/>
                        </View>
                        <Doctor name="doctor" color="grey" size={65} style={styles.icons}/>
                    </View>
                    <Text style={styles.textstyle}>Doctors</Text>
                    <Text style={{paddingLeft: 18}}>Doctors</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, {backgroundColor: "rgb(220, 220, 220)"}]}  onPress={() => navigation.navigate('Appointments')}>
                    <View style={styles.iconcontainer}>
                        <View style={[styles.iconsize, {backgroundColor: "rgb(150, 150, 150)"}]}>
                            <Calendar name="calendar-plus" color="#222" size={30}/>
                        </View>
                        <Calendar name="calendar-plus" color="grey" size={65} style={styles.icons}/>
                    </View>
                    <Text style={styles.textstyle}>Appointments</Text>
                    <Text style={{paddingLeft: 18}}>Appointments</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    viewholder: {
        width: "100%",
        height: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    capviewholder: {
        width: "100%",
        height: "85%",
        justifyContent: "space-around",
        backgroundColor: "rgb(210,210,255)",
    },
    card: {
        borderRadius: 9,
        width: "40%",
        height: "50%",
        overflow: "hidden"
    },
    iconcontainer: {
        width: "100%",
        height: "70%",
        borderRadius: 9,
        marginTop: 0,
        // backgroundColor: "red",
        flexDirection: "row",
    },
    iconsize: {
        // backgroundColor: "red",
        width: "25%",
        height: "35%",
        marginLeft: 18,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        // overflow: "hidden",
    },
    icons: {
        paddingLeft: "24%",
    },
    textinput: {
        margin: 20,
        width:"75%",
        backgroundColor: "white",
        borderRadius: 9,
    },
    textstyle: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 18,
    }
}) 