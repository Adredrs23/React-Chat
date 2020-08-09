import React from 'react';
import Styled from "styled-components";

import Search from './components/Search';
import Scrollable from './components/Scrollable';
import Favoritelist from './components/Favoritelist';
import Chatlist from './components/Chatlist';
import ChatCircle from './components/ChatCircle';
import ChatWindow from './components/ChatWindow';

const ColumnarDiv = Styled.div`
    display:flex;
    flex-direction:column;
    background:white;
    height:93%;
    border-radius:inherit;
`;

const ChatScreen = () => {

    return(
        <ColumnarDiv>
            {/* <Search />
            <Scrollable height="16%" horizontal >
                <Favoritelist />
            </Scrollable>
            <Scrollable>
                <Chatlist />
            </Scrollable> */}
            <ChatWindow />
        </ColumnarDiv>
    );
}

export default ChatScreen;