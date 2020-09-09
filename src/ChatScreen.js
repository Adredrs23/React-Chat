import React from 'react';
import Styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import { useGlobalState } from './contexts/globalState';
import { actionTypes } from './reducers/reducer';

import Search from './components/Search';
import Scrollable from './components/Scrollable';
import Favoritelist from './components/Favoritelist';
import Chatlist from './components/Chatlist';
import ChatWindow from './components/ChatWindow';
import DpPopover from './components/DpPopover';

// import ChatWindowRecentlist from './components/ChatWindowRecentlist';

const ColumnarDiv = Styled.div`
    display:flex;
    flex-direction:column;
    background:white;
    height:100%;
    border-radius:inherit;
    position:relative;

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

const ChatScreen = () => {

    const [state, dispatch] = useGlobalState();

    return(
        <CSSTransition
            in={state.showChatScreen} 
            timeout={300} 
            classNames="chatScreen" 
            unmountOnExit 
            mountOnEnter
        >
            <ColumnarDiv>
                <Search onClick={()=>{console.log("search")}}/>
                <Scrollable height="16%" horizontal >
                    <Favoritelist showCreateNewStoryAvatar/>
                </Scrollable>
                <Scrollable>
                    <Chatlist />
                </Scrollable>

                {
                    state.showChatWindow && (
                        <ChatWindow />
                    )
                }

                <DpPopover 
                    dp={state.userDp} 
                    open={ state.showDpPopover } 
                    handleClose={ ()=>{dispatch({type:actionTypes.SET_HIDE_DP_POPOVER})} } 
                />

            </ColumnarDiv>
        </CSSTransition>
    );
}

/* <CSSTransition
    in={state.showChatWindow}
    mountOnEnter
    unmountOnExit
    classNames="chatwindow__fades"
    timeout={600}
    >
    <div>
    <ChatWindow />
    </div>
</CSSTransition> */

/* <ChatWindowRecentlist /> */

export default ChatScreen;