import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import api from '../api'


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
            {nickname ? <p>{nickname}</p> :
                <div style={{ marginLeft: "auto" }}>
                    <Button>SignUp</Button>
                    <Button blueBG>Login</Button>
                </div>
            }
        </HeaderWrapper>


    )

}
const HeaderWrapper = styled.div`
display:flex;
padding:8px 3px;

`
const Button = styled.button`

background:${props => props.blueBG ? 'transparent' : '#208AEC'};
color:${props => props.blueBG ? 'black' : 'white'};
border:1px solid #208AEC;

font-size:1em;
border-radius:10px;
padding:0.25em,0.5em;
margin-left:10px;

`;