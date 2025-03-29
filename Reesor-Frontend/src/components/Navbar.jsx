import { Link } from 'react-router-dom';


import React from 'react';

export const Navbar  = () => {
  return <nav className="bg-gray-800 p-10">
  <ul className="flex space-x-4 justify-end">
    <li>
      <Link to="/" className="text-white hover:text-gray-400">Home</Link>
    </li>
    <li>
      <Link to="/about" className="text-white hover:text-gray-400">About</Link>
    </li>
  </ul>
</nav>
 ;
};
