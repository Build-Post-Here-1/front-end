import React, { useState, useEffect } from 'react'
import formSchema from './formSchema'

import * as yup from 'yup'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid black;
`

const Form = styled.form`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin: auto;
`

const Input = styled.input`
    background: #ececec;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 2%;
    margin: 1.5% auto;
    width: 80%;
`

const Button = styled.button`
    border: none;
    border-radius: 50px;
    background: #5E42A6;
    color: #fff;
    width: 25%;
    margin: 1.5% auto;
    padding: 2.2%;
`

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
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleInputChange} value={credentials.username} type="text" name="username" placeholder="username" />
                <Input onChange={handleInputChange} value={credentials.password} type="password" name="password" placeholder="password" />
                <Button disabled={disabled}>Login</Button>
            </Form>
            <div>
                {errorInfo.username.length > 0 ? <p>{errorInfo.username}</p> : null}
                {errorInfo.password.length > 0 ? <p>{errorInfo.password}</p> : null}
            </div>
        </Container>
    )
}

export default Login