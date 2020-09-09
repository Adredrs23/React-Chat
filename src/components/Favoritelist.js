import React, { useState } from 'react';
import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';

import ChatCircle from './ChatCircle';
import UploadImageDialog from './UploadImageDialog';

import newStory from '../assets/images/newStory.png'

const Favoritelist = ({showCreateNewStoryAvatar,wrapAroundComponent}) => {
    
    const [state,dispatch] = useGlobalState();
    const [openUploadStory, setOpenUploadStory ] = useState(false);


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
        { showCreateNewStoryAvatar && (
                <>
                    <ChatCircle 
                        avatarImageSrc={newStory}
                        actionOnTouch={ 
                            ()=>{
                                setOpenUploadStory(true);
                            }
                        }
                        style={{transform:"scale(.9)"}}
                    />
                    <UploadImageDialog open={openUploadStory} handleClose={()=>{setOpenUploadStory(false)}} contentType="image"  />
                </>
            )
        }
            {itemList}
        </>
    )
}


export default Favoritelist;