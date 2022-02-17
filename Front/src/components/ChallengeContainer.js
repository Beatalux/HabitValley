import React from 'react'
import styled from 'styled-components';
import PeopleIcon from '@mui/icons-material/People';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Link } from 'react-router-dom';


export default function ChallengeContainer(props) {
    return (
        <div style={{ flexShrink: "0", width: "145px", height: "fit-content", borderRadius: "5px", boxShadow: "0 5px 8px 3px #F1F2F6" }}>
            <div style={{ position: "relative" }}>
                <ChallengeImage src={props.image} />
                {props.coach &&
                    <CoachTag>With Coach</CoachTag>
                }
            </div>
            <ChallengeTitleText>{props.title}</ChallengeTitleText>
            <FlexContainer>
                <ChallengeFeatureInfoBox>
                    {props.type}
                </ChallengeFeatureInfoBox>
                <ChallengeFeatureInfoBox>
                    {props.frequency}
                </ChallengeFeatureInfoBox>
            </FlexContainer>

            <FlexContainer>
                <PeopleIcon sx={{ fontSize: 15 }} />
                <div style={{ width: "10px" }} />
                <SmallText>{props.member}</SmallText>
            </FlexContainer>


            <FlexContainer style={{ marginTop: "-10px" }}>
                <AccessAlarmIcon sx={{ fontSize: 15 }} />
                <div style={{ width: "10px" }} />
                <SmallText>Starts {props.startDate}</SmallText>
            </FlexContainer>

        </div>
    )
}

export function ChallengeDescriptionMainContainer(props) {

    return (

        <div>

            <div style={{ position: "relative" }}>
                <DescriptionImage src={props.image} />
                {props.coach &&
                    <CoachTag>With Coach</CoachTag>
                }
            </div>
            <FlexContainer style={{justifyContent:"space-between",paddingRight:"20px"}}>
                <DescriptionTitleText>{props.title}</DescriptionTitleText>
                <StartBtn to={`${props.category}${props.id}apply`}>START</StartBtn>
            </FlexContainer>
            <FlexContainer>
                <ChallengeFeatureInfoBox>
                    {props.type}
                </ChallengeFeatureInfoBox>
                <ChallengeFeatureInfoBox>
                    {props.frequency}
                </ChallengeFeatureInfoBox>
            </FlexContainer>
            <FlexContainer>
                <PeopleIcon sx={{ fontSize: 15 }} />
                <div style={{ width: "10px" }} />
                <SmallText>{props.member} joined</SmallText>
            </FlexContainer>
            <FlexContainer style={{ marginTop: "-10px" }}>
                <AccessAlarmIcon sx={{ fontSize: 15 }} />
                <div style={{ width: "10px" }} />
                <SmallText>Starts {props.startDate}</SmallText>
            </FlexContainer>

        </div>



    )
}


const ChallengeTitleText = styled.p`
font-size:14px;
font-weight:600;
padding-left:3px;

`
const DescriptionTitleText = styled.p`
font-size:24px;
font-weight:600;
margin:10px;

`
const ChallengeFeatureInfoBox = styled.div`
width:fit-content;
padding:5px 10px;
margin:-7px 10px -3px 0;
border-radius:15px;
font-size:10px;
font-weight:600;
background-color:lightgrey;
`

const ChallengeImage = styled.img`
width:145px;
height:107px;
margin-bottom:-10px;

`


const DescriptionImage = styled(ChallengeImage)`
width:100%;
height:150px;

`
const FlexContainer = styled.div`
display:flex;
align-items:center;
padding-left:5px;

`

const SmallText = styled.p`
font-size:10px;
font-weight:600;

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

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const StartBtn = styled(StyledLink)`
    
border-radius:10px;
background:#208AEC;
color:white;
border:none;
padding:5px 15px;
font-size:12px;
`

