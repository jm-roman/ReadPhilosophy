import React from 'react';

const Home = () => {
  return (
    <>
      <header>
        <h1 id='home-title'>Read Philosophy</h1>
      </header>
      <div id='home-box'>
        <div id='home-text'>A guided introduction to reading philosophy.</div>
        <button id='start-learning'>
          <a href='/reader'>Start Reading</a>
        </button>
      </div>
    </>
  );
};

export default Home;
