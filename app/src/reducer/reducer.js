import {FETCH_PROFILE_FAILURE, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_START} from '../actions/actions'


export const initialState = {
    isLoading: false, 
    user: [],
}


export const reducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_PROFILE_START: 
        return {
            ...state, 
            isLoading: true
        }
        case FETCH_PROFILE_SUCCESS: 
        return {
            ...state, 
            isLoading: false, 
            user: action.payload,
        }


        default:
            return state
    }
}