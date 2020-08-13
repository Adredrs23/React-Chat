import React,{useState,useContext} from 'react';
import ChatCircle from './ChatCircle';
import data from '../model/data'
import { ViewContext } from "../utils/ViewContext";

const Favoritelist = () => {

    const view = useContext(ViewContext);

    const [favList,setFavList] = useState(data);

    let itemList = favList.map((items,index)=>{
        return (
            <ChatCircle 
                avatarImageSrc={items.avatarImageSrc} 
                key={items.id} 
                actionOnTouch={()=>{
                    view.setShowStoryScreen(true);
                    view.setShowChatScreen(false);
                    view.setStoryStartIndex(index);
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