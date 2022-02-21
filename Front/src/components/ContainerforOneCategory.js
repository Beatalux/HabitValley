import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ChallengeContainer from './ChallengeContainer';
import { Link } from 'react-router-dom';
import { healthnWellnessChallenges } from '../components/Challenges';




export default function ContainerforOneCategory(props) {
  const [challenges, setChallenges] = useState([])

  const fetchData = async () => {
      const category=props.categoryName.replace('&','zzz')
      const response = await axios.get(`/api/challenge?category=${category}`)
      setChallenges(response.data)
  }
  useEffect(() => { fetchData() }, [])




  return (
      <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-25px" }}>
              <BigText>{props.categoryName}</BigText>
              <MoreBtn to={props.categoryName}>More</MoreBtn>
          </div>
          <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas enim neque tempus, aliquam. Aliquam i.</InfoText>
          <ChallengeHorizontalScrollContainer>
              {
                  challenges.map((item) => {
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
const BigText = styled.p`
font-size:24px;
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



const InfoText = styled.p`
font-size:12px;

`