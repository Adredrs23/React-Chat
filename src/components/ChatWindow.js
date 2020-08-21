import React from 'react';
import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';

import ChatWindowHeader from './ChatWindowHeader';
import ChatWindowBody from './ChatWindowBody';

import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import deepOrange from '@material-ui/core/colors/deepOrange';


const ChatWindowTransition = styled.div`
    position:absolute;
    bottom:0;
    z-index:99;
    display:flex;
    flex-direction:column;
    height:72%;
    width:100%;

    .closeHolder{
        width:100%;
        backdrop-filter:blur(10px); 
        display:flex;
        justify-content:space-around;      
    }

    &.chatWindow-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    &.chatWindow-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
        
    }
    &.chatWindow-exit {
        opacity: 1;
    }
    &.chatWindow-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }
`;

const ChatWindow = () => {

    const [state,dispatch] = useGlobalState();

    return (
        <CSSTransition
            in={state.showChatWindow}
            timeout={200}
            unmountOnExit
            mountOnEnter
            classNames="chatWindow"
        >
            <ChatWindowTransition>

                <ChatWindowHeader 
                    name={ state.currentChatWindowTo 
                        ? state.currentChatWindowTo.username 
                        : "John Doe"} 
                    lastActive={ state.currentChatWindowTo 
                        ? state.currentChatWindowTo.lastActive 
                        : "Infinity AM" } 
                />
                
                <ChatWindowBody />
                <div className="closeHolder">
                    <IconButton  
                        onClick={ ()=> dispatch( { type:actionTypes.SET_CURRENT_TO_PREVIOUS_RECENT_USER } )} 
                    >
                        <ArrowLeftIcon style={{ fontSize: 40,color: deepOrange[600]}} />
                    </IconButton>

                    <IconButton onClick={ ()=> dispatch( {type:actionTypes.SET_SHOW_CHAT_WINDOW,payload:{show:false,}}) } >
                        <CancelIcon style={{ fontSize: 40,color: deepOrange[600]}} />
                    </IconButton>
                    
                    <IconButton 
                        onClick={ ()=> dispatch( { type:actionTypes.SET_CURRENT_TO_NEXT_RECENT_USER } )} 
                    >
                        <ArrowRightIcon style={{ fontSize: 40,color: deepOrange[600]}} />
                    </IconButton>
                </div>

            </ChatWindowTransition>
        </CSSTransition>
    )
}

export default ChatWindow;
