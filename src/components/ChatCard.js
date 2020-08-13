import React from 'react';
import styled from 'styled-components';
import ChatCircle from './ChatCircle';

const CardDiv = styled.div`
    transition: background 0.6s;
    
    :hover {
        background:radial-gradient(circle, transparent 1%, white 1%) center/15000%;
    }

    :active {
        background-color: #d0d0d0;
        background-size: 100%;
        transition: background 0s;
    }

    height:16%;
    border-radius:inherit;
    /* background:red; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 .5em;
    margin-bottom:10px;
    box-sizing:border-box;
    box-shadow:1px 1px 15px 2px grey;
    /* border-right: 5px solid #06adb4; */

    /* box-shadow:0px 0px 15px 0px grey;  */
    /* alternative */

    .content{
        flex:2;
        height:100%;
        align-items:center;
        margin:10px;
        padding:0 10px;
        box-sizing:border-box;
        position:relative;

        h4{
            margin-bottom:0;
            width:100%;
        }
        p{
            margin-top:2px;
            width:100%;
            white-space:nowrap;
        }

        ::before{
            content: "";
            position: absolute;
            border-left: 2px solid #ab71718a;
            height: 50%;
            left: -2px;
            top: 25%;
        }
    }

    /* stop selection */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */

`;

const ChatCard = ({user,setShowProfile}) => {
    return (
        <CardDiv 
            onClick={()=>console.log("Open ChatWindow")}
            // onMouseDown={(e)=>{console.log("pintereest ")}}
            // onMouseUp={e=>console.log("Tesa")}
        >
            <ChatCircle 
                avatarImageSrc={ user ? user.avatarImageSrc : null} 
                actionOnTouch={()=>{console.log("Open Profile")}}
            />
            <div className="content">
                <h4>{ user ? user.username : "John Doe"}</h4>
                <p>Hey check this new app!</p>
            </div >
        </CardDiv>
    )
}


export default ChatCard;