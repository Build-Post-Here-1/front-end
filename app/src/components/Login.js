import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, Header, Form, Input, Button, Banner, Errors, ErrorP } from '../styles/components'
import formSchema from '../formSchema'

import * as yup from 'yup'

export default function Login(props) {

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
        <Container>
            <Header>Log in</Header>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <Input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
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

