import React, { useState } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signup from '../images/signup.png'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { DialogContent } from '@mui/material';


export function LoginScreen() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [clicked, isClicked] = useState(false)

  const [redirectNow, setRedirectNow] = useState(false);
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


  const onSubmit = async () => {

    console.log("in on submit")
    isClicked(true)
    if (email && password) {
      try {

        const response = await axios.post("/api/account/login", { email, password })
        console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token)
        DialogTest();
        handleClickOpen();
        setTimeout(() => {
          handleClickOpen();
          navigate('/')
        }, 1000);
      } catch (error) {
        return (
          <h1>ERROR</h1>
        )
      }
    }
  }



  return (
    <>
      <LoginImageContainer />
      <TitleText>Login</TitleText>
      <InputContainer placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></InputContainer>
      {!email && clicked && <SmallText>Email should be filled</SmallText>}
      <InputContainer placeholder="password" onChange={(e) => setPassword(e.target.value)}></InputContainer>
      {!password && clicked && <SmallText>Password should be filled</SmallText>}
      <div style={{ height: "20px" }}></div>
      <LoginBtn
        onClick={onSubmit}
        disabled={!email || !password}>Create Account</LoginBtn>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Logging you in..."}
          </DialogTitle>

          <DialogContent>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress></CircularProgress>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

function InputContainer(props) {

  return (
    <LoginInput>
      <input class="searchField" type="text" placeholder={props.placeholder} onChange={props.onChange} />

    </LoginInput>
  )

}

export default function MainScreenLayout() {

  return (
    <DefaultLayout Contents={LoginScreen} />


  )
}



const SmallText = styled.p`
font-size:20px;
font-weight:600;
width:60%;
margin:30px 20% 0px 20%;


font-family: 'Quicksand', sans-serif;
margin-left:15%;
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
