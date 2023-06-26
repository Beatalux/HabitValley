import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';

import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import EmailIcon from '@mui/icons-material/Email';
import signup from '../images/signup.png'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import Backdrop from '@mui/material/Backdrop';

export function SignupScreen() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('')
  const [clicked, isClicked] = useState(false)
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DialogTest = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your account is Created!"}
        </DialogTitle>


      </Dialog>
    )
  }

  const handleEmail = (e) => {
    const value = e.target.value;

    setEmail(value)
    const emailRegex = /^\S+@\S+\.\S+$/;
    
    setIsEmailValid(emailRegex.test(value));
   

  }
  const onSubmit = () => {

    isClicked(true)
    if (name && email && password &&isEmailValid ) {
      try {
        axios.post("/api/account/signup", { email, nickname: name, password })

        DialogTest();
        handleClickOpen();
        setTimeout(() => {
          handleClickOpen();
          navigate('/')
        }, 3000);
      } catch (error) {
        return (
          <h1>ERROR</h1>
        )
      }
    }


  }



  return (
    <>
      <LoginImageContainer>

      </LoginImageContainer>
      <TitleText>Sign up</TitleText>

      <InputContainer type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></InputContainer>
      {!name && clicked && <SmallText>Name should be filled</SmallText>}
      <InputContainer placeholder="E-mail" onChange={handleEmail}></InputContainer>
      {!email && clicked && <SmallText>Email should be filled</SmallText>}
      {!isEmailValid && clicked && <SmallText>Invalid Email format</SmallText>}
      <InputContainer placeholder="password" onChange={(e) => setPassword(e.target.value)}></InputContainer>
      {!password && clicked && <SmallText>Password should be filled</SmallText>}
      <div style={{ height: "20px" }}></div>
      <LoginBtn
        onClick={onSubmit}
        disabled={!name || !email || !password}>Create Account</LoginBtn>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Creating your account..</DialogTitle>
        </Dialog>
      )}
    </>


  )

}

function InputContainer({ icon, placeholder, onChange }) {

  return (
    <LoginInput>
      {icon}
      <input class="searchField" type="text" placeholder={placeholder} onChange={onChange} />

    </LoginInput>
  )

}



export default function MainScreenLayout() {


  return (
    <DefaultLayout Contents={SignupScreen} >
    </DefaultLayout>

  )
}



const SmallText = styled.div`
font-size:10px;
font-weight:600;
margin-left:17%;
`


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color:none;
    }
`;
const TextBtn = styled(StyledLink)`
color:#208AEC;
font-size:12px;
background-color: transparent;
border:none;
`


const LoginBtn = styled.button`
margin:10px 30%;
padding:10px 15px;
width:40%;
height:50px;
border-radius:15px;
color:white;
background-color:#2F80ED ;
font-size:16px;
border:none;

`

const LoginInput = styled.div`

    background-color:white;
    display:flex;
    border: 1px solid lightgrey;
    border-radius:20px;
    width:70%;
    height:30px;
    padding:10px 10px 10px 10px;
    align-items: center;
    margin:10px 15% 5px 15%;

    .searchField{
        border-radius:20px;
        padding-left:10px;
        border: none;
        outline:none;
    }
`
const LoginImageContainer = styled.div`
background-image:url(${signup});
background-size:contain;
background-repeat:no-repeat;
width:80%;
height:300px;
padding-top:5px;
`
const TitleText = styled.p`
font-size:30px;
font-weight:700;
margin-left:15%;
margin-top:0;

`
