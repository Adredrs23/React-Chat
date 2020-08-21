import React from 'react';
import ChatCard from './ChatCard';

import { useGlobalState } from '../contexts/globalState';

export default function Chatlist() {

    const [state,] = useGlobalState();

    return (
        <>
            {/* <ChatCard /> */}
            {
                state.userList.map((user,index)=>{
                    return <ChatCard user={user} key={user.id} index={index} />
                })
            }
        </>

    )
}
