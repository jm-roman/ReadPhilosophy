/// routes from Home, Reader, Notes
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Reader from './Reader';
import Notes from './Notes';

// refactor with Hooks, Material UI

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reader' element={<Reader />} />
      <Route path='/notes' element={<Notes />} />
    </Routes>
  );
};

export default App;
