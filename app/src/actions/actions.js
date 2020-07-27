import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'
import { reducer } from '../reducer/reducer'



export const FETCH_PROFILE_START = 'FETCH_PROFILE_START'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE'


export const fetchProfile = () => {
    return dispatch => {
        dispatch({ type: FETCH_PROFILE_START})
        axios
        .get('https://postit-user-app.herokuapp.com/users/myinfo')
        .then( res => console.log(res))
    }
}