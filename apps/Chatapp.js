import React, {useState, useCallback, useEffect} from 'react'
import {GiftedChat} from 'react-native-gifted-chat'
import moonImage from "./src/assets/moon.png";


export default function Example(){
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello dev",
                createdAt: new Date(),
                user:{
                    _id: 2,
                    name: "React native",
                    avatar: moonImage,
                },
            },
         ])
    }, [])
    
    const onSend = useCallback((messages= []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}/>
    )
}
