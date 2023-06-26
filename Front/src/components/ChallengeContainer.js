import React from 'react'
import styled from 'styled-components';
import PeopleIcon from '@mui/icons-material/People';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Link } from 'react-router-dom';


export default function ChallengeContainer({ challenge, showStartDate = true }) {
    console.log("challenge container ", challenge)
    return (

        <StyledLink to={`../challenge/${challenge.id}`} >
            <div style={{ flexShrink: "0", height: "fit-content", borderRadius: "5px", boxShadow: "2px 5px 8px 3px #F1F2F6" }}>
                <div style={{ position: "relative" }}>
                    <ChallengeImage src={challenge.image} />
                    {challenge.coach !== 0 &&
                        <CoachTag>With Coach</CoachTag>
                    }
                </div>
                <ChallengeTitleText>{challenge.title}</ChallengeTitleText>
                <FlexContainer>
                    {challenge.price !== 0 &&
                        <ChallengeFeatureInfoBox>
                            deposit
                        </ChallengeFeatureInfoBox>
                    }
                    {challenge.community !== 0 &&
                        <ChallengeFeatureInfoBox>
                            community
                        </ChallengeFeatureInfoBox>
                    }
                </FlexContainer>

                <FlexContainer>
                    <PeopleIcon className="people-icon" sx={{ fontSize: 15 }} />

                    <SmallText>{challenge.member}</SmallText>
                </FlexContainer>

                {showStartDate ?
                    <FlexContainer style={{ marginTop: "-5px" }}>
                        <AccessAlarmIcon sx={{ fontSize: 15 }} />
                        <div style={{ width: "10px" }} />

                        <FormattedDate date={challenge.startDate}></FormattedDate>

                    </FlexContainer> : null
                }

            </div>
        </StyledLink>
    )
}


const FormattedDate = (props) => {
    console.log("props.date", props.date)
    let num = props.date.indexOf("2023")
    const formatted = props.date.slice(4, num)
    return <SmallText>Start day: {formatted}</SmallText>;
};

const StyledLink = styled(Link)`
    color:#1d3461;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    color:#1d3461;
    }
`;


const ChallengeTitleText = styled.p`
font-size:14px;
font-weight:600;
padding-left:3px;

`

const ChallengeFeatureInfoBox = styled.div`
width:fit-content;
padding:5px 10px;
margin:-10px 10px -3px 0;
border-radius:15px;
font-size:10px;
font-weight:600;
background-color:#bbdefb;
`

const ChallengeImage = styled.img`
width:150px;
height:107px;
margin-bottom:-10px;

@media (min-width: 700px) {
    width:160px;
}

`


const FlexContainer = styled.div`
height:20px;
display:flex;
align-items:center;
padding-left:5px;
& > .people-icon{margin-right:10px};

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




