import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css';
import TextFild from './component/text-fild.jsx'

const PaperGrid = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

    return (
    <Box>
      <Grid sx={{ height: '100vh' }} container justifyContent="center" alignItems="center">
        <PaperGrid item xs={6}>
          {TextFild('نام کاربری')}
        </PaperGrid>
      </Grid>
    </Box>
    )
}

export default App;