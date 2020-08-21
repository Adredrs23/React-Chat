import React from 'react';
import ChatCircle from './ChatCircle';


import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';

import newStory from '../assets/images/newStory.png'

const Favoritelist = () => {
    
    const [state,dispatch] = useGlobalState();

    let itemList = state.userList.map((items,index)=>{
        return (
            <ChatCircle 
                avatarImageSrc={items.avatarImageSrc} 
                key={items.id} 
                actionOnTouch={()=>{
                    dispatch({type:actionTypes.SET_SHOW_STORY_SCREEN});
                    dispatch({type:actionTypes.SET_STORY_START_INDEX,payload:index});
                }} 
            />
        )
    });
    
    return (
        <>
            <ChatCircle 
                avatarImageSrc={newStory}
                actionOnTouch={ 
                    ()=>{
                        console.log("create new Story");
                    }
                }
                style={{transform:"scale(.9)"}}
            />
            {itemList}
        </>
    )
}


export default Favoritelist;