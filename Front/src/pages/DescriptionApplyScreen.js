import React, { useState } from 'react'
import styled from 'styled-components';
import DefaultLayout from '../templates/DefaultLayout.js';
import { Link } from 'react-router-dom';
import FriendsInvitationModal from '../components/FriendsInvitationModal';
import PeopleIcon from '@mui/icons-material/People';

export default function DescriptionApplyScreen() {
    const [checked, setChecked] = useState([false, false, false]);
    console.log("this is checked arr", checked)

    const checkCheckbox = (checked) => {
        if (checked[0] == true && checked[1] == true && checked[2] == true) {
        }
    }

    return (
        <>
            <DescriptionTitleText>10 Words A Day</DescriptionTitleText>
            <BigInfoText>Project Term</BigInfoText>
            <div>
                <input type="radio" name="term" value="2weeks" />2 weeks
                <br />
                <input type="radio" name="term" value="4weeks" checked />4 weeks
            </div>
            <Divider />
            <BigInfoText>How Determined you are?</BigInfoText>
            <SmallInfoText style={{ padding: "0 13px" }}>By deposit money, you can have stronger motivation to achieve your goal</SmallInfoText>


            <DepositForm type="text" id="fname" name="fname" />$
            <br />
            <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                <PeopleIcon sx={{ fontSize: 15 }}></PeopleIcon>
                <SmallInfoText>Average Money Deposit: 10$</SmallInfoText>
            </div>

            <Divider />
            <BigInfoText>What type of Colleague do you want?</BigInfoText>
            <div>
                <OptionText>
                    <input type="radio" name="colleague" value="1" />I only want to send photos
                    <br />
                </OptionText>
                <OptionText>
                    <input type="radio" name="colleague" value="2" />I want to talk about goals and encourage each other
                    <br />
                </OptionText>
                <OptionText>
                    <input type="radio" name="colleague" value="3" checked />Both are fine</OptionText>
            </div>
            <Divider />
            <BigInfoText>I understand....</BigInfoText>
            <OptionText>
                <Checkbox label="If I acheive my goal, I will get my money + extra rewards. Reward is subjected to other colleague’s results."
                    value={checked[0]} onChange={() => setChecked([!checked[0], checked[1], checked[2]])} />
            </OptionText>
            <OptionText>
                <Checkbox label="If I fail to build a habit, I cannot get money back"
                    value={checked[1]} onChange={() => setChecked([checked[0], !checked[1], checked[2]])} />
            </OptionText>
            <OptionText>
                <Checkbox label="I should be respectful to colleagues. Reported users are considered to have failed the project"
                    value={checked[2]} onChange={() => setChecked([checked[0], checked[1], !checked[2]])} />
            </OptionText>
            <div style={{ height: "10px" }} />
            <SmallInfoText style={{ fontWeight: "600" }}>By checking this, I acknowledege that I agree on</SmallInfoText>
            <br/>
            <div style={{ marginTop: "-30px" }}>
                <SmallInfoText>
                    <input type="checkbox" value="temrs" name="useofTerms" checked />
                    <a href="www.naver.com">Use of Terms</a></SmallInfoText>
            </div>
            {(checked[0] == true && checked[1] == true && checked[2] == true)?
            <StyledLink to="/findPeer"><ConfirmBtn>Find Your Peer</ConfirmBtn></StyledLink>
            :<ConfirmBtn>Find Your Peer</ConfirmBtn>
            }
        </>
    )
}

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    )
}
const DepositForm = styled.input.attrs({
    type: "textbox",
    placeholder: "  5"
})`
    width:65px;
    height:20px;
    margin-left:30px;
    margin-right:10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;



const ConfirmBtn = styled.button`
width:70%;
margin-left:15%;
border-radius:10px;
background:#208AEC;
color:white;
border:none;
padding:5px 15px;
font-size:12px;
`


const Divider = styled.div`
width:100%;
height:9px;
background-color:#C4C4C4;
margin:10px 0;
`
const DescriptionTitleText = styled.p`
font-size:24px;
font-weight:600;
margin:10px;
font-family: 'Quicksand', sans-serif;
`

const BigInfoText = styled.p`
font-size:16px;
font-weight:800;
margin:10px;
font-family: 'Quicksand', sans-serif;
`

const SmallInfoText = styled.p`
font-size:12px;
font-weight:400;
margin:10px;
font-family: 'Quicksand', sans-serif;
`

const OptionText = styled.p`
font-size:15px;
font-weight:500;
margin:10px;
font-family: 'Quicksand', sans-serif;
`