import React,{ useState } from 'react';
import styled from "styled-components";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ChatCircle from './ChatCircle';

const ChatHeader = styled.div`
    background:rgba(255,255,255,.3);
    backdrop-filter:blur(10px);
    padding:5px 10px;
    border-top-left-radius:1rem;
    border-top-right-radius:1rem;
    display:flex;
    align-items:center;
    flex:1;

    .avatar{
        transform:scale(.9);
    }

    .avatar:active{
        transition:.3s;
        transform:scale(.8)
    }

    .title{
        display:flex;
        flex-direction:column;
        width:60%;
        padding:0 5px;
    
        h3{
            padding:0;
            margin:0;
            background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,165,29,1) 0%, rgba(204,67,113,1) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p{
           padding:0;
           margin:0;
           overflow: hidden;
           white-space:nowrap;
           color:#81766b;
        }
    }

`;

const ChatWindowHeader = ({name,lastActive,avatarImageSrc}) =>{

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <ChatHeader>
            <div className="avatar" > 
                <ChatCircle actionOnTouch={ () => console.log("HEADER") } avatarImageSrc={avatarImageSrc} />
            </div>

            <div className="title" >
                <h3>{ name }</h3>
                <p>&bull; { lastActive }</p>
            </div>
            
            <div className="options">
                <IconButton onClick={handleClick}  >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>View profile</MenuItem>
                    <MenuItem onClick={handleClose}>Wallpaper</MenuItem>
                    <MenuItem onClick={handleClose}>Block</MenuItem>
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                </Menu>
            </div>

        </ChatHeader>
    )
}

export default ChatWindowHeader;