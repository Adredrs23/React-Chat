export const initialState = {
    showStoryScreen:false,
    showChatScreen:true,
    storyStartIndex:0,
};

export const actionTypes ={
    SET_SHOW_CHAT_SCREEN:"setShowChatScreen",
    SET_SHOW_STORY_SCREEN:"setShowStoryScreen",
    SET_STORY_START_INDEX:"setStoryStartIndex",
}

export const reducer = (state,action) =>{
    switch(action.type){
        case actionTypes.SET_SHOW_CHAT_SCREEN:
            return {...state, showChatScreen:true, showStoryScreen:false}
        case actionTypes.SET_SHOW_STORY_SCREEN:
            return {...state, showChatScreen:false, showStoryScreen:true}
        case actionTypes.SET_STORY_START_INDEX:
            return {...state, storyStartIndex:action.payload}
        default:
            return state
    }
}