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
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { orange } from '@mui/material/colors';
const color5 = orange[900];

const PaperGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const ToggleButtonCustom = styled(ToggleButton)(({ theme }) => ({
    padding: theme.spacing(2),
    color: color5,
}));
    const theme = createTheme({
        palette: {
            primary: {
                main: color5,
            }
        },
    });
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
        <Grid sx={{ height: '100vh' }} container justifyContent="center" alignItems="center">

            <PaperGrid item xs={6}>
                <TabContext value={value}>
                    <h2>به ساختمان خوش آمدید</h2>
                    <ToggleButtonGropCustom
                        color="primary"
                        fullWidth
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        {/*<TabList   textColor="secondary"*/}
                                   indicatorColor="secondary"
                                   onChange={handleChange2} aria-label="lab API tabs example">
                            <ToggleButtonCustom value="1">ورود</ToggleButtonCustom>
                            <ToggleButtonCustom value="2" >ثبت نام</ToggleButtonCustom>
                        {/*</TabList>*/}
                    </ToggleButtonGropCustom>
                    <TabPanel value="1"><LoginForm/></TabPanel>
                    <TabPanel value="2"><SignupForm/></TabPanel>
                </TabContext>


            </PaperGrid>
        </Grid>
    )
}
export default LoginSingup;

