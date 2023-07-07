import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cursor from './components/Cursor/Cursor';

const App = () => {
  return (
    <div>
      <Cursor />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
