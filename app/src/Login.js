import React, { useState, useEffect } from 'react'
import formSchema from './formSchema'

import * as yup from 'yup'

function Login(props) {

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

    //validate user input for each keystroke
    useEffect(() => {
        formSchema.isValid(credentials).then(valid => {
            setDisabled(!valid)
        })
    }, [credentials])

    //validate all input fields with schema and enable the submit button if user meets criteria set by schema.
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
        console.log(credentials)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
                <button disabled={disabled}>Login</button>
            </form>
            <div>
                {errorInfo.username.length > 0 ? <p>{errorInfo.username}</p> : null}
                {errorInfo.password.length > 0 ? <p>{errorInfo.password}</p> : null}
            </div>
        </div>
    )
}

export default Login