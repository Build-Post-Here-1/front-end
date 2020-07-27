import axios from 'axios'

export default function registerUser(userObj) {
    axios.post('https://postit-user-app.herokuapp.com/users/signup', userObj)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}