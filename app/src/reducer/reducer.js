import {FETCH_PROFILE_FAILURE, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_START , FETCH_PROFILE_NEW_DATA} from '../actions/actions'


export const initialState = {
    isLoading: false, 
    error: '',
    user: {
        username: "",
        avatar: "",
        usersubs: [
            {
                subreddit: {
                    savedposts: [{
                        posts: {}
                    }]
                },
            }
        ]
    },
    savedPosts: [],

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

        case FETCH_PROFILE_FAILURE: 
        return {
            ...state, 
            isLoading: false,
            error: action.payload
        }

        case FETCH_PROFILE_NEW_DATA:
         return {
             ...state,
             isLoading: false,
             savedPosts: action.payload
             

         }


        default:
            return state
    }
}