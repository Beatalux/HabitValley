import React, { useState } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import womanprofile from "../images/womanprofile.jpg";
import manprofile from "../images/manprofile.jpg";
import proofphoto1 from "../images/proofphoto1.jpg";
import proofphoto2 from "../images/proofphoto2.jpg";
import proofphoto3 from "../images/proofphoto3.jpg";
import proofphoto4 from "../images/jogging.png";


export default function ProofPhotoScreen() {
  const photoArray = [proofphoto1, proofphoto2, proofphoto3]
  return (

    <div>
      <BigText>10 Words A Day</BigText>
      <TitleText>Submit Today's Photo</TitleText>
      <FlexContainer>
        <ProfileContainer>
       
          <ProfileImg></ProfileImg>
          <NameText>Seo</NameText>

        </ProfileContainer>
        <ProofPhotoContainer>
          <FlexContainer>
            <UploadPhoto></UploadPhoto>
            <SubmitBtn>submit</SubmitBtn>
          </FlexContainer>
          <Divider />
          <SubmittedPhotoHorizontalScrollContainer>
            {
              photoArray.map((item) => {
                return <SubmittedPhotoContainer key={item.id} img={item} />
              }
              )
            }
          </SubmittedPhotoHorizontalScrollContainer>

        </ProofPhotoContainer>
      </FlexContainer>
      <TitleText>See People Building A Habit With You</TitleText>

      <FlexContainer></FlexContainer>
    </div>
  )
}
const ProfileContainer=styled.div`
width:15%;
text-align: center;
`


const ProofPhotoContainer = styled.div`
width:75%;
`
const ProfileImg = styled.div.attrs(props => ({

}))`
background-image:url(${womanprofile});
background-size: cover;
background-repeat:no-repeat;
width:100%;
height:0px;
padding-top:100%;
border-radius:50%;
margin:auto;

`

const SubmittedPhotoHorizontalScrollContainer = styled.div`
display: flex;
overflow-x: scroll;
width: 100%;
gap: 12px;
`


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const SubmittedPhotoContainer = styled.div.attrs(props => ({
  backgroundImage: props.img,

}))`

background-size:contain;
background-repeat:no-repeat;
width:3rem;
height:3rem;
margin-right:8px;
`

const UploadPhoto = styled.div`

`

const Divider = styled.div`
width:100%;
height:2px;
background-color:#C4C4C4;
margin:10px 0;
`

const SubmitBtn = styled.button`

border-radius:15px;
color:white;
background-color:#2F80ED ;
font-size:16px;
border:none;
`
const TitleText = styled.div`
font-size:14px;
font-weight:400;
font-family: 'Quicksand', sans-serif;
`
const NameText = styled.div`
font-size:14px;
font-weight:600;
font-family: 'Quicksand', sans-serif;

`
const FlexContainer = styled.div`
display:flex;
align-items: center;
margin:5% 5% 5% 5%;
`

const BigText = styled.p`
font-size:24px;
font-family: 'Quicksand', sans-serif;
`
