import React from 'react';
import Stories from 'react-insta-stories';
import Styled from  'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useGlobalState } from '../contexts/globalState';
import { actionTypes } from '../reducers/reducer';

const StoryScreen = Styled.div`
    height:100%;
    
    &.storyScreen-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    &.storyScreen-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
    }
    &.storyScreen-exit {
        opacity: 1;
    }
    &.storyScreen-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }
`;

//  css transition itself takes care of mounting and unmounting so no need of condition rendering here. Obviously one must use unmountOnExit to remove the child component from the DOM 

const Story = () => {

    const [state,dispatch] = useGlobalState();

    return (
            <CSSTransition 
                    in={state.showStoryScreen} 
                    timeout={300} 
                    classNames="storyScreen" 
                    unmountOnExit 
                    mountOnEnter
                >
                    <StoryScreen>
                        <Stories 
                            stories={[
                                'https://robohash.org/asd',
                                'https://robohash.org/asdasd',
                                'https://robohash.org/asda',
                            ]}
                            defaultInterval={3000}
                            width={"100%"}
                            height={"100%"}
                            currentIndex={state.storyStartIndex}
                            onAllStoriesEnd ={ ()=>{ 
                                dispatch({type:actionTypes.SET_SHOW_CHAT_SCREEN});
                                dispatch({type:actionTypes.SET_STORY_START_INDEX,payload:0})
                            }}
                        />
                    </StoryScreen>
                </CSSTransition> 
    )
}

export default Story;
