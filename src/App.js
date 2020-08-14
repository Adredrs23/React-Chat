import React from 'react'; 
import { GlobalStateProvider } from './contexts/globalState';
import { initialState, reducer } from './reducers/reducer';

import ChatScreen from './ChatScreen';
import Story from './components/Story';

import './App.css';

function App() {

    return (
        <div className="app">
            <GlobalStateProvider reducer={reducer} initialState={initialState}>

                <div className="device-container">
                        <ChatScreen />
                        <Story />
                </div>

            </GlobalStateProvider>

        </div>
    );
}

export default App;
