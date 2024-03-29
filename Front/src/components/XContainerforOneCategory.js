import React, { useState, useEffect,useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ChallengeContainer from './ChallengeContainer';
import { Link } from 'react-router-dom';




export default function ContainerforOneCategory(props) {

     
  console.log("welcome to  One Category  container for",props.categoryName)
    const [challenges, setChallenges] = useState([])
    const cancelToken = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log("this is props", props)
    const category = props.categoryName

    const fetchData = async () => {
        console.log("inside one category fetch data of",category)
        

    
        try {
            const response = await axios.get(`/api/category/${category}`);
            setChallenges(response.data);
            console.log("in container for one category, response.data",response.data);
            setIsLoading(false);
        } catch (error) {
 
                console.log('Data not found.');
                console.error("Error fetching challenge:", error);
                setIsLoading(false);
            }
        }
    



//fetchData()
useEffect(() => { fetchData() }, [])

return (

    <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-10px" }}>
            <BigText>{category}</BigText>

            <MoreBtn to={`category/${category}`}>More</MoreBtn>
        </div>


        {challenges == null ? (
            <p>Loading...</p>
        ) : (
            <ChallengeHorizontalScrollContainer>
                {
                    challenges.map((item) => {
                        return <ChallengeContainer key={item.id} challenge={item} showStartDate={false} />
                    }
                    )
                }
            </ChallengeHorizontalScrollContainer>
        )}
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
color:#0466c8;
font-size:13px;
background-color: transparent;
border:none;
font-weight:500;
`
const InfoText = styled.p`
font-size:12px;

`