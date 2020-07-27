import React, { useState } from 'react'

function Register(props) {
    const initialState = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialState)

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
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register