import './signin.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Signin() {
  return (
    <div className="Signin">
        <Grid id="mainGrid" container spacing={2} justifyContent="center"
              alignItems="center">
            <Grid item xs={3} >
                <Paper>
                    <br/>
                    <h1>صفحه ورود</h1>
                    <TextField className={"inputt"} id="input1"  label="نام کاربری" variant="filled" />
                    <br/>
                    <br/>
                    <TextField className={"inputt"} id="input2"  label="رمز عبور" variant="filled" />
                    <br/>
                    <br/>
                    <Button id="btn" size="large" variant="contained">ورود</Button>
                </Paper>
            </Grid>
        </Grid>

    </div>
  );
}

export default Signin;
