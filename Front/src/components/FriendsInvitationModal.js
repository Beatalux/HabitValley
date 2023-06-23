import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SignupDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <StartBtn variant="outlined" onClick={handleClickOpen}>
        Start
      </StartBtn>
 
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" You Need to Sign Up to Join!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Btn onClick={handleClose}>Close</Btn>
          <SignUpBtn to={`/signup`} onClick={handleClose} autoFocus>
            SignUp
          </SignUpBtn>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const StartBtn = styled.button`
    color:white;
border-radius:15px;
background: #0466c8;
border:none;
padding:8px 13px;
font-size:15px;
font-family: 'Quicksand', sans-serif;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Btn = styled.div`
color:#1976d2;
font-size:15px;
margin:0 10px 10px 5px ;
background-color: transparent;
border:none;
font-weight:700;
font-family: 'Quicksand', sans-serif;
`

const SignUpBtn = styled(StyledLink)`
color:#1976d2;
font-size:15px;

margin:0 25px 10px 5px ;
background-color: transparent;
border:none;
font-weight:900;
font-family: 'Quicksand', sans-serif;
`