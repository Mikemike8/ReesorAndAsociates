// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home'; 
import { About } from './components/About';  
import Debtor from './components/Debtor';  // import the new Debtor component
import { Navbar } from './components/Navbar';
import  {TopDebtor} from './components/TopDebtor';
import { Footer } from './components/Footer';
import Modal from './components/Modal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div>
        {/* NavBar */}
        <ScrollToTop/>
        <Navbar/>

    

        
        
        
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/debtor" element={<Debtor />} /> 
          <Route path="/topdebtor" element={<TopDebtor />} /> 
        
        
        </Routes>
            
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
