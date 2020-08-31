import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../contexts/globalState';
import { CSSTransition } from 'react-transition-group';
import { actionTypes } from '../reducers/reducer';
import storyCountColorModifier from '../utils/storyCountColorModifier';

import newStory from '../assets/images/newStory.png'
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

// import Favouritelist from './Favoritelist';
import Scrollable from './Scrollable';
import ChatCircle from './ChatCircle';

const ColumnarDiv = styled.div`
    height:100%;
    padding:.2rem;
    display:flex;
    flex-direction:column;
    position:relative;
    border-radius:inherit;

    header{
        /* background-color:red; */
        border-bottom:1px solid rgb(225 43 104);
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
    padding:0 1.5rem 1rem;
    background-image:linear-gradient(90deg,#6379f5 0%,rgb(225 43 104) 100%);
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
    box-shadow:0 0 10px 0 grey;
    padding:5px;
    margin:10px;
    transform:scale(0.95);
`;

const Username = styled.p`
    margin-top:10px;
    font-weight:bolder;
    background-image:linear-gradient(90deg,#6379f5 0%,rgb(225 43 104) 100%);
    width:fit-content;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space:nowrap;
`;


const Stories = () => {

    const [state,dispatch] = useGlobalState();

    return (
        <CSSTransition
            in = { !state.showStoryScreen }
            timeout={300} 
            classNames="animate" 
            unmountOnExit 
            mountOnEnter
        >
            <ColumnarDiv>
                <header>
                    <Header>Stories</Header>
                </header>

                <Card borderRadius="inherit" width="90%" flexDirection="horizontal">
                    <div style={{flex:1, justifyContent:"center", display:"flex"}}>
                        <Badge badgeContent={200} color="error" max={10}>
                            <ChatCircle 
                                avatarImageSrc={newStory}
                                actionOnTouch={ 
                                    ()=>{
                                        console.log("create new Story");
                                    }
                                }
                                />
                        </Badge>
                    </div>

                    <div style={
                        {
                            display:"flex",
                            flexDirection:"column",
                            flex:1,
                            alignItems:"center",
                        }
                    }>
                        <h2 style={{color:"coral"}}>
                            Your Stories
                        </h2>
                        <Button
                            variant="contained"
                            style={{backgroundColor:"#ff8a65",color:"white"}}
                            startIcon={<AddIcon />}
                        >
                            Add new
                        </Button>
                    </div> 
                </Card>

                <Scrollable height="70%" >
                    <div className="content">
                    {
                        state.userList.map((items,index)=>{
                            return (
                                <Card >
                                    <Badge badgeContent={items.stories.length} color={storyCountColorModifier(items.stories.length)} max={10}>
                                        <ChatCircle 
                                            avatarImageSrc={items.avatarImageSrc} 
                                            key={items.id} 
                                            actionOnTouch={()=>{
                                                dispatch({type:actionTypes.SET_SHOW_STORY_SCREEN});
                                                dispatch({type:actionTypes.SET_STORY_START_INDEX,payload:index});
                                            }} 
                                        />
                                    </Badge>
                                    <Username>{items.username}</Username>
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
