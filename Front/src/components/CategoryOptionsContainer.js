import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Category } from '@mui/icons-material';


export default function CategoryOptionsContainer() {
  console.log("welcome to  Category options container")

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);





  console.log("before useEffect", categories);
  //fetchData()
  useEffect(() => {

    const abortController = new AbortController();

    const fetchData = async () => {
      console.log("inside category options fetch data")

      try {
        console.log("now in try")
        const response = await axios.get(`/api/category`, {
          signal: abortController.signal,
        });
        setCategories(response.data)
        console.log("in container for category options, response.data", response.data);
        setIsLoading(false);
      } catch (error) {

        console.log('Data not found.');
        console.error("Error fetching challenge:", error);
        setIsLoading(false);

      }
    }
    fetchData();

    return () => abortController.abort();
  }, [])

  return (
    <CategoryContainer>
      {categories == null ? (
        <p>Loading...</p>
      ) : (

        categories.map((category) => {
          return <CategoryBtn to={`category/${category.name}`} key={category.id}>{category.name}</CategoryBtn>
        }))
      }

    </CategoryContainer>
  )

}

const CategoryContainer = styled.div`

display:flex;
flex-wrap: wrap;


@media (min-width:950px) {
justify-content: center;
}
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const CategoryBtn = styled(StyledLink)`

margin-right:15px;
margin-bottom: 10px;
background-color: transparent;
color:#208AEC;
border:1px solid #208AEC;
font-size:15px;
border-radius:16px;
padding:8px 8px;
font-weight:600;

@media (min-width: 700px) {
font-size:20px;
}

`
