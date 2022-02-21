import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DefaultLayout from './templates/DefaultLayout.js';
import ChallengeContainer from './components/ChallengeContainer.js'
import { healthnWellnessChallenges } from './components/Challenges';
import { Link } from 'react-router-dom';
import axios from 'axios';

import mainimage from "./images/mainimage.jpg";

import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';



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
                <ContainerforOneCategory categoryName="Health&amp;Wellness" />
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


function ContainerforOneCategory(props) {
    const [languageChallenges, setLanguageChallenges] = useState([])

    const fetchData = async () => {
        const response = await axios.get("/api/challenge")
        setLanguageChallenges(response.data)
    }
    useEffect(() => { fetchData() }, [])
    let mainCategory = [];

    if (props.categoryName == "Language") {
        mainCategory = languageChallenges;
    } else {
        mainCategory = healthnWellnessChallenges;
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-25px" }}>
                <BigText>{props.categoryName}</BigText>
                <MoreBtn to={props.categoryName}>More</MoreBtn>
            </div>
            <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas enim neque tempus, aliquam. Aliquam i.</InfoText>
            <ChallengeHorizontalScrollContainer>
                {
                    mainCategory.map((item) => {
                        return <ChallengeContainer key={item.id} challenge={item} showStartDate={false} />
                    }
                    )
                }
            </ChallengeHorizontalScrollContainer>
        </div>

    )

}

export const ChallengeHorizontalScrollContainer = styled.div`
display: flex;
overflow-x: scroll;
width: 100%;
gap: 12px;
`


function SearchBar() {

    return (
        <Search>
            <SearchIcon fontSize="medium" />
            <input class="searchField" type="text" placeholder="what is your next habit?">

            </input>
        </Search>
    )
}

function CategoryOptionsContainer() {
    return (

        <div>
            <FlexContainer>
                <CategoryBtn>Health&amp;Wellness</CategoryBtn>
                <CategoryBtn>Programming</CategoryBtn>
                <CategoryBtn>Marketing</CategoryBtn>
            </FlexContainer>
            <FlexContainer style={{ marginLeft: "-10px" }}>
                <CategoryBtn>Start Your Own Business</CategoryBtn>
                <CategoryBtn>Language</CategoryBtn>
                <CategoryBtn>Design</CategoryBtn>
            </FlexContainer>
            <FlexContainer>
                <CategoryBtn>Stock Market</CategoryBtn>
                <CategoryBtn>Career Change</CategoryBtn>
                <CategoryBtn>Customize</CategoryBtn>
            </FlexContainer>

        </div>
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


const CategoryBtn = styled.button`
margin-right:15px;
margin-bottom:10px;
background-color: transparent;
color:#208AEC;
border:1px solid #208AEC;
font-size:12px;
border-radius:16px;
padding:8px 8px;

`


const CategoryContainer = styled.div`
height:186px;
margin-top:-15px;


`
const BigText = styled.p`
font-size:24px;
`

const InfoText = styled.p`
font-size:12px;

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

//Q.why margin doesn't work?
const Search = styled.div`

    background-color:white;
    display:flex;
    border-radius:20px;
    width:85%;
    height:30px;
    padding:10px 10px 10px 10px;
    align-items: center;

    .searchField{
        border-radius:20px;
        padding-left:10px;
        border: 0;
    }
`

const TitleText = styled.p`
font-size:30px;

`

const Wrapper = styled.div`
padding-bottom:20px;
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const MoreBtn = styled(StyledLink)`
    
color:#208AEC;
font-size:12px;
background-color: transparent;
border:none;
`
