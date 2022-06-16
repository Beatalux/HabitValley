import React from 'react';
import styled from 'styled-components';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import './App.css';
import MainScreen from './pages/MainScreen';
import LanguageScreen from './pages/LanguageScreen';
import MyPageScreen from './pages/MyPageScreen'
import Description from './pages/Description';
import DescriptionApplyScreen from './pages/DescriptionApplyScreen'
import LoginScreen from './pages/LoginScreen'
import SignupScreen from './pages/SignupScreen'
import ProofPhotoScreen from './pages/ProofPhotoScreen'

export default function App() {
  return (

    <Wrapper>
      <Routes>
        <Route element={<MainScreen />} path="/" />
        <Route element={<LanguageScreen />} path="/language" />
        <Route element={<Description />} path="/description" />
        <Route element={<DescriptionApplyScreen />} path="/language0apply" />
        <Route element={<MyPageScreen />} path="/mypage" />
        <Route element={<LoginScreen />} path="/login" />
        <Route element={<SignupScreen />} path="/signup" />
        <Route element={<ProofPhotoScreen />} path="/photo" />
      </Routes>
    </Wrapper>
  );
}


const mobile = `(min-width:500px)`;
const Wrapper = styled.div` 
  display:flex;
  justify-content: center;
  height: 100vh;

  @media only screen and ${mobile}{
    background-color:white;
    position:center;
    //transform:scale(0.4);
  }
`;

