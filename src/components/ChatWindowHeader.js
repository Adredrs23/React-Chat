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

    .options svg{
        /* theme */
        color: ${ props => props.theme === true ? "var(--dark_highEmp_text_color)" : "none"};
    }

    .title{
        display:flex;
        flex-direction:column;
        width:60%;
        padding:0 5px;
    
        h3{
            /* theme */
            background: ${ props => props.theme === true ? "var(--dark_text_gradient)" : "var(--light_text_gradient_alt)"};

            padding:0;
            margin:0;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        p{
           padding:0;
           margin:0;
           overflow: hidden;
           white-space:nowrap;

           /* theme */
           color: ${ props => props.theme === true ? "var(--dark_midEmp_text_color)" : "var(--light_midEmp_text_color)"};
        }
    }

`;

const ChatWindowHeader = ({name,lastActive,avatarImageSrc,theme}) =>{

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <ChatHeader theme={theme}>
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