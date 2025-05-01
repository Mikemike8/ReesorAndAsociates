import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RessorLogo from '../assets/Reesorlog.png'; // Ensure your image path is correct

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);  // State to check screen size

    // Update isMobile based on screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Assuming 768px is the breakpoint
        };

        checkScreenSize(); // Check on mount
        window.addEventListener('resize', checkScreenSize); // Listen for resize

        // Clean up event listener on unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    function toggleMenu() {
        const menu = document.querySelector('.mobile-menu');
        menu.classList.toggle('active');
        
        const menuButton = document.querySelector('nav button');
        const spans = menuButton.querySelectorAll('span');
        
        spans.forEach((span, index) => {
            if (menu.classList.contains('active')) {
                span.style.transform = index === 0 ? 'rotate(-45deg)' : 'rotate(45deg)';
            } else {
                span.style.transform = 'none';
            }
        });
    }

    return (
        <>
            <nav className="fixed w-full z-50 bg-[#000000]  text-white border-b border-white/10 overflow-hidden">
                <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Left side: Logo with responsive sizes */}
                        
                        <div className="flex flex-row items-center text-center">
  <img
    className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] xl:w-[150px] xl:h-[150px]"
    src={RessorLogo}
    alt="Reesor & Associates Logo"
  />
  <p className="mt-4 max-w-[295px] text-white text-lg font-bold font-display">
      Reesor & Associates
    </p>
</div>





                        {/* Hamburger Menu Button for Mobile (this will only appear on smaller screens) */}
                        {isMobile && (
                            <button className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2" onClick={toggleMenu} aria-label="Toggle menu">
                                <span className="w-full h-[1px] font-bold bg-white transform transition-transform origin-right"></span>
                                <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                                <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                            </button>
                        )}

                        {/* Hamburger Button for Larger Screens */}
                        {!isMobile && (
                            <button className="w-8 h-8 flex flex-col justify-center space-y-2" onClick={toggleMenu} aria-label="Toggle menu">
                                <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                                <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                                <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                            </button>
                        )}
                    </div>
                </div>
            </nav>

           {/* Mobile Menu */}
<div className="mobile-menu fixed inset-0 bg-black bg-opacity-70 z-40 flex flex-col justify-center items-center space-y-8 nav-blur md:hidden pt-24">
    <Link 
        to="/" 
        className="text-2xl text-white tracking-[0.2em] hover:text-white/50 transition-colors transform hover:scale-105" 
        onClick={toggleMenu}
    >
        Home
    </Link>
    <Link 
        to="/about" 
        className="text-2xl text-white tracking-[0.2em] hover:text-white/50 transition-colors transform hover:scale-105" 
        onClick={toggleMenu}
    >
        Contact
    </Link>

    <Link 
            to="/debtor" 
            className="text-2xl text-white tracking-[0.2em] hover:text-white/50 transition-colors transform hover:scale-105" 
            onClick={toggleMenu}
          >
           Place Debtor
          </Link>
          <Link 
            to="/topdebtor" 
            className="text-2xl text-white tracking-[0.2em] hover:text-white/50 transition-colors transform hover:scale-105" 
            onClick={toggleMenu}
          >
           Top Debtor
          </Link>
          <Link 
            to="/law"
            className="text-2xl text-white tracking-[0.2em] hover:text-white/50 transition-colors transform hover:scale-105" 
            onClick={toggleMenu}
          >
           About
          </Link>
          

   
</div>

        </>
    );
};

