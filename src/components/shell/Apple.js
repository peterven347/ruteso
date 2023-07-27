import React, { useState } from "react";
import { Alert, Button, Hr, hr, Dimensions, FlatList, Image, ImageBackground,  Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, TouchableOpacity,  View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import moonImage from "../assets/moon.png"

export default function Apple({navigation}){
    const [placeName, setPlaceName] = useState("")
    const [places, setPlaces] = useState([])
    const [modVid, setmodVid] = useState(null)

    const placeAdd = () => {  
        if (placeName.trim() === ""){
            return;
        }
        const data = {id: Math.random(), name: placeName, image: moonImage}
        setPlaces([...places, data]);
        setPlaceName("")
        
    }
    const modtry = (itemm) => {
        if (itemm.id == itemm.id){
            let modContent = (<Modal transparent = {true} visible= {true} statusBarTranslucent={true} animationType="fade" onRequestClose={() => setmodVid(null)}>
                <View style={styles.moonn}>
                    <View >
                        <Text style={{fontSize:24, fontWeight:"bold"}}>{itemm.name}</Text>
                        <Button title="Go back" onPress={() => setmodVid(null)} />
                        <Button title="Delete" onPress={() => {deleteList(itemm); setmodVid(null)}} color="red"/>
                    </View>
                </View>
            </Modal>);
            setmodVid(modContent)
        }
    } 
    const deleteList = (item) => {
        const dl = places.filter((place) => (place.id != item.id))
        setPlaces(dl)
    }
    
    const placesOutput = ({item}) => {
        return (<TouchableOpacity style={styles.listwp} onPress={() => modtry(item)} onLongPress={() => deleteList(item)}>
                    <View style={{flexDirection: "row", marginRight:"auto"}}>
                        <Image style={styles.moon} source={item.image}/>
                        <Text style={styles.newItem} key = {Math.random()}>{item.name}</Text>
                    </View>
                    <Icon style={{paddingTop: 10}}name = "book" size={45}/>
                </TouchableOpacity>);

    }
    
    const placeOutput = <FlatList data = {places} renderItem = {(placesOutput)}/>


    return(
        <>
            {/* hidden = {true} */}
            <StatusBar  barStyle="light-content" backgroundColor="#0000ff" translucent={Platform.OS === "android"?true:false}/>
            <Button title = "ADD NEW EVENT" onPress = { () => { placeAdd(); }}/>
            <View>{modVid}</View>
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <TextInput style = {styles.listItem} value ={placeName} maxLength={10} underlineColorAndroid= "transparent" placeholder="Write Here." onChangeText ={ (e) => setPlaceName(e) }/>
            </View>
            <View >{placeOutput}</View>
            <Button title="HomeScreen" onPress={() => navigation.navigate('HomeScreen')}/>
            <Button title="Auth" onPress={() => navigation.navigate('Auth')}/>
        </>
    );
}


const styles = StyleSheet.create({
    newItem: {
        marginTop: 5,
        color: "white",
        borderWidth: 0,
        fontSize: 36,
        fontWeight: "bold",
        // backgroundColor : "#eee"
    },
    listItem: {
        color: "white",
        backgroundColor: "grey",
        marginTop: 12,
        fontSize: 24,
        width: "80%",
        paddingStart: 8,
        borderLeftWidth: 4,
        borderLeftColor: "blue",
        borderRightColor: "grey",
        borderTopColor: "grey",
        borderBottomColor: "grey",
        // borderColor: "yellow",
        borderWidth: 1,

    },
    listwp: {
        flexDirection: "row",
    },
    moonn:{
        width: 200,
        height: 200,
        fontWeight: "bold",
        backgroundColor : "grey",
        margin : 100,
        marginLeft : 100,
        alignItems: "center",
    },
    moon:{
        // resizeMode: "contain",
        width: 80,
        height: 40,
        backgroundColor : "grey",
        marginTop : 10
    }
})
