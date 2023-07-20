import React from 'react';
import RPLogo from '../assets/RP logo.jpg';

const Home = () => {
  return (
    <>
       <header>
        <h1 id='home-title'>Read Philosophy</h1>  
      </header>
      <div className="logo-container">
        <img src={RPLogo} className="logo-image" alt="Logo" width='50%' />
      </div>
      <div id='home-box'>
        <div id='home-text'>A guided introduction to reading philosophy.</div>
        <button id='start-learning'>
          <a href='/menu'>Start Learning</a>
        </button>
      </div>
    </>
  );
};

export default Home;
