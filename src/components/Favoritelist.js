import React,{useState} from 'react';
import ChatCircle from './ChatCircle';
import data from '../model/data'

const Favoritelist = () => {

    const [favList,setFavList] = useState(data);

    let itemList = favList.map((items)=>{
        return (
            <ChatCircle avatarImageSrc={items.avatarImageSrc} key={items.id}/>
        )
    });
    
    return (
        <>
            {itemList}
        </>
    )
}


export default Favoritelist;