import React  , {useEffect} from 'react'
import {connect} from  'react-redux'
import {fetchProfile} from '../actions/actions'


const Profile = props => {
    console.log(props)

    useEffect ( () => {
        props.fetchProfile()
    },[])

    return (
        <div>
            <h1>My Profile</h1>
            <h2>Saved Posts</h2>
            <input/>
            <button>Search Posts</button>
        {props.user.map( user => (
            console.log(user)
        ))}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchProfile})(Profile);


// user.usersubs.map( post => (
//     post.savedposts.map( saved => (
//         <div> 
//             <p>{saved.posts.title}</p>
//             <p>{saved.posts.contetns}</p>
//         </div>
//     ))
        

//     ))