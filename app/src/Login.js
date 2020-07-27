import React, { useState, useEffect } from 'react'
import formSchema from './formSchema'

function Login(props) {

    const initialState = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialState)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(credentials).then(valid => {
            setDisabled(!valid)
        })
    }, [credentials])

    const handleInputChange = e => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(credentials)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
                <button disabled={disabled}>Login</button>
            </form>
        </div>
    )
}

export default Login