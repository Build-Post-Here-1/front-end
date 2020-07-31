import styled from 'styled-components'

export const Banner = styled.div`
background: linear-gradient(90deg, #FF4301 0%, #ff972b  80%);
color: #272727;
padding: 1% 0;
width: 100%;
display: flex;
justify-content:space-evenly;
align-content: center;


`
export const Container = styled.div`
display: flex;
justify-content: center;
align-content:center;

`

export const Card = styled.div`
display:flex;
justify-content: center;
align-content:center;
width: 50%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`

export const Input = styled.input`
    background: #ececec;
    border-radius: 5px;
    width: 20%;
    margin: 1.5% auto;
    

    &:focus {
        outline: none;
        
        &+span {
            transition: 150ms;
        }
    } 
`

export const Container2 = styled.div`
display:flex;

`

export const Form = styled.form`
    padding: 2%;
    justify-content: center;
    align-self: center;
    align-content: center;
    padding-left: 28%;
`

export const Input2 = styled.input`
margin: 1%;
`

export const Card2 = styled.div`
box-sizing: border-box;
display:flex;
flex-direction: column;
width: 50%;
padding: 5%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`

