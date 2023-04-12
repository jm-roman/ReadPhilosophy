import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Menu = () => {
  return (
    <>
      <header>
        <h1 id='home-title'>Read Philosophy</h1>
      </header>
      <div id='home-box'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image='../assets/RP-logo.png'
              alt='RP logo'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Kant's Groundwork
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                A philosophy investigation of the foundations of morality.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default Menu;

// Carousel of Kant quotes (dignity, price)

// Material UI cards of sections of Ground

// revised translation by J. M. Roman (a note on translation)
