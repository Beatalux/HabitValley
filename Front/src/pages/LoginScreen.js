import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';

import { Link } from 'react-router-dom';
import axios from 'axios';
import EmailIcon from '@mui/icons-material/Email';
import login from '../images/login.jpg'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = async () => {
    const response = await axios.post("/api/account/login", { email, password })
    console.log(response.data)
    localStorage.setItem('access_token', response.data.access_token)
  }


  return (
    <>
      <LoginImageContainer />
      <TitleText>Login</TitleText>
      <InputContainer placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></InputContainer>
      <InputContainer placeholder="password" onChange={(e) => setPassword(e.target.value)}></InputContainer>

      <LoginBtn onClick={onSubmit}>Login</LoginBtn>
      <GoogleLoginBtn>Connect with Google</GoogleLoginBtn>
      <SmallText>New to Let's build habit?</SmallText>
      <TextBtn to="/signup">Register</TextBtn>

    </>
  )
}


//빼놓기

function InputContainer(props) {

  return (
    <LoginInput>
      <EmailIcon fontSize="medium" />
      <input class="searchField" type="text" placeholder={props.placeholder} onChange={props.onChange}>

      </input>
    </LoginInput>
  )

}


const SmallText = styled.p`
font-size:12px;
font-weight:400;
margin:10px;
font-family: 'Quicksand', sans-serif;
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const TextBtn = styled(StyledLink)`
color:#208AEC;
font-size:12px;
background-color: transparent;
border:none;
`


const LoginBtn = styled.button`
margin:10px 30% 0px 30%;
width:40%;
height:50px;
border-radius:15px;
color:white;
background-color:#2F80ED ;
font-size:16px;
border:none;
`

const GoogleLoginBtn = styled.button`
margin:10px 30% 10px 30%;
width:40%;
height:50px;
border-radius:15px;
color:#2F80ED;
border:2px solid #2F80ED; 
font-size:16px;
border:none;
`

const LoginInput = styled.div`
  
    border: 1px solid lightgrey;
    background-color:white;
    display:flex;
    border-radius:20px;
    width:70%;
    height:30px;
    padding:10px 10px 10px 10px;
    align-items: center;
    margin:10px 15% 0 15%;

    .searchField{
        border-radius:20px;
        padding-left:10px;
        border: 0;
    }
`
const LoginImageContainer = styled.div`
background-image:url(${login});
background-size:contain;
background-repeat:no-repeat;
width:80%;
height:300px;
padding-top:5px;
`
const TitleText = styled.p`
font-size:30px;
font-weight:700;
font-family: 'Quicksand', sans-serif;
margin-left:15%;

`
