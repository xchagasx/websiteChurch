// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';

function App() {
  return (
    <Routes>
      <Route path="/home" element={ <Home /> } />
    </Routes>
  )
}

export default App;

