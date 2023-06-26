import React from 'react';
import styled from 'styled-components';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import './App.css';
import MainScreen from './pages/MainScreen';
import LanguageScreen from './pages/LanguageScreen';
import MyPageScreen from './pages/MyPageScreen'
import ChallengeInformationScreen from './pages/ChallengeInformationScreen';
import DescriptionApplyScreen from './pages/DescriptionApplyScreen'
import LoginScreen from './pages/LoginScreen'
import SignupScreen from './pages/SignupScreen'
import ProofPhotoScreen from './pages/ProofPhotoScreen'


const queryClient = new QueryClient()
 

export default function App() {
  return (

    <Wrapper>
      
     <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainScreen />} path="/" />
        <Route element={<LanguageScreen />} path="category/:cName" />
        <Route element={<ChallengeInformationScreen/>} path="challenge/:cID" />
        <Route element={<DescriptionApplyScreen />} path="challenge/:cID/apply" />
        <Route element={<MyPageScreen />} path="/mypage" />
        <Route element={<LoginScreen />} path="/login" />
        <Route element={<SignupScreen />} path="/signup" />
        <Route element={<ProofPhotoScreen />} path="/photo" />
      </Routes>
      </QueryClientProvider>
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

