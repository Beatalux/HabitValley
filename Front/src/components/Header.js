import React from 'react'
import styled from 'styled-components';

export default function Header() {
    return (

        <HeaderWrapper>


            <div style={{ marginLeft: "auto" }}>
                <Button>SignUp</Button>

                <Button blueBG>Logout</Button>
            </div>
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