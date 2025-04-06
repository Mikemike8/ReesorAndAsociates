// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import { Home } from './components/Home'; 
import { About } from './components/About';  
import { Navbar } from './components/Navbar';
import Debtor from './components/Debtor'; 
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
          <Route path="/debtor" element={<Debtor />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
