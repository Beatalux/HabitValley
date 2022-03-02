import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';
import ChallengeContainer from '../components/ChallengeContainer';
import ContainerforOneCategory from '../components/ContainerforOneCategory'
import SearchBar from '../components/SearchBar'
import CategoryOptionsContainer from '../components/CategoryOptionsContainer'

import { healthnWellnessChallenges } from '../components/Challenges';
import { Link } from 'react-router-dom';
import axios from 'axios';

import mainimage from "../images/mainimage.jpg";


function MainScreen() {

    return (
        <>
            <Wrapper>
                <TitleText>Your Next Habits</TitleText>
                <CategoryContainer>
                    <BigText>Category</BigText>
                    <CategoryOptionsContainer></CategoryOptionsContainer>
                </CategoryContainer>
                <ContainerforOneCategory categoryName="Language" />
                <ContainerforOneCategory categoryName={`Health&Wellness`} />
            </Wrapper>
        </>
    )

}

function MainImageLayout() {
    return (
        <MainImageContainer>
            <SearchBar></SearchBar>
        </MainImageContainer>
    )


}



export default function MainScreenLayout() {
    return (
        <DefaultLayout Contents={MainScreen} ImageContents={MainImageLayout}>


        </DefaultLayout>

    )
}

const FlexContainer = styled.div`
display:flex;
align-items:center;

`





const CategoryContainer = styled.div`
height:186px;
margin-top:-15px;


`
const BigText = styled.p`
font-size:24px;
`


const MainImageContainer = styled.div`

background-image:url(${mainimage});
background-size:cover;
width:100%;
height:176px;
display:flex;
justify-content:center;
padding-top:5px;
`

const TitleText = styled.p`
font-size:30px;
font-weight:400;
margin:10px;
font-family: 'Quicksand', sans-serif;

`

const Wrapper = styled.div`
padding-bottom:20px;
`


