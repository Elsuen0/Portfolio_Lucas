import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cursor from './components/Cursor/Cursor';

const App = () => {
  // Vérifier la largeur de l'écran pour déterminer si le composant <Cursor /> doit être affiché
  const shouldShowCursor = window.innerWidth > 768;

  return (
    <div>
      {shouldShowCursor && <Cursor />}
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
