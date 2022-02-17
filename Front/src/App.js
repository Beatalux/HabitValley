import React from 'react';
import styled from 'styled-components';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import './App.css';
import MainScreen from './MainScreen';
import LanguageScreen from './LanguageScreen';
import ChallengeDescriptionScreen from './ChallengeDescriptionScreen';
import Description from './Description';
import DescriptionApplyScreen from './DescriptionApplyScreen'

export default function App() {
  return (

    <Wrapper>
      {' '}
      {/*Wrapper components are components that surround unknown components and provide a default structure to display the child components.*/}
     <Routes>
          <Route element={<MainScreen/>} path="/"/>
          <Route element={<LanguageScreen/>} path="/language"/>
          <Route element={<Description/>} path="/description"/>
          <Route element={<DescriptionApplyScreen/>} path="language0apply"/>
      </Routes>
     
    </Wrapper>
  );
}


const mobile=`(min-width:500px)`;
const Wrapper = styled.div` 

  align-items:center;
  height: 100vh;
  @media only screen and ${mobile}{
    background-color: white;
    position:center;
    transform:scale(0.4);
  }
`;

