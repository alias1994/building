import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import './custom-button.css'

const data={
    id:2,
    firstname: 'غلام',
    lastname: 'عبدی',
    username: 'Gh.abdi',
}


export default function ShowAvatar(){
    return (
     <Box 
     sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '350px',
      height: '100px',
      borderRadius: 2,
      border: '2px solid lightgray',
      justifyContent: 'right',
      bgcolor: 'white',
     }}>
          <Typography 
          elevation={0}
          sx={{
              direction: 'rtl',
              right: '-31.5%',
              width: '250px',
              height: '32px',
              margin: 0,
              position: 'relative',
              top: '17%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '20px',  
              fontFamily: 'vazir',
              border: '1px solid lightgray', 
          }}
          >{data.firstname +' '+ data.lastname}</Typography>
          <Typography 
          elevation={0}
          sx={{
              direction: 'rtl',
              right: '10%',
              width: '250px',
              height: '32px',
              margin: 0,
              position: 'relative',
              top: '50%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontFamily: 'vazir',
              fontSize: '20px',  
              border: '1px solid lightgray',
          }}
          >{data.username}</Typography>
          <Avatar sx={{
              margin: 0,
              position: 'relative',
              top: '19%',
              right: '8px',
              width: '60px',
              height: '60px',
              src: '',
              fontFamily: 'vazir',
              }}>
                  {data.firstname.charAt(0)+" "+data.lastname.charAt(0)}
              </Avatar>
     </Box>
    )
  }


