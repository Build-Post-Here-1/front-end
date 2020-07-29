import React, { useState, useEffect } from 'react'
import formSchema from '../formSchema'
import axiosWithAuth from '../utils/axiosWithAuth'

import axios from 'axios'

import {useHistory } from 'react-router-dom'

import * as yup from 'yup'

 function Login(props) {
    const history = useHistory();
    const { push } = history;


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

    useEffect(() => {
        formSchema.isValid(credentials).then(valid => {
            setDisabled(!valid)
        })
    }, [credentials])

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
        e.preventDefault();
        axios
        .post('https://postit-user-app.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.access_token);
          push('/profile');
        })
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
