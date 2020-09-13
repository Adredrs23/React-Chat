import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';

import ChatCircle from './ChatCircle';

const CardDiv = styled.div`
    /* theme */
    background: ${ props => props.theme === true ? "var(--dark_primary_fg_color)" : "transparent" };
    box-shadow: ${ props => props.theme === true ? "var(--dark_general_boxshadow)" : "var(--light_general_boxshadow)" };

    transition: background 0.6s;
    
    :hover {        
        /* theme */
        background: ${ props => props.theme === true ? "var(--dark_ripple_gradient)" : "var(--light_ripple_gradient)" };
    }

    :active {
        background-color: var(--light_accent_color_border);
        background-size: 100%;
        transition: background 0s;
    }


    height:16%;
    /* border-radius:1rem; */
    border-radius:inherit;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 .5em;
    margin-bottom:10px;
    box-sizing:border-box;
    /* box-shadow:1px 1px 15px 2px grey; */
    /* border-right: 5px solid #06adb4; */

    /* box-shadow:0px 0px 15px 0px grey;  */
    /* alternative */

    .content{
        flex:2;
        height:100%;
        align-items:center;
        margin:10px;
        padding:20px 10px;
        box-sizing:border-box;
        position:relative;

        h4{
            /* theme */
            color: ${props=>props.theme === true ? "var(--dark_highEmp_text_color)": ""};

            margin-bottom:0;
            width:100%;
        }
        p{
            /* theme */
            color: ${props=>props.theme === true ? "var(--dark_midEmp_text_color)": ""};


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

const ChatCard = ({user,index}) => {

    const [state,dispatch] = useGlobalState();

    return (
        <CardDiv 
            theme={state.darkTheme}
            onClick={()=>{
                setTimeout(()=>{
                    dispatch({type:actionTypes.SET_SHOW_CHAT_WINDOW,payload:{show:true,user:user,index}})
                },500)
            }}
        >   
            <ChatCircle 
                theme={state.darkTheme}
                avatarImageSrc={ user ? user.avatarImageSrc : null} 
                actionOnTouch={ ()=>{
                    dispatch( {type:actionTypes.SET_SHOW_DP_POPOVER,payload:{ dp:user.avatarImageSrc }} )
                }}
            />
            <div className="content">
                <h4>{ user ? user.username : "John Doe"}</h4>
                <p>Hey check this new app!</p>
            </div >
            
        </CardDiv>
    )
}


export default ChatCard;