import React, { useState, useEffect } from 'react'
import formSchema from './formSchema'
import * as yup from 'yup'
import registerUser from './registerHandler'

function Register(props) {
    const initialState = {
        username: '',
        password: ''
    }

    const [errorInfo, setErrorInfo] = useState({
        username: '',
        password: ''
    })
    const [credentials, setCredentials] = useState(initialState)
    const [disabled, setDisabled] = useState(true)

    //validate user input for every key stroke by user
    useEffect(() => {
        formSchema.isValid(credentials).then(valid => {
            setDisabled(!valid)
        })
    }, [credentials])

    //validate all inputs with schema and enable the submit button when user meets all criterias set by schema.
    const handleInputChange = e => {
        const { name, value } = e.target

        yup
            .reach(formSchema, name)

            .validate(value)

            .then(valid => {
                setErrorInfo({
                    ...errorInfo,
                    [name]: ''
                })
            })

            .catch(err => {
                setErrorInfo({
                    ...errorInfo,
                    [name]: err.errors[0]
                })
            })

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const user = {
            username: credentials.username,
            password: credentials.password
        }
        registerUser(credentials)
        setCredentials(initialState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
                <button disabled={disabled}>Register</button>
            </form>
            <div>
                {errorInfo.username.length > 0 && <p>{errorInfo.username}</p>}
                {errorInfo.password.length > 0 && <p>{errorInfo.password}</p>}
            </div>
        </div>
    )
}

export default Register