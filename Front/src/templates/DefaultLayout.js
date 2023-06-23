import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
export default function DefaultLayout({ImageContents,Contents}){

    return(
        <Wrapper>
            <Header></Header>
            {ImageContents&&
            <ImageWrapper><ImageContents/></ImageWrapper>
            }

            <ContentsWrapper><Contents/></ContentsWrapper>

        </Wrapper>

    )
}

const ImageWrapper=styled.div`


`

const Wrapper=styled.div`
width:95%;
@media (min-width:750px){
    width:65%;
}

`
//이것도 %로?
const ContentsWrapper=styled.div`

margin:0px 15px;
max-width:600px;


`