import React from 'react'; 
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useGlobalState } from './contexts/globalState';
// import { initialState, reducer } from './reducers/reducer';

import ChatScreen from './ChatScreen';
import Story from './components/Story';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Stories from './components/Stories';

import './App.css';

const DeviceContainer = styled.div`
    /* theme */
    background-color: ${ props => props.theme === true ? "var(--dark_primary_bg_color)" : "var(--light_secondary_bg_color)" };
    
    width: 375px;
    height: 812px;
    border-radius: 1em;
    padding: .1em;
    box-sizing: border-box;
`;


const RoutePageAnimation = styled.div`
    height:93%;
    border-radius:inherit;

    &.page-enter {  
        opacity: 0;
        transform: scale(1.1);
    }

    &.page-enter-active {
        opacity: 1;
        transform: scale(1);
        transition:300ms opacity ,300ms transform ;
    }

    &.page-exit {
        opacity: 1;
        transform: scale(1);
    }

    &.page-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition:300ms opacity ,300ms transform ;
    }
`;

function App() {

    const [state,] = useGlobalState();

    return (
        <div className="app">
            <DeviceContainer theme={state.darkTheme}>
                <Router>
                    {/* <Switch> */}
                        <Route exact path="/">
                            {   ({match})=>(
                                    <CSSTransition
                                        in = {match != null}
                                        classNames="page"
                                        timeout={600}
                                        unmountOnExit
                                    >
                                        <RoutePageAnimation>
                                            <ChatScreen />
                                            <Story />
                                        </RoutePageAnimation>
                                    </CSSTransition>
                                )
                            }
                            
                        </Route>

                        <Route path="/stories">
                            {   ({match})=>(
                                    <CSSTransition
                                        in = {match != null}
                                        classNames="page"
                                        timeout={600}
                                        unmountOnExit
                                    >
                                        <RoutePageAnimation>
                                            <Stories />
                                            <Story />
                                        </RoutePageAnimation>
                                    </CSSTransition>
                                )
                            }
                        </Route>

                        <Route path="/settings">
                            {   ({match})=>(
                                    <CSSTransition
                                        in = {match != null}
                                        classNames="page"
                                        timeout={600}
                                        unmountOnExit
                                    >
                                        <RoutePageAnimation>
                                            <Settings />
                                        </RoutePageAnimation>
                                    </CSSTransition>
                                )
                            }
                        </Route>
                    {/* </Switch> */}
                    <Navigation />
                </Router>
            </DeviceContainer>
        </div>
    );
}

export default App;
