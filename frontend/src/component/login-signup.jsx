import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
const PaperGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function LoginSingup(){
    return(
        <Grid sx={{ height: '100vh' }} container justifyContent="center" alignItems="center">
            <PaperGrid item xs={6}>
                salam
                <SignupForm/>
                <LoginForm/>
            </PaperGrid>
        </Grid>
    )
}
export default LoginSingup;

