import React , {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

import {connect} from  'react-redux'
import {fetchNewData} from '../actions/actions'

import {Container2 , Form , Input2, Card2 } from '../styles/styles'


import axios from 'axios'

const initialState = {
    title: '' , 
    selftext: '', 
}

const initialData = {
    title: '' , 
    selftext: '', 
}

const initialResults = {
    recommendations: []
}

const initialSaved = {

    title: '' , 
    description: 'N/A',
}

const initialSearch = {
    subname: ''  
}

const initialPosts = {
    title: '',
    selftext: ''
}






const DashBoard  = props => {

const [ search , setSearch] = useState(initialState)
const [data , setData] = useState(initialResults)
const [ toSave , setToSave] = useState(initialSaved)
const [ subName , setSubName] = useState(initialSearch)
const [ posts , setPosts] = useState(initialPosts)

const handleChanges = e => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    })
}

    const handleChanges2 = e => {
 
        setSubName({
            ...subName,
            [e.target.name]: e.target.value
        })
    }

    const saveItem = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('https://postit-user-app.herokuapp.com/users/subs/save', toSave)
        .then( res => {
            console.log(res)
           
     })
        .catch( err => console.log(err))
    }

    const handleClick = e => {
        setToSave({
            ...toSave,
            [e.target.name]: e.target.value
        })
    }

    const handleClick2 = e => {
        setPosts({
            ...posts,
            [e.target.name]: e.target.value
        })
    }

    const savepost = e => {
        e.preventDefault()
        axiosWithAuth()
        .post(`https://postit-user-app.herokuapp.com/subs/savepost/${subName.subname}`,posts )
        .then( res => {
            console.log(res)
           
     })
        .catch( err => console.log(err))
    }

    


const handleSearch = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('posts/predict/6', search)
    .then(res => {
        console.log(res.data.recommendations)
        setData({
            ...data, 
            recommendations: res.data.recommendations
        })
        
    })
}


    const handleSubSearch = e => {
        e.preventDefault()
        axiosWithAuth()
        .get(`https://postit-user-app.herokuapp.com/subs/getposts/${subName.subname}`)
        .then(res => {
            console.log(res.data.data.children)
            const posts = res.data.data.children
            props.fetchNewData(posts)
            
        })
        .catch( err => console.log(err))


    }

    return (
        <div>
           
                    <h1> :Post Here</h1>
                    <p>The place to find the perfect subbreddit to post your content</p>
                    
           
            <Container2>
                    
                    
                    <Form onSubmit={handleSearch}>
                    <label> Search for a place to post 
                        <Input2 
                        type='text'
                        name='title'
                        placeholder='title'
                        value={search.title}
                        onChange={handleChanges}
                        />
                        <Input2
                        type='text'
                        name='selftext'
                        placeholder='text'
                        value={search.selftext}
                        onChange={handleChanges}
                        />
                        <button> Search </button>
                        <button onClick={saveItem}> Save Subbreddit to Profile</button>
                    </label>
                    </Form>

                    {/* <Form onSubmit={handleSubSearch}>
                    <label> Search for Post by Subreddit Name 
                    <Input2
                        type='text'
                        name='subname'
                        placeholder='subreddit name'
                        value={subName.subname}
                        onChange={handleChanges2}
                        />
                    
                        <button> Search </button>
                    </label>
                    <button onClick={savepost}>Save Posts Profile</button>
                    </Form> */}
                </Container2>
            
           

            {data.recommendations.length > 0 && (
               data.recommendations.map( rec => {
                  

                   return(
                <Card2 key={rec.id}>
                    <p>{rec}</p>

                    <input
                    type='checkbox'
                    name='title'
                    value={rec}
                    onClick={handleClick}
                    />

                </Card2>    
                )})
            ) }

            {props.savedPosts.length > 0 && (
               props.savedPosts.map( res => {
                   console.log(res)

                   return(
                <Card2>
                    <p>{res.data.title}</p>
                    <p>{res.data.selftext}</p>
                    
                    <input
                    type='checkbox'
                    name='selftext'
                    value={res.data.selftext}
                    onClick={handleClick2}
                    />
                      <input
                    type='checkbox'
                    name='title'
                    value={res.data.title}
                    onClick={handleClick2}
                    />
                    
                   

                </Card2>    
                )})
            ) }
            

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

export default connect(mapStateToProps, {fetchNewData})(DashBoard);

