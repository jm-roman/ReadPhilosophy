/// routes from Home, Reader, Notes
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reader from './containers/Reader';
import Notes from './containers/Notes';

// refactor with Hooks, Material UI

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reader' element={<Reader />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/menu' element={<Menu />} />
    </Routes>
  );
};

export default App;
