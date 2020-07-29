import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 12px;
    background: #fff;
    font-weight: 300;
    width: 30%;
    margin: 5% auto;
    padding: 2% 2.5%;
    position: relative;

    @media(max-width: 930px) {
        width: 40%;
    }

    @media(max-width: 900px) {
        width: 50%;
    }

    @media(max-width: 560px) {
        width: 62%;
    }

    @media(max-width: 485px) {
        width: 80%;
    }

    @media (max-width: 470px) {
        width: 95%;
        box-shadow: none;
        border-radius: 0;
    }

    a {
        color: #a877ff;
        text-decoration: none;
        font-weight: 500;
    }
`

export const Header = styled.h1`
    font-weight: bolder;
    font-weight: bold;
`

export const Form = styled.form`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    position: relative;
`

export const Input = styled.input`
    background: #ececec;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 2%;
    margin: 1.5% auto;
    width: 70%;
    text-indent: 1.5rem;

    &:focus {
        outline: none;
        border: 2px solid #FF4500;
        &+span {
            color: #656565;
            transition: 150ms;
        }
    }
`

export const Button = styled.button`
    border: 1px solid #FF4500;
    border-radius: 50px;
    background: #FF4500;
    color: #fff;
    width: 25%;
    margin: 4.5% auto;
    padding: 2.2%;
    transition: 200ms;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        background: transparent;
        border: 1px solid #dadada;
        color: #dadada;
        cursor: not-allowed;
        transition: 200ms;
    }

    @media(max-width: 900px) {
        width: 30%;
    }

    @media(max-width: 470px) {
        width: 50%;
    }
`

export const Banner = styled.div`
    background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
    color: #272727;
    padding: 1% 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;

    @media(max-width: 470px) {
        border-radius: 0;
    }
`

export const Errors = styled.div`
    padding-bottom: 6%;
`

export const ErrorP = styled.p`
    color: #FF4500;
    margin: 1% 0;
`

export const PasswordIcon = styled.span`
    font-weight: 900;
    color: #b9b9b9;
    font-size: 1rem;
    position: absolute;
    top: 37%;
    left: 15%;
    transition: 200ms;
`

export const UserIcon = styled.span`
    font-weight: 900;
    color: #b9b9b9;
    font-size: 1rem;
    position: absolute;
    top: 9.5%;
    left: 15%;
    transition: 200ms;
`