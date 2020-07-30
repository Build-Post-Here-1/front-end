import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'

import formSchema from '../formSchema'
import { Container, Header, Form, Input, Button, Banner, Errors, ErrorP, UserIcon, PasswordIcon } from '../styles/components'
import registerUser from './registerHandler'


function Register(props) {

    const history = useHistory()

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
        history.push('/dashboard')
    }

    return (
        <Container>
            <Header>Register</Header>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <UserIcon className="fas fa-user"></UserIcon>
                <Input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
                <PasswordIcon className="fas fa-unlock"></PasswordIcon>
                <Button disabled={disabled}>Register</Button>
            </Form>
            <Errors>
                {errorInfo.username.length > 0 && <ErrorP>{errorInfo.username}</ErrorP>}
                {errorInfo.password.length > 0 && <ErrorP>{errorInfo.password}</ErrorP>}
            </Errors>
            <Banner>
                Already a member?  <Link to='/login'>Log in</Link>
            </Banner>
        </Container>
    )
}

export default Register;
