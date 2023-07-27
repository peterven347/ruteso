import React, {} from 'react';
import {View} from 'react-native';
import Render from './Food-render'
import {food} from  "./Food"

const list = Object.keys(food)
export default function History(){
    return (
        <View style={{backgroundColor: "white", padding: 4}}>
            {list.map((item, index) => (<Render category={item} key={index}/>))}
        </View>
    )
}


