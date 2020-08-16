export const initialState = {
    showStoryScreen:false,
    showChatScreen:true,
    storyStartIndex:0,
    showChatWindow:false,
    currentChatWindowTo:null,
};

export const actionTypes ={
    SET_SHOW_CHAT_SCREEN:"setShowChatScreen",
    SET_SHOW_STORY_SCREEN:"setShowStoryScreen",
    SET_STORY_START_INDEX:"setStoryStartIndex",
    SET_SHOW_CHAT_WINDOW:"setShowChatWindow",
}

export const reducer = (state,action) =>{
    switch(action.type){
        case actionTypes.SET_SHOW_CHAT_SCREEN:
            return {...state, showChatScreen:true, showStoryScreen:false}
        case actionTypes.SET_SHOW_STORY_SCREEN:
            return {...state, showChatScreen:false, showStoryScreen:true}
        case actionTypes.SET_STORY_START_INDEX:
            return {...state, storyStartIndex:action.payload}
        case actionTypes.SET_SHOW_CHAT_WINDOW:
            return {...state, showChatWindow:action.payload.show, currentChatWindowTo:action.payload.user }
        default:
            return state
    }
}