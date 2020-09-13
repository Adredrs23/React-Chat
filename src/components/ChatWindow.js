import React from 'react';
import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ChatWindowHeader from './ChatWindowHeader';
import ChatWindowBody from './ChatWindowBody';

import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const ChatWindowTransition = styled.div`
    position:absolute;
    bottom:10px;
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
        
        svg{
            /* theme */
            color: ${ props => props.theme === true ? "var(--dark_accent_color)" : "var(--light_accent_color_border)" };
            
            font-size:40px;
        }
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

const ChatWindow = ({theme}) => {

    const [state,dispatch] = useGlobalState();

    return (
        <TransitionGroup>
            
            <CSSTransition
                key={ state.currentChatWindowTo ? state.currentChatWindowTo.id : false }
                timeout={200}
                unmountOnExit
                mountOnEnter
                classNames="chatWindow"
            >
                <ChatWindowTransition theme={theme}>

                    <ChatWindowHeader 
                        theme={theme}
                        name={ state.currentChatWindowTo ? state.currentChatWindowTo.username : "John Doe"} 
                        lastActive={ state.currentChatWindowTo ? state.currentChatWindowTo.lastActive : "Infinity AM" } 
                        avatarImageSrc = { state.currentChatWindowTo ? state.currentChatWindowTo.avatarImageSrc : null }
                    />
                    
                    <ChatWindowBody theme={theme} messages={ state.currentChatWindowTo ? state.currentChatWindowTo.messages : null } />

                    <div className="closeHolder">
                        <IconButton  
                            onClick={ ()=> dispatch( { type:actionTypes.SET_CURRENT_TO_PREVIOUS_RECENT_USER } )} 
                        >
                            <ArrowLeftIcon  />
                        </IconButton>

                        <IconButton onClick={ ()=> dispatch( {type:actionTypes.SET_SHOW_CHAT_WINDOW,payload:{show:false,}}) } >
                            <CancelIcon  />
                        </IconButton>
                        
                        <IconButton 
                            onClick={ ()=> dispatch( { type:actionTypes.SET_CURRENT_TO_NEXT_RECENT_USER } )} 
                        >
                            <ArrowRightIcon  />
                        </IconButton>
                    </div>

                </ChatWindowTransition>
            </CSSTransition>

        </TransitionGroup>

    )
}

export default ChatWindow;
