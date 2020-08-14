import React,{useState} from 'react';
import ChatCircle from './ChatCircle';
import data from '../model/data';

import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';

const Favoritelist = () => {

    
    const [,dispatch] = useGlobalState();

    const [favList,setFavList] = useState(data);

    let itemList = favList.map((items,index)=>{
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
            {itemList}
        </>
    )
}


export default Favoritelist;