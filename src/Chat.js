import {CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import React, { useEffect } from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import { useState } from 'react';
import db from './firebase';
import firebase from 'firebase'

function Chat() {

  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);
  const [input ,setInput] = useState('');
  const [messages,setMessages] =useState([]);

  useEffect(() => {
    if(channelId){
     db.collection("channels")
     .doc(channelId)
     .collection("messages")
     .orderBy("timestamp", "desc")
     .onSnapshot((snapshot)=>
     (
       setMessages(snapshot.docs.map((doc)=>
       (
         doc.data()))) 
     ))
       }
  }, [channelId]);

  const sendMessage =(e)=>{

     e.preventDefault();
     db.collection("channels").doc(channelId).collection("messages").add
     ({
       timestamp:firebase.firestore.FieldValue.serverTimestamp(),
       message:input,
       user:user 
    });

    setInput("");
    
  }
  
    return (

        <div className="chat">

            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
             {messages.map((message)=>(
                <Message 
                timestamp={message.timestamp}
                user={message.user} 
                message={message.message}
                />
             ))}
            </div>

            <div className="chat__input">
             <AddCircleOutlineIcon fontSize="large" />
             <form >
               <input disabled={!channelId} value={input}
                onChange={e=>setInput(e.target.value)} 
                placeholder={`Message #${channelName}`}/>
               <button className="chat__inputButton"
                type="submit" onClick={sendMessage} >Send Message</button>
             </form>

             <div className="chat__inputIcons">
               <CardGiftcard fontSize="large"/>
               <Gif fontSize="large"/>
               <EmojiEmotions fontSize="large"/>
             </div>
            </div>
        </div>
    )
}

export default Chat
