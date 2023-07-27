import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwes from "react-native-vector-icons/FontAwesome";
import Person from "react-native-vector-icons/Ionicons";
import Doctor from "react-native-vector-icons/Fontisto";
import moonImage from "../src/assets/moon.png";
// import ScreenidWrap from './ScreenidWrap';
import ListFn from "./Hospitals"

export default function Home({navigation}){
    
        prop = {
            title: "Doctors",
            iconname: "doctor",
            iconsizebg: "rgb(200, 200, 200)",
            screenidbg: "rgb(120, 120, 120)",
            placeholder: "Add New",
            iconbtncolor: "blue",
            vendor: FontAwes,
            name: "dna",
            color: "red",
            nounName: "",
            btnfn: add,
        }


        function add(){
            console.log("why popping up??")
            console.log(nounName)
        }

        const [nounList, setnounsList] = useState([])

        function addNoun(){  
            if (nounName.trim === ""){
                return;
            } 
            const data = {id: Math.random(), name: nounName, image: moonImage}
            setnounsList([...nounList, data]);
            setNounName("")
        }

    return (
        <>
            <ListFn {...prop} style={{backgroundColor: "rgb(180,180,255)"}}/>
        </>
    )
}




































































































































































































//     const [doctorName, setDoctorName] = useState("")
//     const [doctorList, setdoctorsList] = useState([])

//     const addPatient = () => {  
//         if (doctorName.trim() === ""){
//             return;
//         }
//         const data = {id: Math.random(), name: doctorName, image: moonImage}
//         setdoctorsList([...doctorList, data]);
//         setDoctorName("")
        
//     }
//     const onePatient = ({item}) => {
//         return (<TouchableOpacity >
//                     <View style={styles.doctorsList}>
//                         <Image style={styles.image} source={item.image}/>
//                         <Text style={styles.patientdata} >{item.name}</Text>
//                     </View>
//                 </TouchableOpacity>);

//     }
    
//     const doctorsList = <FlatList data = {doctorList} renderItem = {(onePatient)}/>

//     return(
//         <>
//             <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
//             <ScreenidWrap name="doctor" title="Doctors" iconsizebg="rgb(200, 200, 200)" screenidbg="rgb(120, 120, 120)" />
          

//             <View style= {styles.captexticon}>
//                 <View style= {styles.texticon}>
//                     <Icon name = "search" color ="lightblue" size = {16} style={{paddingLeft:6}}/>
//                     <TextInput value={doctorName} style={styles.textinput} placeholder="search for a doctor" onChangeText ={ (e) => setDoctorName(e) }></TextInput>
//                 </View>
//                 <View style={{width: "30%", height: 50}}>
//                     <Icon.Button name = "plus" color ="white" size = {23} style={{width: "100%", height: "100%"}} onPress= { () => { addPatient(); }}>ADD NEW</Icon.Button>
//                 </View>
//             </View>


//             <View>{doctorsList}</View>
//         </>
//     )
// }


// const styles =StyleSheet.create({
//     texticon: {
//         width: "55%",
//         flexDirection: "row",
//         marginLeft: "8%",
//         borderRadius: 9,
//         backgroundColor: "white",
//         // backgroundColor: "blue",
//         fontWeight: "bold",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     textinput: {
//         color: "#000",
//         fontSize: 18,
//     },
//     captexticon: {
//         width: "100%",
//         height: 50,
//         marginBottom: "6%",
//         marginTop: "10%",
//         flexDirection: "row",
//         // backgroundColor: "rgb(220, 220, 220)",
//         justifyContent: "space-around",
//     },
//     patientdata: {
//         paddingStart: 8,
//         fontSize: 18,
//         fontWeight: "bold",
//     },
//     doctorsList:{
//         height: 60,
//         margin: 1,
//         backgroundColor:"#fff",
//         flexDirection: "row",
//         alignItems: "center"
//     },
//     image: {
//         width: "13%",
//         height: "85%",
//         marginStart: 2,
//         borderRadius: 50,
//     },
// })