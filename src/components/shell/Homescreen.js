import React, { useEffect } from "react";
import {Button, StyleSheet, Text, View, StatusBar} from "react-native";
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

export default function HomeScreen({navigation, route}) {
  useEffect(() => {Geolocation.getCurrentPosition(info => console.log(info.coords.speed))
})
    // state = {
    //   focusedLocation:{
    //     latitude: 37.0999999,
    //     longitude: -122.80879797
    //     // latitudeDelta:
    //     // longitudeDelta:
    //   }
    // }

    return (
    <>
    <StatusBar  barStyle="dark-content" backgroundColor="#0000ff" />
    {/* <MapView initialRegion={state.focusedLocation} style={styles.map}/> */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="GO" onPress={() => navigation.navigate('Apple')}/>
      </View>
    </>
    );
  }


const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "75%"
  }
})