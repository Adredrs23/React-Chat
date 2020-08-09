import React from 'react';
import styled from 'styled-components';
import ChatCircle from './ChatCircle'

const CardDiv = styled.div`
    height:16%;
    border-radius:inherit;
    /* background:reds; */
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
`;

const ChatCard = ({user}) => {
    return (
        <CardDiv>
            <ChatCircle avatarImageSrc={ user ? user.avatarImageSrc : null}/>
            <div className="content">
                <h4>{ user ? user.username : "John Doe"}</h4>
                <p>Hey check this new app!</p>
            </div>
        </CardDiv>
    )
}


export default ChatCard;