import React, { useState, useEffect } from 'react'
import {  useParams } from "react-router-dom";
import styled from 'styled-components';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Link } from 'react-router-dom';
import SignupDialog from '../components/FriendsInvitationModal';
import { DescriptionArray as description } from '../components/Description.js'
import { Reviews } from '../components/Review.js'
import axios from 'axios';
import DefaultLayout from '../templates/DefaultLayout.js';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';



export function ChallengeInformationScreen() {
    let params = useParams()
    const cID = params.cID
    console.log("cID", cID)

    const [challenge, setChallenge] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchData = async () => {
        console.log("in fetch data")
        try {
            const response = await axios.get(`/api/challenge/${cID}`)
            console.log("response ON ChallengeInfoScreen", response)

            setChallenge(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching challenge:", error);
            setIsLoading(false);
        }
    }


    useEffect(() => { fetchData() }, [])

    console.log("after useeffect")

    return (
        <div>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ChallengeDescriptionMainContainer {...challenge} />
            )}

            <h2>Review</h2>
            <ReviewContainer></ReviewContainer>

        </div>
    )

};



export default function MainScreenLayout() {


    return (
        <DefaultLayout Contents={ChallengeInformationScreen} >

        </DefaultLayout>

    )
}

function ReviewContainer(props) {
    return (
        <>
            {Reviews.map((review) => {
                return (
                    <>
                        <FlexContainer>
                            < PeopleIcon sx={{ fontSize: 20 }} />
                            <ListText> {review.name}?</ListText>
                        </FlexContainer>
                        <DetailText>{review.content}</DetailText>
                    </>
                )

            })}
        </>
    )

}


function ChallengeDescriptionMainContainer(props) {
    console.log("inside description main Container", props)
    return (

        <div>

            <div style={{ position: "relative" }}>
                <DescriptionImage src={props.image} />
                {props.coach !== 0 &&
                    <CoachTag>With Coach</CoachTag>
                }
            </div>
            <FlexContainer style={{ justifyContent: "space-between", marginTop: "-15px", padding: "0px 10px" }}>
                <DescriptionTitleText>{props.title}</DescriptionTitleText>
                <SignupDialog></SignupDialog>

            </FlexContainer>
            <FlexContainer>

                {props.price !== 0 &&
                    <ChallengeFeatureInfoBox>
                        deposit
                    </ChallengeFeatureInfoBox>
                }
                {props.community !== 0 &&
                    <ChallengeFeatureInfoBox>
                        community
                    </ChallengeFeatureInfoBox>
                }

            </FlexContainer>
            <FlexContainer>
                <PeopleIcon sx={{ fontSize: 15 }} />
                <div style={{ width: "10px" }} />
                <SmallText>{props.member} joined</SmallText>
            </FlexContainer>
            <FlexContainer style={{ marginTop: "-10px" }}>
                <AccessAlarmIcon sx={{ fontSize: 15 }} />
                <div style={{ width: "10px" }} />

                <FormattedDate date={props.startDate}></FormattedDate>
            </FlexContainer>

            <>
                <DescriptionQuestionContaier num={0} />
                <DetailText>{description[0].contentB} {props.title}! {description[0].contentA} </DetailText>
                <DescriptionQuestionContaier num={1}/>
                <DetailText>{description[1].content[props.category-1]}</DetailText>
                <DescriptionQuestionContaier num={2} />
                <DetailText>{description[2].content} <a href={description[2].link.address}>{description[2].link.text}</a> </DetailText>
            </>

        </div>
    )
}

const DescriptionQuestionContaier = (props) => {
    return (

        <FlexContainer>
            <HelpIcon color="primary" sx={{ fontSize: 20 }} />
            <ListText>{description[props.num].title}</ListText>
        </FlexContainer>
    )

}
const StyledLink = styled(Link)`

    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    color:#1d3461;
    }
`;


const FormattedDate = (props) => {
    console.log("props.date", props.date)
    let num = props.date.indexOf("2023")
    const formatted = props.date.slice(4, num)
    return <SmallText>Start day: {formatted}</SmallText>;
};

const FlexContainer = styled.div`
display:flex;
align-items:center;
padding-left:5px;
`
const ListText = styled.p`
font-size:14px;
padding-left:5px;
font-weight: 600;

font-family: 'Quicksand', sans-serif;
`

const DetailText = styled.div`
font-size:12px;
padding-left:10px;
margin-top:-3px;

font-family: 'Quicksand', sans-serif;

`

const DescriptionImage = styled.img`
width:100%;
height:150px;
`
const DescriptionTitleText = styled.p`
font-size:24px;
font-weight:800;
font-family: 'Quicksand', sans-serif;

`
const StartBtn = styled.button`
    color:white;
border-radius:15px;
background: #0466c8;
border:none;
padding:8px 13px;
font-size:12px;
`
const CoachTag = styled.div`
padding:2px 5px;
border-radius:5px;
position:absolute;
top:10%;
right:5%;
border:1px solid #208AEC;
color:#208AEC;
font-size:10px;
font-weight:300;
background-color:white;
`


const SmallText = styled.p`
font-size:10px;
font-weight:600;

font-family: 'Quicksand', sans-serif;

`

const ChallengeTitleText = styled.p`
font-size:14px;
font-weight:600;
padding-left:3px;

`

const ChallengeFeatureInfoBox = styled.div`
width:fit-content;
padding:5px 10px;
margin:-13px 10px 0px 0;
border-radius:15px;
font-size:12px;
font-weight:600;
background-color:#bbdefb;

font-family: 'Quicksand', sans-serif;
`

const ChallengeImage = styled.img`
width:150px;
height:107px;
margin-bottom:-10px;

`