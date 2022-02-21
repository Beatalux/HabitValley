import React,{useState} from 'react'
import styled from 'styled-components';
import ChallengeContainer from '../components/ChallengeContainer.js'
import DefaultLayout from '../templates/DefaultLayout.js';
import {languageChallenges} from '../components/Challenges';


import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpIcon from '@mui/icons-material/Help';

function LanguageScreen(){

    const [isFilteredShown,setIsFilteredShown]=useState(false);
    const [filteredBtn,setFilteredBtn]=useState(false);

    return(
        <div>
            <CategoryTitleContainer>
                <FlexContainer>
                <ArrowBackIosIcon/>
                <BigText>Language</BigText>
                </FlexContainer>
                <HelpIcon color="primary" />
            </CategoryTitleContainer>
            {console.log(filteredBtn)}
            <FilterBtn onClick={()=>setIsFilteredShown(!isFilteredShown)} isFiltered={filteredBtn} >
                {filteredBtn? <FilterAltIcon sx={{ fontSize: 15 }} color="primary"/> :
                <FilterAltIcon sx={{ fontSize: 15 }} />}

                Filter
            </FilterBtn>
            {(isFilteredShown)&&
            <FilterContainer>
                <div>
                <input type="checkbox" value="1:1" name="member"/>Free Challenge
                <FlexContainer>   
                    <input type="checkbox" value="1:1" name="member"/>1:1
                    <input type="checkbox" value="community" name="member"/>Community
                </FlexContainer>
                </div>
                <ApplyFilterBtn onClick={()=>{
                    setIsFilteredShown(false);
                    setFilteredBtn(true);
                
                }}>Apply Filter</ApplyFilterBtn>
            </FilterContainer>
            }
            <ChallengesContainer>
            {
            languageChallenges.map((languageChallenge)=>{
                return <ChallengeContainer key={languageChallenge.id} challenge={languageChallenge}/>} 
            )
            }
            </ChallengesContainer>
        </div>

    )
}


export default function LanguageScreenLayout(){
    return(
        <DefaultLayout Contents={LanguageScreen}>


        </DefaultLayout>

    )
}
const ApplyFilterBtn=styled.button`
border:1px solid #208AEC;

border-radius:3px;
color:white;
background:#208AEC;

`

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
margin-left:5px;
margin-right:8px;
margin-bottom:5px;
font-size:14px;


`

const BigText=styled.p`
font-size:24px;
`

const FlexContainer=styled.div`
display:flex;
align-items:center;
`

const ChallengesContainer=styled(FlexContainer)`
display:flex;
flex-wrap: wrap;
width:400px;
align-content: space-between;
margin-left:10px;
gap:20px;
`

const CategoryTitleContainer=styled(FlexContainer)`
justify-content:space-between;

`

const FilterBtn=styled.button`
color:${props =>props.isFiltered?'blue':'black'};
width:fit-content;
padding:5px 10px;
margin:-13px 10px 10px 10px;
border-radius:5px;
border:none;
font-size:12px;
font-weight:600;
background-color:#F1F2F6;
display:flex;
align-items:center;
`
