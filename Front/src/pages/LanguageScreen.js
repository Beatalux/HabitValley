import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from "react-router-dom";
import styled from 'styled-components';
import ChallengeContainer from '../components/ChallengeContainer.js'
import DefaultLayout from '../templates/DefaultLayout.js';
import axios from 'axios';


import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpIcon from '@mui/icons-material/Help';

function LanguageScreen() {

    let params = useParams()
    const category = params.cName
    console.log("category", category)
    const [isFilteredShown, setIsFilteredShown] = useState(false);
    const [filteredBtn, setFilteredBtn] = useState(false);

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredChallenges, setFilteredChallenges] = useState([]);

    const [challenges, setChallenges] = useState([])



    const fetchData = async () => {
        const response = await axios.get(`/api/category/${category}`)
        setChallenges(response.data)
    }

    useEffect(() => { fetchData() }, [])

    const handleFilterChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedFilters((prevFilters) => [...prevFilters, value]);
        } else {
            setSelectedFilters((prevFilters) =>
                prevFilters.filter((filter) => filter !== value)
            );
        }
    };



    useEffect(() => {
        const filteredResults = challenges.filter((challenge) => {
          if (
            (selectedFilters.includes("free") && challenge.price === 0) ||
            (selectedFilters.includes("coach") && challenge.coach !== 0)
          ) {
            return true;
          }
        else if (selectedFilters.length === 0) {
            return true; // Show all options when no filter is selected
        }
          return false;
        });
        setFilteredChallenges(filteredResults);
      }, [challenges, selectedFilters]);



    return (
        <div>
    
            <BigText>{category}</BigText>
            <FilterBtn onClick={() => setIsFilteredShown(!isFilteredShown)} isFiltered={isFilteredShown} >
                {filteredBtn ? <FilterAltIcon sx={{ fontSize: 15 }} color="primary" /> :
                    <FilterAltIcon sx={{ fontSize: 15 }} />}

                Filter
            </FilterBtn>
            {(isFilteredShown) &&
                <FilterContainer>
                        <input type="checkbox" value="free" name="member" 
              onChange={handleFilterChange} />Free Challenge   
              <div style={{width:"10px"}}></div>
                        <input type="checkbox" value="coach" name="member" 
              onChange={handleFilterChange}/>Coach
                </FilterContainer>
            }

            <ChallengesContainer>
                {
                    filteredChallenges.map((item) => {
                        return <ChallengeContainer key={item.id} challenge={item} />
                    }
                    )
                }
            </ChallengesContainer>
        </div>
    )
}


export default function LanguageScreenLayout() {
    return (
        <DefaultLayout Contents={LanguageScreen}>


        </DefaultLayout>

    )
}


const FilterContainer = styled.div`
display:flex;
align-items:center;
margin-left:10px;
margin-right:18px;
margin-bottom:10px;
font-size:14px;


`

const BigText = styled.p`
font-size:28px;
margin:0 10px 25px 5px;
font-weight:900;
`

const FlexContainer = styled.div`
display:flex;
align-items:center;
`

const ChallengesContainer = styled(FlexContainer)`
display:flex;
flex-wrap: wrap;

align-content: space-between;
margin-left:10px;
gap:25px;
`



const FilterBtn = styled.button`
border: ${props => props.isFiltered ? '3px solid #208AEC' : '0px solid #208AEC'};
color: ${props => props.isFiltered ? 'white' : '#208AEC'};
width:fit-content;
padding:5px 10px;
margin:-13px 10px 10px 10px;
border-radius:10px;

font-size:13px;
font-weight:500;
background-color:  ${props => props.isFiltered ? '#208AEC' : 'lightgrey'};
display:flex;
align-items:center;
`
