import './signin.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const PaperGrid = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Signin() {
  return (
    <div className="Signin">
      <Grid 
        id='main-grid'
        container
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
      >
        <PaperGrid id='sigin-box'>
          <Grid>
            <TextField id="outlined-basic" label="نام کاربری" variant="outlined" />
          </Grid>
          <Grid>
            <TextField id="outlined-basic" label="رمز عبور" variant="outlined" />
          </Grid>
          <Grid>
            <Button variant="contained">
              ثبت
            </Button>
          </Grid>            
        </PaperGrid>
      </Grid>
    </div>
  )
}

export default Signin;
