import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Mci from 'react-native-vector-icons/MaterialCommunityIcons'
import { food } from "./Food"

export default function Render(props) {

    // useEffect(() => {
    //     clearTimeout(t)
    //     const updatedStates = elementVisible.map(() => false);
    //     t = setTimeout(() => {
    //     setElementVisible(updatedStates);
    //     }, 5000)
    // })

    const [elementVisible, setElementVisible] = useState(food[props.category].map(item => item.initialState));
    const [modalState, setModalState] = useState(null)
    const [counter, setCounter] = useState(5000)
    const [t, setT] = useState(0)

    const autoClose = () => {
        const updatedStates = elementVisible.map(() => false);
        setElementVisible(updatedStates);
    };

    const open = (index) => {
        clearTimeout(t)
        const updatedStates = elementVisible.map((i, idx) => idx === index ? !i : false);
        // const updatedStates = [...elementVisible];                           // Create a copy of the states array
        // updatedStates[index] = !updatedStates[index];                        // Toggle the state at the specified index
        setElementVisible(updatedStates);                                       // Update the states array with the modified value

        setT(setTimeout(autoClose, 3000))
    };



    function Qty() {
        return (
            <>
                <Text>dtfyghj</Text>
            </>
        )
    }
    return (
        <>
            <Text style={{ marginStart: 2 }}>{props.category}{t}</Text>
            <View style={{ paddingEnd: 40 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
                    {food[props.category].map((item, index) => (


                        <>
                            <View key={Math.random()} style={{ marginHorizontal: 2, marginBottom: 20 }}>
                                <Image style={styles.moon} source={item.img} />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "grey" }}>
                                    <Text>{item.name}</Text>
                                    <Mci name="plus" color="blue" size={34} onPress={() => { open(index); }} />
                                </View>
                                <View style={{}}>{modalState}</View>
                            </View>
                            <View key={Math.random() + Math.random}>{elementVisible[index] ? <View style={{ paddingEnd: 12 }}>{<Qty />}</View> : null}</View>
                        </>


                    ))}
                </ScrollView>
            </View>
            <Button title="press" onPress={() => { console.log(t); clearTimeout(t) }} />
        </>
    )
}

const styles = StyleSheet.create({
    moon: {
        // resizeMode: "contain",
        width: 80,
        height: 40,
        backgroundColor: "grey",
    }
})