import styled from 'styled-components'

export const Banner = styled.div`
background: linear-gradient(90deg, #FF4301 0%, #FACC96 100%);
color: #272727;
padding: 1% 0;
width: 100%;
display: flex;
justify-content:space-evenly;
align-content: center;


`
export const Container = styled.div `
display: flex;
justify-content: center;
align-content:center;

`

export const Card = styled.div `
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

export const Container2 = styled.div `
display:flex;
justify-content: center;

`

export const Form = styled.form `
  
    
    

`

export const Input2 = styled.input `

margin: 1%;

`

export const Card2 = styled.div `
width:fit-content;
height: fit-content;
box-sizing: border-box;
margin: 3%;
padding: 3%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`


export const BigContainer = styled.div `
display:flex;
padding-left: 2%;




`
