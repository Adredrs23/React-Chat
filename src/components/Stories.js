import React, {useState} from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../contexts/globalState';
import { CSSTransition } from 'react-transition-group';
import { actionTypes } from '../reducers/reducer';
import storyCountColorModifier from '../utils/storyCountColorModifier';

import newStory from '../assets/images/newStory.png'
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Scrollable from './Scrollable';
import ChatCircle from './ChatCircle';
import UploadImageDialog from './UploadImageDialog';

const ColumnarDiv = styled.div`
    height:100%;
    padding:.2rem;
    display:flex;
    flex-direction:column;
    position:relative;
    border-radius:inherit;

    header{        
        /* theme */
        border-bottom: ${ props => props.theme === true ? "1px solid var(--dark_accent_color)" : "1px solid var(--light_accent_color_border)" };

        width:90%;
        margin:0 auto;
        padding:0;
        margin-bottom:1rem;
        border-radius:inherit;
    }

    .content{
        display:flex;
        flex-wrap:wrap;
        padding:5px 15px;
        margin:0 auto;
    }

    &.animate-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    &.animate-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
    }
    &.animate-exit {
        opacity: 1;
    }
    &.animate-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }
`;

const Header = styled.h2`
    /* theme */
    background: ${ props => props.theme === true ? "var(--dark_text_gradient)" : "var(--light_text_gradient)" };
    
    padding:0 1.5rem 1rem;
    width:fit-content;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: 10px;  
    font-size:2rem;
`;

const Card = styled.div`
    width: ${ props => props.width ? props.width : "120px" };
    height: ${ props => props.height ? props.height : "120px" };
    border-radius: ${ props => props.borderRadius ? props.borderRadius : "50%" };
    display:flex;
    flex-direction: ${ props => props.flexDirection ? props.flexDirection : "column" };
    justify-content:center;
    align-items:center;
    padding:5px;
    margin:10px;
    transform:scale(0.95);
    
    /* theme */
    box-shadow: ${ props => props.theme === true ? "var(--dark_general_boxshadow)" : "var(--light_general_boxshadow_alt)" };
    background: ${ props => props.theme === true ? "var(--dark_primary_fg_color)" : "transparent" };

    .newStory-avatar{
        flex:1;
        justify-content:center;
        display:flex;
    }

    .story-cta{
        display:flex;
        flex-direction:column;
        flex:2;
        align-items:center;

        h2{
            /* theme */
            color: ${ props => props.theme === true ? "var(--dark_accent_color)" : "var(--light_accent_color_border)" }; 
            
        }

        button{
            /* theme */
            background: ${ props => props.theme === true ? "var(--dark_accent_color)" : "var(--light_accent_color_border)" };
            
            color: var(--dark_highEmp_text_color);
        }
    }
`;

const Username = styled.p`
    /* theme */
    background: ${ props => props.theme === true ? "var(--dark_text_gradient)" : "var(--light_text_gradient)" };
    
    margin-top:10px;
    font-weight:bolder;
    width:fit-content;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space:nowrap;
`;


const Stories = () => {

    const [state,dispatch] = useGlobalState();

    const [openUploadStory, setOpenUploadStory ] = useState(false);


    return (
        <CSSTransition
            in = { !state.showStoryScreen }
            timeout={300} 
            classNames="animate" 
            unmountOnExit 
            mountOnEnter
        >
            <ColumnarDiv theme={state.darkTheme}>
                <header>
                    <Header theme={state.darkTheme}>Stories</Header>
                </header>

                <Card theme={state.darkTheme} borderRadius="inherit" width="90%" flexDirection="horizontal">

                    <div className="newStory-avatar">
                        <Badge badgeContent={200} color="error" max={10}>
                            <ChatCircle 
                                theme={state.darkTheme}
                                avatarImageSrc={newStory}
                                actionOnTouch={ 
                                    ()=>{
                                        console.log("create new Story");
                                    }
                                }
                                />
                        </Badge>
                    </div>

                    <div className="story-cta">
                        <h2>
                            Your Stories
                        </h2>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={()=>setOpenUploadStory(true)}
                        >
                            Add new
                        </Button>
                        <UploadImageDialog open={openUploadStory} handleClose={()=>{setOpenUploadStory(false)}} contentType="story"  />

                    </div> 

                </Card>

                <Scrollable theme={state.darkTheme} height="70%" >
                    <div className="content">
                    {
                        state.userList.map((items,index)=>{
                            return (
                                <Card theme={state.darkTheme}>
                                    <Badge badgeContent={items.stories.length} color={storyCountColorModifier(items.stories.length)} max={10}>
                                        <ChatCircle 
                                            theme={state.darkTheme}
                                            avatarImageSrc={items.avatarImageSrc} 
                                            key={items.id} 
                                            actionOnTouch={()=>{
                                                dispatch({type:actionTypes.SET_SHOW_STORY_SCREEN});
                                                dispatch({type:actionTypes.SET_STORY_START_INDEX,payload:index});
                                            }} 
                                        />
                                    </Badge>
                                    <Username theme={state.darkTheme} >{items.username}</Username>
                                </Card>
                            )
                        })
                    }
                    </div>
                </Scrollable>

            </ColumnarDiv>
        </CSSTransition>
    )
}

export default Stories;
