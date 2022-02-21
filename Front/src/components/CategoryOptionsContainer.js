import styled from 'styled-components';


export default function CategoryOptionsContainer() {
  return (

      <div>
          <FlexContainer>
              <CategoryBtn>Health&amp;Wellness</CategoryBtn>
              <CategoryBtn>Programming</CategoryBtn>
              <CategoryBtn>Marketing</CategoryBtn>
          </FlexContainer>
          <FlexContainer style={{ marginLeft: "-10px" }}>
              <CategoryBtn>Start Your Own Business</CategoryBtn>
              <CategoryBtn>Language</CategoryBtn>
              <CategoryBtn>Design</CategoryBtn>
          </FlexContainer>
          <FlexContainer>
              <CategoryBtn>Stock Market</CategoryBtn>
              <CategoryBtn>Career Change</CategoryBtn>
              <CategoryBtn>Customize</CategoryBtn>
          </FlexContainer>

      </div>
  )

}


const FlexContainer = styled.div`
display:flex;
align-items:center;

`
const CategoryBtn = styled.button`
margin-right:15px;
margin-bottom:10px;
background-color: transparent;
color:#208AEC;
border:1px solid #208AEC;
font-size:12px;
border-radius:16px;
padding:8px 8px;

`
