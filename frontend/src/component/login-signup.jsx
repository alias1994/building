import React from 'react';
import { createTheme } from '@mui/material/styles';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import './login-singup.css'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { orange , grey} from '@mui/material/colors';
const color5 = grey[900];

const theme = createTheme({
    palette: {
        gray: {
            light: '#F3F3F3',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
const PaperGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const RToggleButtonCustom = styled(ToggleButton)(({ selectedColor }) => ({
    padding: theme.spacing(2),
    color: color5,
    width:"170px",
    height:'55px',
    border:"none",
    borderRadius: "40px 40px 40px 40px",
    fontFamily: "yekan",
    '&.Mui-selected, &.Mui-selected:hover': {
        height:'55px',
        color: 'white',
        backgroundColor: selectedColor,
      },
}));
const LToggleButtonCustom = styled(ToggleButton)(({ selectedColor }) => ({
    padding: theme.spacing(2),
    color: color5,
    width:"170px",
    height:'55px',
    border:"none",
    borderRadius: "40px 40px 40px 40px",
    fontFamily: "yekan",
    '&.Mui-selected, &.Mui-selected:hover': {
        height:'55px',
        color: 'white',
        backgroundColor: selectedColor,
      },
}));
const ToggleButtonGropCustom = styled(ToggleButtonGroup)(({ theme }) => ({
    color: theme.palette.text.primary,
}));
function LoginSingup(){
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    const [value, setValue] = React.useState('1');

    const handleChange2 = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return(
        <Grid sx={{ height: '100vh'}} container justifyContent="center" alignItems="center">

            <PaperGrid item xs={6} sx={{borderRadius:'30px'}}>
                <TabContext fullWidth value={value}>
                    <Typography sx={{margin:'30px 0px 25px 0px', fontFamily:'yekan' , fontSize:29 , color:'black'}}>!به ساختمان خوش آمدید</Typography>
                    <ToggleButtonGropCustom
                        color="warning"
                        fullWidth
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center" >
                            <Grid item fullWidth sx={{ bgcolor: '#F3F3F3',borderRadius: "40px 40px 40px 40px",height:'55px'}}>

                            
                        <TabList fullWidth  textColor="warning"
                                   indicatorColor="warning"
                                   onChange={handleChange2} aria-label="lab API tabs example"
                        >
                            <LToggleButtonCustom selectedColor="#F15F2B" value="2" >ثبت نام</LToggleButtonCustom>
                            <RToggleButtonCustom selectedColor="#F15F2B" value="1">ورود</RToggleButtonCustom>
                        </TabList>
                        </Grid>
                    </Grid>
                    </ToggleButtonGropCustom>
                    <TabPanel value="1">
                    <Typography sx={{margin:'10px 10px 7px 10px', fontFamily:'yekan' , fontSize:17 , color:'black',textAlign:'right'}}>.لطفا اطلاعات زیر را پر کنید</Typography>
                        <LoginForm/>
                        </TabPanel>
                    <TabPanel value="2">
                    <Typography sx={{margin:'10px 10px 7px 10px', fontFamily:'yekan' , fontSize:17 , color:'black',textAlign:'right'}}>.لطفا اطلاعات زیر را پر کنید</Typography>
                        <SignupForm/>
                        </TabPanel>
                </TabContext>


            </PaperGrid>
        </Grid>
    )
}
export default LoginSingup;

