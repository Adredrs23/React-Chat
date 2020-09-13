import React, { useState } from 'react';
import styled from 'styled-components';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const ChatWindowBodyContainer = styled.div`
    flex:8;
    border-radius:1rem;
    
    /* theme */
    background: ${ props => props.theme === true ? "var(--dark_primary_bg_color)" : "var(--light_primary_bg_color)"};

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

        display:flex;
        flex-direction:column;
        overflow-y:scroll;

        .message{
            max-width:60%;
            width:fit-content;
            padding:10px;
            margin:5px;
            border-radius:1rem;
            
            overflow-wrap: break-word;

            background:white;
            color:#515151;
            
            /* theme */
            background: ${ props => props.theme === true ? "var(--dark_lowEmp_text_color)" : "var(--light_secondary_bg_color)"};
            color: ${ props => props.theme === true ? "var(--dark_highEmp_text_color)" : "var(--light_highEmp_text_color)"};
            box-shadow: ${ props => props.theme === true ? "var(--dark_general_boxshadow)" : "var(--light_general_boxshadow)"};
            
            /* font-weight:600;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size:12px; */
        }
        .right{    
            align-self: flex-end;

            /* theme */
            background: ${ props => props.theme === true ? "var(--dark_primary_fg_color)" : "var(--light_primary_fg_color)"};
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

            svg{
                /* theme */
                color: ${ props => props.theme === true ? "var(--dark_highEmp_text_color)" : "none"};
            }
        }
    }

`;

const ChatWindowBody = ({messages,theme}) => {

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
        <ChatWindowBodyContainer theme={theme}>
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
                            <Picker  onSelect={addEmoji} theme={ theme === true ? "dark" : "white" } />
                        </div>
                    )
            }

            <form onSubmit={handleSubmit}>
                <IconButton className="btn" onClick={()=>{setShowEmojiPicker(!showEmojiPicker)}} >
                    <EmojiEmotionsIcon  />
                </IconButton>
                <input autoComplete="off" placeholder="Type a message" type="text" name="send" value={sendMessage} onChange={(e)=>setSendMessage(e.target.value)} />
                <IconButton className="btn" onClick={handleSubmit} >
                    <SendIcon  />
                </IconButton>
            </form>

        </ChatWindowBodyContainer>
    )
}

export default ChatWindowBody;

