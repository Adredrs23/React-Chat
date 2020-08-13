import React from 'react';
import ChatCard from './ChatCard';
import data from '../model/data'

export default function Chatlist({setShowProfile}) {
    return (
        <>
            <ChatCard />
            {
                data.map((user)=>{
                    return <ChatCard user={user} key={user.id} />
                })
            }
        </>

    )
}
