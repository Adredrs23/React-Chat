import React from 'react';
import Styled from "styled-components";
import { CSSTransition } from 'react-transition-group';

import Search from './components/Search';
import Scrollable from './components/Scrollable';
import Favoritelist from './components/Favoritelist';
import Chatlist from './components/Chatlist';
// import ChatWindow from './components/ChatWindow';

const ColumnarDiv = Styled.div`
    display:flex;
    flex-direction:column;
    background:white;
    height:93%;
    border-radius:inherit;

    &.chatScreen-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    &.chatScreen-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
    }
    &.chatScreen-exit {
        opacity: 1;
    }
    &.chatScreen-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }
`;

const ChatScreen = ({showChatScreen}) => {
    return(
        <CSSTransition
            in={showChatScreen} 
            timeout={300} 
            classNames="chatScreen" 
            unmountOnExit 
            mountOnEnter
        >
            <ColumnarDiv>
                <Search onClick={()=>{console.log("search")}}/>
                <Scrollable height="16%" horizontal >
                    <Favoritelist />
                </Scrollable>
                <Scrollable>
                    <Chatlist />
                </Scrollable>
                {/* <ChatWindow /> */}
            </ColumnarDiv>
        </CSSTransition>
    );
}

export default ChatScreen;