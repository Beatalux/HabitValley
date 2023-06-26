import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import api from '../api';

import logo from '../images/logo.png';
import { Link } from 'react-router-dom';



export default function Header() {
    const [nickname, setNickname] = useState('')

    const access_token = localStorage.getItem('access_token')
    const getUserInfo = async () => {
        if (access_token) {
            const response = await api.getUserInfo()
            setNickname(response.nickname)

        }
    }
    useEffect(() => {
        getUserInfo()

    }, [])
    return (

        <HeaderWrapper>
            <LogoContainer to='/'></LogoContainer>

            {nickname ? 
            <div>Hi, {nickname} 
               <div style={{ marginLeft: "auto" }}>
                    <Button>SignUp</Button>
                    <Button blueBG>Login</Button>
                </div>
                </div>:
                <div style={{ marginLeft: "auto" }}>
                    <Button to='/signup'>SignUp</Button>
                    <Button blueBG to='/login'>Login</Button>
                </div>
            }
        </HeaderWrapper>


    )

}


const StyledLink =styled(Link)`

    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;

    }
`;

const LogoContainer = styled(StyledLink)`
background-image:url(${logo});
background-size:contain;
background-repeat:no-repeat;
width:40%;
height:80px;
border-radius: 20px;
`

const HeaderWrapper = styled.div`
display:flex;
align-items: center;
padding:8px 0;
max-width: 600px;

`
const Button =  styled(StyledLink)`

background:${props => props.blueBG ? 'transparent' : '#0466c8'};
color:${props => props.blueBG ? 'black' : 'white'};
border:1px solid #208AEC;

font-size:1em;
border-radius:10px;
padding:3px 10px;
margin-left:5px;
margin-right:5px;


font-family: 'Quicksand', sans-serif;

`;