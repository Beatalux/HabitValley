import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ChallengeContainer from '../components/ChallengeContainer.js'
import { Link } from 'react-router-dom';
import axios from 'axios';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import jogging from "../images/jogging.png";
import readaloud from "../images/readaloud.png";

const dummydata = [{
    id: 0,
    title: "Jogging",
    image: jogging,
    type: "community",
    frequency: "daily",
    member: "120",
    startDate: "Thursday",
    price: "Free",
    coach: false
}, {
    category: "language",
    id: 1,
    title: "Read Aloud",
    image: readaloud,
    type: "1:1",
    frequency: "twice a day",
    member: "52",
    startDate: "Monday",
    price: "Paid",
    coach: false
}]

const commentsdummydata = [
    {
        id: 1,
        title: "dummy1",
        image: readaloud,
        comment: "gooddummy"
    },
    {
        id: 2,
        title: "dummy2",
        image: readaloud,
        comment: "baddummy"
    }

]

export default function MyPageScreen() {

    return (
        <>
            <TitleContainer>
                <ArrowBackIosIcon/>
                <BigText>MyPage</BigText>
            </TitleContainer>
            <BigText>Habit You're making💪</BigText>
            {dummydata.map((item) => {
                return <MyPageContainer key={item.id} habit={item} bar={true}></MyPageContainer>

            })}
            <BigText>Habit You Achieved 🥳</BigText>
            {dummydata.map((item) => {
                return <MyPageContainer key={item.id} habit={item}></MyPageContainer>

            })}
            <BigText>Habit You Missed😿</BigText>
            {dummydata.map((item) => {
                return <MyPageContainer key={item.id} habit={item}></MyPageContainer>

            })}
            <BigText>Comments You Received</BigText>
            {commentsdummydata.map((item) => {
                return <CommentsContainer key={item.id} habit={item}></CommentsContainer>

            })}
        </>
    )
}
function CommentsContainer({habit}){
    return(
        <div style={{width:"85%",paddingLeft:"3%", height: "fit-content", borderRadius: "5px", boxShadow: "0 5px 8px 3px #F1F2F6" }}>
        <FlexContainer>
                   <CommentsImage src={habit.image} />
                   <div style={{margin:"0px 10px 10px 2px", height:"60px"}}>
                   <ChallengeNameText style={{fontWeight:"800", fontSize:"16px",marginBottom:"8px"}}>{habit.title}</ChallengeNameText>
                   <ChallengeNameText>{habit.comment}</ChallengeNameText>
                   
                   </div>

        </FlexContainer>
        <div style={{width:"100%", height:"3px",backgroundColor:"#F0F0F0"}}/>
        </div>
    )

}

const CommentsImage=styled.img`
border-radius: 4px;
width:60px;
height:60px;
`
const TitleContainer=styled.div`
display:flex;
align-items:center;
margin-left:10px;


`

function ChallengeInformationContainer({ title, image }) {
    return (
        <div style={{ borderRadius: "15px", height: "130px", width: "20%" }}>
            <ChallengeImage src={image} />
            <ChallengeNameText>
                {title}
            </ChallengeNameText>
        </div>

    )


}
function MyPageContainer({ habit, bar = false }) {

    return (
        <div style={{ width: "85%", paddingLeft:"5%", marginBottom:"10px",height: "fit-content", borderRadius: "5px", boxShadow: "0 5px 8px 3px #F1F2F6" }}>
            <FlexContainer>
                <ChallengeInformationContainer title={habit.title} image={habit.image}></ChallengeInformationContainer>
                <div style={{ width: "20px" }} />
                {bar ?
                    <ProgressBar doneCnt={10} maxCnt={14} /> :
                    <ProgressCircle percentage={95} />

                }

            </FlexContainer>
        </div>
    )
}
function ProgressCircle({ percentage }) {
    return (
        <Circle size="80px" strokecolor="#F0F0F0">
            <Circle size="75px" strokecolor="white" coloredlength={percentage}>


            </Circle>



        </Circle>


    )


}

const Circle = styled.div`
height:${props => props.size};
width:${props => props.size};
background-color:${props => props.strokecolor};
border-radius: 50%;
stroke-dashoffset:${props => props.coloredlength};

`


function ProgressBar({ doneCnt, maxCnt }) {
    const percentage = doneCnt / maxCnt * 100;
    console.log("percentage", percentage)

    return (
        <div>
            <InProgressHabitText>Keep Going!</InProgressHabitText>

            <BaseBar>
                <ColoredBar barlength={percentage}></ColoredBar>

            </BaseBar>

            <SmallInfoText style={{ float: 'right' }}>{doneCnt}/{maxCnt}</SmallInfoText>
        </div>


    )
}

const BaseBar = styled.div`
    width:195px;
    height:30px;
    border-radius:20px;
    background-color:#F0F0F0;

`

const ColoredBar = styled.div`
    height:90%;
    width:${props => props.barlength}%;
    border-radius:20px;
    background-color:#2D9CDB;
    transition:width 3s ease-in-out;
`


const ChallengeImage = styled.img`
width:100%;
height:60%;

`

const FlexContainer = styled.div`
display:flex;


`

const ChallengeNameText = styled.div`
font-size:14px;
font-weight:400;
font-family: 'Quicksand', sans-serif;
`


const InProgressHabitText = styled.p`
font-size:12px;
font-weight:400;
margin:10px;
font-family: 'Quicksand', sans-serif;
`

const SmallInfoText = styled.div`
font-size:12px;
font-weight:400;
margin:10px;
font-family: 'Quicksand', sans-serif;
`


const BigText = styled.div`
font-size:24px;
font-weight:700;
margin:10px;
font-family: 'Quicksand', sans-serif;

`

