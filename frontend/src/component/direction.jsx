import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './direction.css'
import Grid from '@mui/material/Grid';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="2" color="#9E9E9E" href="/" onClick={handleClick}>
      بعثت تا ظهور
    </Link>,
    <Link underline="hover" key="3" color="#9E9E9E" href="/" onClick={handleClick}>
        موسیقی
    </Link>,
  ];

  return (
        <Grid container dir="rtl" direction="row">
            <Grid >
                <Typography color="#463F3F" fontFamily="yekan-bakh" fontSize="24px">
                    پروژه های انتخاب شده:
                </Typography>
            </Grid>
            <Grid sx={{marginRight: '5px'}}>
                <Breadcrumbs separator=">" color="#9E9E9E" aria-label="breadcrumb" fontFamily="yekan-bakh" dir="rtl" fontSize="22px">
                    {breadcrumbs}
                </Breadcrumbs>
            </Grid>
        </Grid>
  );
}