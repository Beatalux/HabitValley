import styled from 'styled-components';


export default function CategoryOptionsContainer() {
  return (
    <Wrapper>
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
