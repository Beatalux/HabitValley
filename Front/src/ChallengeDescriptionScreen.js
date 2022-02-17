import React from 'react'
import styled from 'styled-components';
import DefaultLayout from './templates/DefaultLayout.js';

import ChallengeContainer from './components/ChallengeContainer.js'
import { languageChallenges} from './components/Challenges';

function ChallengeDescriptionScreen() {

    return(
        <>
        <ChallengeContainer ></ChallengeContainer>
        </>
    )

};

export default function ChallengeDescriptionScreenLayout(){
    return(

        <DefaultLayout Contents={ChallengeDescriptionScreen} >


        </DefaultLayout>
    )


};