import React,{useState} from 'react'; 
import { ViewContext } from "./utils/ViewContext";

import ChatScreen from './ChatScreen';
import Story from './components/Story';

import './App.css';


function App() {

    const [showStoryScreen,setShowStoryScreen] = useState(false);
    const [showChatScreen,setShowChatScreen] = useState(true);
    const [storyStartIndex,setStoryStartIndex] = useState(0);

    return (
        <div className="app">
        <div className="device-container">
            <ViewContext.Provider 
                value={{
                    setShowStoryScreen,
                    setShowChatScreen,
                    setStoryStartIndex
                }}
            >
                <ChatScreen showChatScreen={showChatScreen} />
                <Story showStoryScreen={showStoryScreen} storyStartIndex={storyStartIndex} />
            </ViewContext.Provider>
        </div>
        </div>
    );
}

export default App;
