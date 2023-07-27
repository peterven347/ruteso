import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Keyboard, Linking, Modal, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker';
import FontAwes from "react-native-vector-icons/FontAwesome5";
import FontAwe from "react-native-vector-icons/FontAwesome";
import Ion from "react-native-vector-icons/Ionicons";
import moonImage from "../src/assets/moon.png";
import ScreenidWrap from './ScreenidWrap';
import { useFocusEffect } from '@react-navigation/native';

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

function Display({navigation}){
    const [patientName, setPatientName] = useState("")
    let c =[]
    let dt =[]
    const[dta, setdta] = useState([])
    let storedKeysList = async() => {
        return await AsyncStorage.getAllKeys()
    }
    useEffect(() => {
        async function h(){
        for (let i=1; i<(await storedKeysList()).length; i++){
            d = await AsyncStorage.getItem((await storedKeysList())[i])
            c.push(JSON.parse(d))
        };
        for (let j=0; j<c.length ; j++){
            dt.push(c[j].data)
        };
        setdta(dt)
        // console.log(dt?.length)
        // console.log(dta)
    }
    h();
    },[])
    const[dis, setdis] = useState()
    const onePatient = ({item}) => {
        let lenCheck = patientName.substring(0, patientName.length).toUpperCase()
        return (patientName == ""? <TouchableOpacity >
                    <View style={styles.patientslist}> 
                        {/* <Image style={styles.image} source={item.image}/> */}
                        <Text style={styles.patientdata} key = {Math.random()}>{item.firstName } {item.lastName }{"\n"}
                            <Text style={{fontSize: 16}}>{item.email}</Text>
                        </Text>
                    </View>
                </TouchableOpacity> : lenCheck == ((item.firstName)).substring(0, patientName.length).toUpperCase() || lenCheck == ((item.lastName)).substring(0, patientName.length).toUpperCase()?
                <TouchableOpacity >
                <View style={styles.patientslist}> 
                    {/* <Image style={styles.image} source={item.image}/> */}
                    <Text style={styles.patientdata} key = {Math.random()}>{item.firstName } {item.lastName }{"\n"}
                        <Text style={{fontSize: 16}}>{item.email }</Text>
                    </Text>
                </View>
            </TouchableOpacity> : null);

    }
    const storedKeysLis = <FlatList data = {dta} renderItem = {(onePatient)} horizontal={false}/>

    return(
        <>
            <Button title="dis" onPress={async() => {console.log((await storedKeysList()))}}/>
            <Button title="dis" onPress={() => {getData}}/>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            <ScreenidWrap name="person" title="Patients" iconsizebg="rgb(20, 150, 255)" screenidbg="rgb(120, 190, 255)"/>

            <View style= {styles.captexticon}>
                <View style= {styles.texticon}>
                    <FontAwes name = "search" color ="lightblue" size = {16} style={{paddingLeft:6}}/>
                    <TextInput value={patientName} autoCapitalize="words" style={styles.textinput} placeholder="search for a patient" onChangeText ={ (e) => setPatientName(e) }></TextInput>
                </View>
                <View style={{width: "30%", height: 50}}>
                    <FontAwes.Button name = "plus" color ="white" size = {23} style={{width: "100%", height: "100%"}} onPress= { () => {navigation.push("PatientReg") }}>ADD NEW</FontAwes.Button>
                </View>
            </View>
            <View style={{paddingBottom: 150}}>{storedKeysLis}</View>
        </>
    )
}


