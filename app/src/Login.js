import React, { useState } from 'react'

function Login(props) {

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

    return (
        <div>
            <form>
                <input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
            </form>
        </div>
    )
}

export default Login