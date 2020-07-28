import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import formSchema from '../formSchema'
import registerUser from '../registerHandler'
import { Container, Header, Form, Input, Button, Banner, Errors, ErrorP } from '../styles/components'

export default function Register(props) {
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
        <Container>
            <Header>Register</Header>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <Input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
                <Button disabled={disabled}>Register</Button>
            </Form>
            <Errors>
                {errorInfo.username.length > 0 ? <ErrorP>{errorInfo.username}</ErrorP> : null}
                {errorInfo.password.length > 0 ? <ErrorP>{errorInfo.password}</ErrorP> : null}
            </Errors>
            <Banner>
                Already a member?  <Link to='/login'>Log in</Link>
            </Banner>
        </Container>
    )
}