function PatientReg({navigation}){

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("") 
    const[haddr, setHadddr] = useState("")
    const[phone, setPhone] = useState("")
    const[weight, setWeight] = useState("")
    const[height, setHeight] = useState()
    const[dob, setDob] = useState(new Date())
    const[open, setOpen] = useState(false)
    const[modalState, setModalState] = useState(null)
    const[docmModalState, setDocModalState] = useState(null)

    const patientId = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        haddr: haddr,
        phone: phone,
        weight: weight,
        height: height,
        dob: dob.toLocaleDateString(),
    }
    var id;
    useEffect(() => {
        id = async() => {
            var jsonValue = await AsyncStorage.getItem("@storedKey")
            if (jsonValue !== null){
                return jsonValue
            }else{
                  await AsyncStorage.setItem("@storedKey", "0") 
                  var jsonValue = await AsyncStorage.getItem("@storedKey")
                  return jsonValue
             }
        }
    })
    
    const storeData = async (data) => {
        try{
            var jsonValue = await AsyncStorage.getItem("@storedKey")
            if (jsonValue == null){
                await AsyncStorage.setItem("@storedKey", "00000")
                jsonValue = await AsyncStorage.getItem("@storedKey")
            }
        }catch(e){
            console.log(jsonValue)
            console.log(e)
        }finally{
            await AsyncStorage.setItem("idKey_"+jsonValue, JSON.stringify(data))
            firstmodal();
            AsyncStorage.setItem("@storedKey",  (await AsyncStorage.getItem("@storedKey")-0+1).toString())
            setdta(dt)
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getAllKeys()
            console.log(jsonValue)
        } catch(e){
            console.log(e)
        }
    }   


    const mailVerify = async()=> {
        validateEmail = (mail) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(mail);
        }
        if (!validateEmail(email && firstName && lastName && haddr && phone && weight && height)) {
            const dataId = {id: "patient", data: patientId}
            await storeData(dataId);
         } else {Alert.alert("incorrect or Incomplete details")}
    }
    
    const firstmodal = () => {
            let modalContent = (<Modal transparent = {false} visible= {true} statusBarTranslucent={false} animationType="fade" onRequestClose={() => setModalState(null)}>
            <Ion name="close-sharp" size={40} onPress={() => {setModalState(null); navigation.goBack()}}/>
            <ScreenidWrap name="person" title="Patient's Info" iconsizebg="rgb(20, 150, 255)" screenidbg="rgb(120, 180, 255)"/>
            <View style={{margin: "10%", flexDirection:"row", alignItems:"center"}}>
                <View style={{width:"30%", height:"190%", borderRadius: 50,backgroundColor:"grey"}}></View>
                <View style={{paddingRight: "34%"}}>
                    <Text style={styles.textstyle}>{firstName} {lastName}</Text>
                    <Text style={styles.textstyle}>ID: {}</Text>
                </View>
                <View><FontAwes name="edit" color='black' size={18} onPress={() => setModalState(null)}/></View>
            </View>
            
                <Text style={styles.textstyle}>Email Address</Text>
                <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{email}</Text>
                <Divider/>
                <Text style={styles.textstyle}>House Address</Text>
                <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{haddr}</Text>
                <Divider/>
                <View style={{flexDirection: "row", alignItems:"center"}}>
                    <View>
                        <Text style={styles.textstyle}>Phone Number</Text>
                        <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{phone}</Text>
                    </View>
                    <View style={{paddingLeft:"43%"}}><Ion.Button name="call" color="white" onPress={() => {Platform.OS == 'android'? Linking?.openURL(`tel:${phone}`): Linking?.openURL(`telprompt:${phone}`)}}>Call</Ion.Button></View>
                </View>
                <Divider/>
                <View style={{paddingTop:14, flexDirection:"row",  justifyContent:"space-between"}}>
                    <View>
                        <Text style={styles.textstyle}>Date of Birth</Text>
                        <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{(dob).toLocaleDateString()}</Text>
                    </View>
                    <View>
                        <Text style={styles.textstyle}>Weight</Text>
                        <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{weight}</Text>
                    </View>
                    <View>
                        <Text style={[styles.textstyle,{paddingRight: 28}]}>Height</Text>
                        <Text style={[styles.textstyle, {color:"grey", fontSize: 16}]}>{height}</Text>
                    </View>
                </View>
                
                <View style={{paddingTop:20, flexDirection:"row",  justifyContent:"space-around"}}>
                    <FontAwe.Button name="plus" color="black" backgroundColor="grey">View Medical History</FontAwe.Button>
                    <FontAwe.Button name="send" backgroundColor="orange" onPress={() => secondmodal()}>Send for Consultation</FontAwe.Button>
                </View>
            </Modal>);
            setModalState(modalContent)
    }
    const secondmodal = () => {
        let modalContent = (<Modal transparent = {false} visible= {true} statusBarTranslucent={false} animationType="fade" onRequestClose={() => setModalState(null)}>
            <Ion name="close-sharp" size={40} onPress={() => setModalState(null)}/>
            <ScreenidWrap name="person" title="Patient's Info" iconsizebg="rgb(20, 150, 255)" screenidbg="rgb(120, 180, 255)"/>
            <View style={{margin: "8%", flexDirection:"row", alignItems:"center"}}>
                <View style={{width:"28%", height:"200%", borderRadius: 50, backgroundColor:"grey"}}></View>
                <View style={{paddingRight: "34%"}}>
                    <Text style={styles.textstyle}>{firstName} {lastName}</Text>
                    <Text style={styles.textstyle}>ID: {}</Text>
                </View>
            </View>
            <Divider/>
            <Text style={{fontSize: 16, color: "black", alignSelf:"center"}}>Enter vital Results</Text>
            <Divider/>
            <View style={[styles.main, {paddingBottom: 0, marginButtom: 0}]}>
                <View style={{flex: 1, padding: 0, marginLeft: "13%", marginButtom: 0}}>
                    <Text style={styles.name}>Weight</Text>
                    <Text>{weight}</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 0,  padding: 0, marginButtom: 0}}>
                    <Text style={styles.name}>Height</Text>
                    <Text>{height}</Text>
                </View>
            </View>
            <View style={[styles.main, {paddingLeft: 0, justifyContent:"space-around"}]}>
                <View style={{padding: "2%"}}>
                    <Text style={styles.name}>Blood Pressure</Text>
                    <TextInput style={[styles.nameinput, {width: "100%"}]} maxLength={15} onChangeText ={ (e) => setFirstName(e) }/>
                </View>
                <View style={{padding: "2%"}}>
                    <Text style={styles.name}>Body Temperature</Text>
                    <TextInput style={[styles.nameinput, {width: "100%"}]} maxLength={15} onChangeText ={ (e) => setFirstName(e) }/>
                </View>
            </View>
            <View style={{width: "50%", marginHorizontal:"25%", alignItems:"center"}}>
                <FontAwe.Button name="send" backgroundColor="orange" onPress={() => doctorsmodal()}>Send to Doctor</FontAwe.Button>
                </View>
            </Modal>);
            setModalState(modalContent)
    }
    const doctorsmodal = () => {
        let modalContent = (<Modal transparent = {true} visible= {true} statusBarTranslucent={false} animationType="fade" onRequestClose={() => setDocModalState(null)}>
            <View style={{borderRadius: 12, width:"90%", height:"60%", marginTop: "28%", backgroundColor:"#888", alignItems:"center", alignSelf:"center"}}>
                <Text style={{margin: 8, fontWeight: "bold", alignSelf:"center"}}>Select an Available Doctor</Text>
                <ScrollView>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                    <View style={{width: 400, height: 60, backgroundColor: "#111", margin: 1}}></View>
                </ScrollView>
                <View style={{width: "28%", margin:"4%", alignSelf:"center"}}>
                    <Button title="SEND" style={{alignSelf:"center"}}/>
                </View>
            </View>
        </Modal>);
        setDocModalState(modalContent)
    }

    return(
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
        <Button title="go back" onPress={() => {navigation.pop()}}/>
        <Button title="g" onPress={async() => { console.log(await id());}}/>
        <Button title="go back" onPress={() => {async() =>{await AsyncStorage.getAllKeys()}}}/>
        <ScreenidWrap name="person" title="Add New Patient" iconsizebg="rgb(120, 190, 255)" screenidbg="rgb(120, 190, 255)"/>
        <View>{modalState}</View>
        <View>{docmModalState}</View>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.contentcointainer}>
            <View style={styles.picture}></View>
            <View style={styles.main}>
                <View style={styles.namecap}>
                    <Text style={styles.name}>First Name</Text>
                    <TextInput style={styles.nameinput} maxLength={15} onChangeText ={ (e) => setFirstName(e) }/>
                </View>
                <View style={styles.namecap}>
                    <Text style={styles.name}>Last Name</Text>
                    <TextInput style={styles.nameinput} maxLength={15} onChangeText ={ (e) => setLastName(e) }/>
                </View>
            </View>
            
            <Text style={[styles.name,styles.addy]}>Email Address</Text>
            <TextInput keyboardType="email-address" style={[styles.nameinput, {width: "80%", height: "8%", marginLeft: "10%"}]} onBlur={() => {mailVerify()}} onChangeText ={ (e) => setEmail(e) }></TextInput>
            <Text style={[styles.name,styles.addy]}>House Address</Text>
            <TextInput multiline={true}  style={[styles.nameinput, {width: "80%", height: "8%", marginLeft: "10%"}]} onChangeText ={ (e) => setHadddr(e) }></TextInput>
            
            <View style={styles.main}>
                <View style={styles.namecap}>
                    <Text style={styles.name}>Date of Birth</Text>
                    <DatePicker modal open={open} locale="en-GB" mode="date" date={dob} maximumDate={new Date(Date.now())} onConfirm={(date) =>{setOpen(false);setDob(date); console.log(date)}} onCancel={() => {setOpen(false)}}/>
                    <TouchableOpacity style={{height: 70}} onPress={() => {setOpen(true)}}><Text style={{paddingVertical: 12}}>{(dob).toLocaleDateString()}</Text></TouchableOpacity>
                    
                </View>
                <View style={styles.namecap}>
                    <Text style={styles.name}>Phone Number</Text>
                    <TextInput keyboardType="phone-pad" style={styles.nameinput} maxLength={15} onChangeText ={ (e) => setPhone(e) }/>
                </View>
            </View>

            <View style={styles.main}>
                <View style={[styles.namecap, {paddingTop: 0}]}>
                    <Text style={styles.name}>Weight</Text>
                    <TextInput keyboardType='numeric' style={styles.nameinput} maxLength={15} onChangeText ={ (e) => setWeight(e) }/>
                </View>
                <View style={[styles.namecap, {paddingTop: 0}]}>
                    <Text style={styles.name}>Height</Text>
                    <TextInput keyboardType='numeric' style={styles.nameinput} maxLength={15} onChangeText ={ (e) => setHeight(e) }/>
                </View>
            </View>

            <View style={{height: "8%", justifyContent: "center"}}>
                <Button title="SAVE" onPress={() => {mailVerify();}}/>
                <Button title="SAVE" onPress={() => {getData(); }}/>
            </View>
        </ScrollView>
    </>
    )
}



