import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';
import ChallengeContainer from '../components/ChallengeContainer';
import ContainerforOneCategory from '../components/XContainerforOneCategory.js'
import LiveSearchFilter from '../components/SearchBar'
import CategoryOptionsContainer from '../components/CategoryOptionsContainer'
import mainimage from "../images/mainimg2.jpg";

function MainScreen() {

    
  console.log("welcome to MainScreen")

    return (

        <Wrapper>

            <CategoryContainer>
                <BigText>Category</BigText>
                <CategoryOptionsContainer/>
            </CategoryContainer>
            <ContainerforOneCategory categoryName="Well-being"/>
            <ContainerforOneCategory categoryName="Language"/>
        </Wrapper>

    )

}

function MainImageLayout() {
    return (
        <div style={{position:"relative", contain:"content"}}>
            <LiveSearchFilter/>
            <MainImageContainer/>
        </div>

    )


}



export default function MainScreenLayout() {
    return (
        <DefaultLayout Contents={MainScreen} ImageContents={MainImageLayout}>


        </DefaultLayout>

    )
}



const CategoryContainer = styled.div`
margin-top:15px;
`
const BigText = styled.div`
font-size:28px;
font-family: 'Quicksand', sans-serif;
margin-bottom:20px;
font-weight:700;
@media (min-width: 1000px) {
text-align:center;
}
`
const TitleText = styled.div`
font-size:30px;
font-weight:900;
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
margin-top:4rem;
`
const Wrapper = styled.div`
padding-bottom:20px;


`



