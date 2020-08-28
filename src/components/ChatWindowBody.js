import React, { useState } from 'react';
import styled from 'styled-components';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import deepOrange from '@material-ui/core/colors/deepOrange';


const ChatWindowBodyContainer = styled.div`
    flex:8;
    border-radius:1rem;
    background:#d7d0d0;
    padding:10px;
    /* position:relative;  */
    /* to make picker show up correctly */

    .emoji__picker{
        position: absolute;
        top:0;
        left:4px;
    }

    .message__area::-webkit-scrollbar{
        display:none
    }

    .message__area{
        width:100%;
        max-height:330px;
        height:330px;
        margin-bottom:5px;
        /* background:red; */
        display:flex;
        flex-direction:column;
        overflow-y:scroll;

        .message{
            max-width:60%;
            width:fit-content;
            overflow-wrap: break-word;
            background:white;
            padding:10px;
            border-radius:1rem;
            color:#515151;
            /* font-weight:600;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size:12px; */
            margin-bottom:5px;
        }
        .right{    
            background:#e1b69c;
            align-self: flex-end;
        }
    }

    form{
        display:flex;

        input{
            flex:11;
            border:none;
            outline:none;
            border-radius:1em;
            padding:10px;
        }

        .btn{
            flex:1;
            margin:0 2px;
        }
    }

`;

const ChatWindowBody = ({messages}) => {

    const [sendMessage, setSendMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [localMessages, setLocalMessages] = useState(messages);

    const handleSubmit = ( e )=>{
        e.preventDefault();
        const messageArea = document.querySelector('.message__area');

        if(sendMessage){
            setLocalMessages([...messages,
                {
                    message:sendMessage,
                    to:"John Doe",
                }
            ])
            setSendMessage("");
            setShowEmojiPicker(false);
            setTimeout(()=>{
                messageArea.scrollTop = messageArea.scrollHeight;
            },50)
        }

    }

    const addEmoji = e => {
        let sym = e.unified.split('-')
        let codesArray = []
        sym.forEach(el => codesArray.push('0x' + el))
        let emoji = String.fromCodePoint(...codesArray)
        
        setSendMessage( sendMessage + emoji )
    };

    return (
        <ChatWindowBodyContainer>
            <div className="message__area">
                {
                    localMessages.map( mssg => 
                        mssg.to === "me" 
                        ? 
                        <div className="message">{ mssg.message }</div> 
                        : 
                        <div className="message right">{ mssg.message}</div>
                    )
                }
            </div>

            { 
                showEmojiPicker  && 
                    (
                        <div className="emoji__picker">
                            <Picker  onSelect={addEmoji} />
                        </div>
                    )
            }

            <form onSubmit={handleSubmit}>
                <IconButton className="btn" onClick={()=>{setShowEmojiPicker(!showEmojiPicker)}} >
                    <EmojiEmotionsIcon style={{ color: deepOrange[600] }} />
                </IconButton>
                <input autoComplete="off" placeholder="Type a message" type="text" name="send" value={sendMessage} onChange={(e)=>setSendMessage(e.target.value)} />
                <IconButton className="btn" onClick={handleSubmit} >
                    <SendIcon style={{ color: deepOrange[600] }} />
                </IconButton>
            </form>

        </ChatWindowBodyContainer>
    )
}

export default ChatWindowBody;

