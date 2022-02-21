import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
export default function DefaultLayout({ImageContents,Contents}){

    return(
        <Wrapper>
            <Header></Header>
            {ImageContents?
            <ImageWrapper><ImageContents/></ImageWrapper>
            :null}

            <ContentsWrapper><Contents/></ContentsWrapper>

        </Wrapper>

    )
}

const ImageWrapper=styled.div`


`

const Wrapper=styled.div`


`
//이것도 %로?
const ContentsWrapper=styled.div`

margin:0px 15px;


`