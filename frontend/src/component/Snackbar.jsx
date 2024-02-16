import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Box, Grid } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';


import './text-fild.css'
import { Block } from '@mui/icons-material';

export default function CustomizedSnackbars(text) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid
    sx={{
        width: "400px",
        height: "40px",
        position: "relative",
        width: '100%'
      }}>
    <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
      className='snackbar'
      anchorOrigin={{  vertical: 'top', horizontal: 'center'}}
      sx={{ position: "absolute" ,
            textAlign:'right' ,
            '& .css-ptiqhd-MuiSvgIcon-root': {
              position: 'relative',
              top:'0px',
              fontSize:'35px'
            },
            '& .css-1pxa9xg-MuiAlert-message': {
              fontSize:'16px'
            },
            '& .css-ki1hdl-MuiAlert-action': {
              // marginInlineStart:'100px',
              // margin:'0px 263px 0px 0px',
              // display: 'flex',
              // alignItems: 'center',
              // justifyContent: 'center',
              backgroundColor: '#9C0E0E',
              position: 'relative',
              // right: '263px',
              left:'-19px',
              borderRadius:'12px 0px 0px 12px',
              width:'30px',
              height:'48px',
              top:'-6px'
            },
            '& .MuiAlert-message': {
              overflow:'none !important',
            },
          }}
          
         open={open} autoHideDuration={400000} onClose={handleClose}>
        <Alert 
        dir='rtl'
        icon={false}         
          severity='error'
          onClose={handleClose}
          variant="filled"
          sx={{ borderRadius:'12px',width: '100%' , fontFamily:'vazir' ,     maxWidth: '285px', maxHeight: '40px', minWidth: '285px', minHeight: '40px',backgroundColor:'#E92C08',textAlign:'right'
        }}
        >
          <Grid sx={{marginLeft:30}}>
      <Typography
         sx={{fontFamily:'vazir',whiteSpace:'nowrap'}}>
              {text}
      </Typography>
      </Grid>
        </Alert>
      </Snackbar>
      </Grid>
  );
}