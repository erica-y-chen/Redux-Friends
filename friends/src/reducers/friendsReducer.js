import {
    LOGIN_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCHING, 
    SUCCESS, 
    FAILURE} from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}


export const friendsReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {

        //login reducers 
        case LOGIN_START:
            return {
                ...state,
                error: '',
                fetchingFriends: false,
                loggingIn: true,
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                error: '',
                loggingIn: false
            }

        case LOGIN_FAILURE:
            return{
                ...state,
                error: '',
                loggingIn: false
            }


        //data reducers
        case FETCHING: 
            return{
                ...state, 
                error: '',
                fetchingFriends: true
            }

        case SUCCESS:
            return{
                ...state,
                error: '',
                fetchingFriends: false,
                friends: action.payload
            }

        case FAILURE:
            return{
                ...state,
                error: '',
                fetchingFriends: false,
            }

        default:
            return state; 
    }
};

export default friendsReducer;