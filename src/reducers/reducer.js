import data from '../model/data';

export const initialState = {
    showStoryScreen:false,
    showChatScreen:true,
    storyStartIndex:0,
    
    userList:data,

    showChatWindow:false,
    currentChatWindowTo:null,
    recentList:data.slice(0,3),
    currentRecentListIndex:0,
    
    showDpPopover:false,
    userDp:null,
};

export const actionTypes ={
    SET_SHOW_CHAT_SCREEN:"setShowChatScreen",
    SET_SHOW_STORY_SCREEN:"setShowStoryScreen",
    SET_STORY_START_INDEX:"setStoryStartIndex",
    SET_SHOW_CHAT_WINDOW:"setShowChatWindow",
    SET_CURRENT_TO_NEXT_RECENT_USER:"setCurrentToNextRecentUser",
    SET_CURRENT_TO_PREVIOUS_RECENT_USER:"setCurrentToPreviousRecentUser",
    SET_SHOW_DP_POPOVER:"setShowDpPopover",
    SET_HIDE_DP_POPOVER:"setHideDpPopover",
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
            //  Add selected user to the recenList( if needed ) for the time being of chatwindow opened.
            
            let newRecentList = state.recentList;
            if(action.payload.show){
                if( ! Array(state.recentList.length).fill().map((item,index)=>index).includes(action.payload.index) ){
                    newRecentList = [...state.recentList,action.payload.user]
                }
            }else{
                // setting it back to recentList from the backend data on chatwindow close.
                newRecentList = state.userList.slice(0,3);
            }

            return {...state, recentList:newRecentList, showChatWindow:action.payload.show, currentChatWindowTo:action.payload.user, currentRecentListIndex:action.payload.index }

        case actionTypes.SET_CURRENT_TO_NEXT_RECENT_USER:
            {                
                let changeToIndex,changeToUser;
                
                // if selected user in recentList then set new user to index incremented by 1 with correct cycle rotation.
                if( Array(state.recentList.length).fill().map((item,index)=>index).includes(state.currentRecentListIndex) ){
                    changeToIndex = state.currentRecentListIndex;

                    changeToIndex = (changeToIndex + 1) % state.recentList.length;
                    changeToUser = state.recentList[changeToIndex];
                } else {
                    // set user to first in the recentList
                    changeToIndex = 0;
                    changeToUser = state.recentList[changeToIndex];
                }
                return {...state, currentRecentListIndex:changeToIndex, currentChatWindowTo:changeToUser }
            }

        case actionTypes.SET_CURRENT_TO_PREVIOUS_RECENT_USER:
            {

                let changeToIndex,changeToUser;
                
                // if selected user in recentList then set new user to index incremented by 1 with correct cycle rotation.
                if( Array(state.recentList.length).fill().map((item,index)=>index).includes(state.currentRecentListIndex) ){
                    changeToIndex = state.currentRecentListIndex;

                    // to handle left extreme condition not lett   
                    if ( changeToIndex === 0 ){
                        changeToIndex = state.recentList.length - 1;
                    }
                    else{
                        changeToIndex = (changeToIndex - 1) % state.recentList.length;
                    }

                    changeToUser = state.recentList[changeToIndex];
                } else {
                    // set user to last in the recentList
                    changeToIndex = state.recentList.length-2 ;
                    changeToUser = state.recentList[changeToIndex];
                }
                return {...state, currentRecentListIndex:changeToIndex, currentChatWindowTo:changeToUser }
            }

            case actionTypes.SET_SHOW_DP_POPOVER:
                return { ...state, showDpPopover:true, userDp:action.payload.dp }

            case actionTypes.SET_HIDE_DP_POPOVER:
                return { ...state, showDpPopover:false }
        default:
            return state
    }
}