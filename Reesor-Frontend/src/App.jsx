// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/Home';  // Named import for Home
import { About } from './components/About';  // Named import for About
import { Navbar } from './components/Navbar';
function App() {
  return (
    <Router>
      <div>
        {/* NavBar */}
        <Navbar/>
    

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
