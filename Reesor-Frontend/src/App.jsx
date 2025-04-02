// src/App.jsx
import React from 'react';
import { HashRouter  as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/Home'; 
import { About } from './components/About';  
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
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
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
