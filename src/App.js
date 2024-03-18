// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/Homepage';
import BlackJackSheet from './blackjack/BlackJackSheet';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<About />} />
    <Route path="/blackjack" element={<BlackJackSheet />} />
  </Routes>
);

export default App;
