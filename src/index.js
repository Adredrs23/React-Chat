import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { GlobalStateProvider } from './contexts/globalState';
import { initialState, reducer } from './reducers/reducer';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider reducer={reducer} initialState={initialState}>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

