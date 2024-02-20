import React from 'react'
import { Avatar, Container} from '@mui/material'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




export default  function FloorContent() {

  const avatars = [];

  for (let i = 0; i < 15; i++) {
    avatars.push(
      <Avatar
      
        key={i}
        sx={{
          width: '76px',
          height: '76px',
          bgcolor: '#F3F3F3',
          margin: 0,
          position: 'absolute',
          top: '46%',
          right: `${2 + i * 14}%`,
          '-ms-transform': 'translateY( -50%)',
          transform: 'translateY( -50%)',
          flexFlow: '1',
          

        }}
      />
    );
  }


  return (
<Paper
dir='rtl'
sx={{
    overflow:'auto',
    width: '600px',
        height: '116px',
        borderRadius: '20px',
        boxShadow: '3',
        bgcolor: 'lightgray',
        // whiteSpace: 'nowrap',
        // overflowX: 'auto',
        m:"auto",
        position: 'relative',
        scrollMargin:'100px',
}}
>

        <Card sx={{ minWidth: '100vh', overflow: 'auto' }}>
          {avatars}
          </Card> 
      </Paper>
    
  )
}



//  <Avatar 
//           sx={{
//             // display: 'flex',
//             width: '76px',
//             height:'76px', 
//             bgcolor:"aqua",
//             margin: 0,
//             position: 'absolute',
//             top: '50%',
//             right: '2%',
//             ':-ms-transform': 'translateY( -50%)',
//             transform: 'translateY( -50%)',
//             }}></Avatar> 