import React  , {useEffect , useState} from 'react'
import {connect} from  'react-redux'
import {fetchProfile} from '../actions/actions'

import { Card ,Container , Input} from '../styles/styles'

import axiosWithAuth from '../utils/axiosWithAuth'

import axios from 'axios'

 const initialState = {
     search: ''
 }
 

const Profile = props => {
 const [ search , setSearch] = useState(initialState)
 const [subreddit , Setsubreddit] = useState([])

 



    const handleChanges = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    
    }

    useEffect ( () => {
        props.fetchProfile()
        
    },[])



    const handleSearch = e => {
        e.preventDefault()
        axiosWithAuth()
        .get(`posts/searchPosts/${search.search}`)
        .then( res => console.log(res))
        .catch(err => console.log(err)) 
    }


  
    return (
        <div>
            <h1>My Profile</h1>

            <img
                src={props.user.avatar}
                alt='thumbnail'
                id='profilePic'
                />
            <h3>Welcome {props.user.username}</h3>

            <h2>Saved Posts</h2>
          
        <form onSubmit={handleSearch}>
            <Input
                type='text'
                name='search'
                value={search.search}
                onChange={handleChanges}
                />
           
            <button>Search Posts</button>
        </form>

        <h2>Here are your saved posts</h2>

        {props.isLoading && <h4>Loading your Data...</h4>}
            {props.error && (<p className="error"> Uh oh we can't find your profile...{props.error}</p>)}
           
            <div>
                    
                    {
                     props.user.usersubs !== undefined ?   props.user.usersubs.map( e => {
                        

                            
                        const handleDelete = () => {
                            axiosWithAuth()
                            .delete(`https://postit-user-app.herokuapp.com/subs/sub/${e.subreddit.subid}`)
                            .then( res => {
                                props.fetchProfile()
                            })
                            .catch( err => console.log(err))
                        }
                    


                        return(
                <Container>
                    
                     <Card>
                        <div>

                        <p>{e.subreddit.title}</p>
                        <p>{e.subreddit.description}</p>
                        <button onClick={handleDelete}> Delete </button>
                        {e.subreddit.savedposts.map( e => {
                           
                            return (
                            <div>
                                <p>{e.posts.selftext}</p>
                                <p>{e.posts.title}</p>
                              
                            </div>
                         )
                     })}
                     
                     </div>
                     </Card>
                     
                </Container>
               
                     )}) : ''
                    
                        
                  }
            </div>
        

    
        </div>
    )

}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user, 
        savedPosts: state.savedPosts
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