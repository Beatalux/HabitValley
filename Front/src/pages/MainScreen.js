import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';
import ChallengeContainer from '../components/ChallengeContainer';
import ContainerforOneCategory from '../components/ContainerforOneCategory'
import SearchBar from '../components/SearchBar'
import CategoryOptionsContainer from '../components/CategoryOptionsContainer'
import mainimage from "../images/main.jpg";


function MainScreen() {

    return (

        <Wrapper>
            <TitleText>Your Next Habits</TitleText>
            <CategoryContainer>
                <BigText>Category</BigText>
                <CategoryOptionsContainer></CategoryOptionsContainer>
            </CategoryContainer>
            <ContainerforOneCategory categoryName="Language" />
            <ContainerforOneCategory categoryName={`Health&Wellness`} />
        </Wrapper>

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



const CategoryContainer = styled.div`

margin-top:-15px;

`
const BigText = styled.div`
font-size:24px;
font-family: 'Quicksand', sans-serif;
margin-bottom:20px;
@media (min-width: 1000px) {
text-align:center;
}
`
const TitleText = styled.div`
font-size:30px;
font-weight:400;
margin-bottom:20px;
font-family: 'Quicksand', sans-serif;
@media (min-width: 1000px) {
text-align:center;
}
`

const MainImageContainer = styled.div`

background-image:url(${mainimage});
background-size:100% 100%;
background-repeat: no-repeat;
width:100%;
height:300px;
display:flex;
justify-content:center;
padding-top:1rem;
`
const Wrapper = styled.div`
padding-bottom:20px;


`



