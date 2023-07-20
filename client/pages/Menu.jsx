import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import kant from '../assets/kant.jpg';

const Menu = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={kant}
        alt='Kant'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Groundwork
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          A guided investigation of moral philosophy.
        </Typography>
        <Link to='/reader' style={{ textDecoration: 'none' }}>
          <Typography variant='body1' color='primary'>
            Start Reading
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Menu;

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// const Menu = () => {
//   return (
//     <>
//       <header>
//         <h1 id='home-title'>Read Philosophy</h1>
//       </header>
//       <div id='home-box'>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia
//               component='img'
//               height='140'
//               image='../assets/RP-logo.png'
//               alt='RP logo'
//             />
//             <CardContent>
//               <Typography gutterBottom variant='h5' component='div'>
//                 Groundwork
//               </Typography>
//               <Typography variant='body2' color='text.secondary'>
//                 A philosophy investigation of the foundations of morality.
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default Menu;

// Carousel of Kant quotes (dignity, price)

// Material UI cards of sections of Ground

// revised translation by J. M. Roman (a note on translation)

// Create a MUI carousel of Kant quotes (dignity, price)
