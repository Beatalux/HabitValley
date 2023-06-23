import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Category } from '@mui/icons-material';




export default function CategoryOptionsContainer() {

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async () => {
    try{
      const response = await axios.get(`/api/category`)
      console.log("categories response:",response.data);

      setCategories(response.data);
      setIsLoading(false);
  }catch(error){
    console.error("Error fetching categoe:", error);
    setIsLoading(false);


  }
}

  //fetchData()
  useEffect(() => { fetchData() }, [])



  return (
    <Wrapper>
      {categories.map((item)=> {
            return <CategoryBtn key={item.id}>{item.name}</CategoryBtn>
      })}

    

    </Wrapper>
  )

}

const FlexContainer = styled.div`
display:flex;
align-items:center;
@media (min-width: 1000px) {
justify-content: center;
}
`
const Wrapper = styled.div`


`
const CategoryBtn = styled.button`
margin-right:15px;
margin-bottom:10px;
background-color: transparent;
color:#208AEC;
border:1px solid #208AEC;
font-size:13px;
border-radius:16px;
padding:8px 8px;

@media (min-width: 1000px) {
font-size:20px;
}

`
