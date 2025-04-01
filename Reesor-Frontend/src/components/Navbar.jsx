
import { Link } from 'react-router-dom';
import React from 'react';

export const Navbar = () => {
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

    return (<>
    
    <nav className="fixed w-full z-50 nav-blur text-white border-b border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
            <div className="flex justify-between h-24 items-center">
                <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] logo">Ressor & Associates | Transportation</div>
                <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
                    <Link to="/" className="hover-line" >Home</Link>
                    <Link to="/about" className="hover-line" >About</Link>
                </div>
                <button className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                    <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                </button>
            </div>
        </div>
    </nav>

    <div className="mobile-menu fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-12 nav-blur md:hidden pt-24">
       
        <Link to="/" className="text-2xl text-white tracking-[0.2em] hover:text-white/50 transition-colors">Home</Link>
        <Link to="/about"className="text-2xl text-white tracking-[0.2em] hover:text-white/50 transition-colors" >About</Link>
    </div>
    
    </>
    
    );
};