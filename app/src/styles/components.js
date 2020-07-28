import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 12px;
    box-shadow: 0 0 13px 1px #7d7d7d;
    background: #fff;
    font-weight: 300;
    width: 40%;
    margin: 5% auto;
    padding: 2% 2.5%;
    position: relative;

    @media(max-width: 900px) {
        width: 50%;
    }

    @media (max-width: 450px) {
        width: 95%;
        box-shadow: none;
        border-radius: 0;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
    }
`

export const Header = styled.h1`
    font-weight: bolder;
`

export const Form = styled.form`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
`

export const Input = styled.input`
    background: #ececec;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 2%;
    margin: 1.5% auto;
    width: 70%;
`

export const Button = styled.button`
    border: none;
    border-radius: 50px;
    background: #084c61;
    color: #fff;
    width: 25%;
    margin: 4.5% auto;
    padding: 2.2%;
    transition: 200ms;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        background: #e8e8e8;
        cursor: not-allowed;
        transition: 200ms;
    }

    @media(max-width: 900px) {
        width: 30%;
    }

    @media(max-width: 450px) {
        width: 50%;
    }
`

export const Banner = styled.div`
    background: #323031;
    color: #fff;
    padding: 1% 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;

    @media(max-width: 450px) {
        border-radius: 0;
    }
`

export const Errors = styled.div`
    padding-bottom: 6%;
`

export const ErrorP = styled.p`
    color: #db3a34;
    margin: 1% 0;
`