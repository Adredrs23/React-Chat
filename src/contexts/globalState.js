import React,{ useContext, createContext, useReducer } from 'react';


export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({reducer,initialState,children}) =>{
    return <GlobalStateContext.Provider value= {useReducer(reducer,initialState)}>
        {children}    
    </GlobalStateContext.Provider>
}

export const useGlobalState = () => useContext(GlobalStateContext)