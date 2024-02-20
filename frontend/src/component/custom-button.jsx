import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple ,orange} from '@mui/material/colors';
import './custom-button.css'

const DemoButton = styled(Button)(({ theme }) => ({
    // width: 300,
    maxWidth: '340px', maxHeight: '50px', minWidth: '340px', minHeight: '50px',
    ...theme.typography.body2,
    margin:"10px",
    borderRadius: "12px",
    backgroundColor: "#F15F2B",
    color: "#FFFFFF",
    fontFamily:"vazir"
  }))

  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: orange,
    },
  });

function CustomButton ({name,handleSubmit}){

    return(
    <ThemeProvider theme={theme}>
      <DemoButton onClick={handleSubmit} className='but' id='but1' variant="contained" color="secondary">{name}</DemoButton>
    </ThemeProvider>
)
}
export default CustomButton;