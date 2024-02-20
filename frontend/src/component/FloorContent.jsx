import React from 'react'
import { Avatar, Container} from '@mui/material'

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

      <Container  sx={{
        display: 'flex',
        width: '600px',
        height: '116px',
        borderRadius: '20px',
        boxShadow: '3',
        bgcolor: 'lightgray',
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        m:"auto",
        position: 'relative',
        
        // '&::-webkit-scrollbar': {
        //   width: '8px',
        //   height: '8px',
        //   borderRadius: '8px',
        //   backgroundColor: 'rgba(0,0,0,0.1)',
        // },
        // '&::-webkit-scrollbar-thumb': {
        //   borderRadius: '8px',
        //   backgroundColor: 'rgba(0,0,0,0.5)',
        // },

        // کامنت های بالا برای استایل دهی به اسکرول بار هستند

        }}>
          {avatars}
            
      </Container>
      
    
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