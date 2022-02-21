import React from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';

import {ChallengeDescriptionMainContainer} from '../components/ChallengeContainer.js'
import {languageChallenges, recommendedChallenges} from '../components/Challenges';
import {DescriptionArray} from '../components/Description'
import {ChallengeHorizontalScrollContainer} from './MainScreen'
import {Reviews} from '../components/Review'
import ChallengeContainer from '../components/ChallengeContainer'

import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';



const challengeElement=languageChallenges.find(function(challenge,index){

    if(challenge.title=="10 words a day")
        return true;
})

console.log(challengeElement)


export default function ChallengeDescriptionScreen() {

    return(
        <>
        <ChallengeDescriptionMainContainer {...challengeElement}></ChallengeDescriptionMainContainer>
        <DescriptionsContainer></DescriptionsContainer>
        <h2>Review</h2>
        <ReviewContainer></ReviewContainer>
        <h2>You can also try...</h2>
        <ChallengeHorizontalScrollContainer>
        {
            recommendedChallenges.map((recommendedChallenge) => {
            return <ChallengeContainer key={recommendedChallenge.title} {...recommendedChallenge} />
            }
        )                
        }



        </ChallengeHorizontalScrollContainer>

        </>
    )

};

function ReviewContainer(){
    return(
        <>
        {Reviews.map((review)=>{
            return (
                <>
                <FlexContainer>
                < PeopleIcon sx={{ fontSize: 20 }}/>
                <ListText>{review.name}</ListText>
                </FlexContainer>
                <DetailText>{review.content}</DetailText>
                </>
            )
    
        })}        
        </>
    )

}

function DescriptionsContainer(){
return(
    <>
    {DescriptionArray.map((description)=>{
        return (
            <>
            <FlexContainer>
            <HelpIcon color="primary" sx={{ fontSize: 20 }}/>
            <ListText>{description.title}</ListText>
            </FlexContainer>
            
            <DetailText>{description.content} {description.link?<a href={description.link.address}>{description.link.text}</a>:null}</DetailText>
            </>
        )

    })}        
    </>
)

}

const FlexContainer = styled.div`
display:flex;
align-items:center;
padding-left:5px;
`
const ListText=styled.p`
font-size:14px;
padding-left:5px;
`

const DetailText=styled.div`
font-size:12px;
padding-left:10px;
margin-top:-3px;

`