export default function Home({navigation}){

    return(
        <>
            <Stack.Navigator initialRouteName="Display" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Display" component={Display}></Stack.Screen>
                <Stack.Screen name="PatientReg" component={PatientReg}></Stack.Screen>
            </Stack.Navigator>
        </>
    )
}

const Stack = createNativeStackNavigator();
const styles =StyleSheet.create({
    addy: {
        marginLeft: "10%",
        height: "4%",
    },
    captexticon: {
        width: "100%",
        height: 50,
        marginBottom: "6%",
        marginTop: "10%",
        flexDirection: "row",
        // backgroundColor: "rgb(180,180,255)",
        justifyContent: "space-around",
    },
    contentcointainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom: 120,
        backgroundColor: "rgb(180,180,255)",
    },
    image: {
        width: "13%",
        height: "85%",
        marginStart: 2,
        borderRadius: 50,
    },
    main: {
        flexDirection: "row",
    },
    name: {
        color: "black",
        fontSize: 16,
        fontFamily: "sans-serif",
        fontWeight: 200,
    },
    namecap: {
        padding: "10%",
        paddingBottom : "9%",
        // backgroundColor: "#eee",
        
    },
    nameinput: {
        width: "180%",
        // height: "10%",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        // backgroundColor: "#eee",
    },
    patientdata: {
        paddingStart: 8,
        fontSize: 18,
        fontWeight: "bold",
    },
    patientslist:{
        width: "100%",
        height: 60,
        margin: 1,
        borderRadius: 6,
        backgroundColor:"blue",
        flexDirection: "row",
        alignItems: "center"
    },
    picture: {
        width: "26%",
        height: "18%",
        marginTop: 16,
        marginLeft: "6%",
        borderRadius: 75,
        backgroundColor: "blue",
    },
    scroll: {
        // height: '20%',
        // width: '80%',
        // margin: 20,
        // alignSelf: 'center',
        // padding: 20,
        backgroundColor: "rgb(180,180,255)",
    },
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
    textstyle: {
        color: "black",
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: 18,
        paddingLeft: 18,
    }
})