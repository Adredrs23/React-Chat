import React from 'react';
import { useGlobalState } from '../contexts/globalState';
import ChatWindow from './ChatWindow';


const ChatWindowRecentlist = () => {

    const [state,dispatch] = useGlobalState();

    return (
        <div>
            {
                state.recentList.map( recentUser =>{
                    return (
                        <ChatWindow key={recentUser.id} />
                    )
                })
            }
        </div>
    )
}

export default ChatWindowRecentlist
