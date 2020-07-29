import React , {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

import {connect} from  'react-redux'
import {fetchNewData} from '../actions/actions'


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





const DashBoard  = props => {
const [ search , setSearch] = useState(initialState)
const [data , setData] = useState(initialResults)
const [ toSave , setToSave] = useState(initialSaved)

const handleChanges = e => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    })
   

    }

    const saveItem = () => {
        axiosWithAuth()
        .post('https://postit-user-app.herokuapp.com/subs/save', toSave)
        .then( res => {
            const data = res.config.data
            props.fetchNewData(data)
     })
        .catch( err => console.log(err))
    }

    const handleClick = e => {
        setToSave({
            ...toSave,
            [e.target.name]: e.target.value
        })
    }


const handleSearch = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('https://postit-user-app.herokuapp.com/posts/predict/6', search)
    .then(res => {
        console.log(res.data.recommendations)
        setData({
            ...data, 
            recommendations: res.data.recommendations
        })
        
    })


 

}

    return (
        <div>
            <h1> Search For the Perfect Subbreddit</h1>
            <form onSubmit={handleSearch}>
                <input
                type='text'
                name='title'
                placeholder='title'
                value={search.title}
                onChange={handleChanges}
                />
                  <input
                type='text'
                name='selftext'
                placeholder='text'
                value={search.selftext}
                onChange={handleChanges}
                />
                <button> Search </button>
            </form>
            <button onClick={saveItem}> Save to Profile</button>

            {data.recommendations.length > 0 && (
               data.recommendations.map( rec => {
                   console.log(rec.indexOf(rec))

                   return(
                <div key={rec.id}>
                    <p>{rec}</p>

                    <input
                    type='checkbox'
                    name='title'
                    value={rec}
                    onClick={handleClick}
                    />

                </div>    
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

