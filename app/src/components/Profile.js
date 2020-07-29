import React  , {useEffect , useState} from 'react'
import {connect} from  'react-redux'
import {fetchProfile} from '../actions/actions'



import axiosWithAuth from '../utils/axiosWithAuth'

import axios from 'axios'

 const initialState = {
     search: ''
 }
 
// const initialSubreddit = { 
//     title: '', 
//     description: '',
// }

// const posts = []
// const savedPosts =[]

const Profile = props => {
 const [ search , setSearch] = useState(initialState)
 const [subreddit , Setsubreddit] = useState([])


// const subreddit  = (( props.user || {}).usersubs || {}).subreddit

 console.log(props.user.usersubs)



// const data = props.user.forEach( e =>  posts.push(e.subreddit.savedposts))
// const newData = posts.forEach( e => savedPosts.push(e))
// console.log(posts)
// console.log(savedPosts)








    // const data =   props.user.map( post => {
    //     return post 
    //         })

    // console.log(data)

    // const title = data.map( post => {
    // return post.subreddit.title

    // })
    
    // const description = data.map( post => {
    //     return post.subreddit.description
    //     })

    //  const post = data.map( post => {
    //         return post.subreddit.savedposts
    //         })
    //     console.log(post)

    // const savedPost = data.map( post => {

    // } )
    //     console.log(savedPost)


    // console.log(props)






    const handleChanges = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    
    }

    useEffect ( () => {
        props.fetchProfile()
        
    },[])



    const handleSearch = () => {
        axiosWithAuth()
        .get()
        // .filter( search ===  )
        .then( res => console.log())
    }

  
    return (
        <div>
            <h1>My Profile</h1>
            <h2>Saved Posts</h2>
          
        <form>
            <input
                type='text'
                name='search'
                value={search.search}
                onChange={handleChanges}
                />
           
            <button>Search Posts</button>
        </form>

        {props.isLoading && <h4>Loading your Data...</h4>}
            {props.error && (<p className="error"> Uh oh we can't find your profile...{props.error}</p>)}
           
            <div>
                    
                    {
                     props.user.usersubs !== undefined ?   props.user.usersubs.map( e => {
                        console.log(e.subreddit.subid)

                            
                        const handleDelete = () => {
                            axiosWithAuth()
                            .delete(`https://postit-user-app.herokuapp.com/subs/sub/${e.subreddit.subid}`)
                            .then( res => {
                                props.fetchProfile()
                            })
                            .catch( err => console.log(err))
                        }
                    


                        return(
                    <div>

                     <p>{e.subreddit.title}</p>
                     <p>{e.subreddit.description}</p>
                     
                     {e.subreddit.savedposts.map( e => {
                         console.log(e)
                         return (
                        <div>
                            <p>{e.posts.selftext}</p>
                            <p>{e.posts.title}</p>
                            <button onClick={handleDelete}> Delete </button>
                        </div>
                         )
                     })}
                     </div>
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