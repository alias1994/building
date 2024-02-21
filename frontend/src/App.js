import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import LoginSignup from "./component/login-signup";
import AddJobReport from "./component/AdJobRep"

function App() {

    return (
        <Box>
            {/* <LoginSignup/> */}
            <AddJobReport/>
            
        </Box>
    )
}

export default App;