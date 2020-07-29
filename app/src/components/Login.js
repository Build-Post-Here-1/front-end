import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import { Container, Header, Form, Input, Button, Banner, Errors, ErrorP, UserIcon, PasswordIcon } from '../styles/components'
import formSchema from '../formSchema'
import axiosWithAuth from '../utils/axiosWithAuth'

import axios from 'axios'

import {useHistory } from 'react-router-dom'


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
        <Container>
            <Header>Log in</Header>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <UserIcon className="fas fa-user"></UserIcon>
                <Input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
                <PasswordIcon className="fas fa-unlock"></PasswordIcon>
                <Button disabled={disabled}>Login</Button>
            </Form>
            <Errors>
                {errorInfo.username.length > 0 ? <ErrorP>{errorInfo.username}</ErrorP> : null}
                {errorInfo.password.length > 0 ? <ErrorP>{errorInfo.password}</ErrorP> : null}
            </Errors>
            <Banner>
                Don't have an account?  <Link to='/signUp'>Register here!</Link>
            </Banner>
        </Container>
    )
}

export default Login
