// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-6 flex justify-between items-center px-24">
      <div className="text-4xl font-bold">ChatVARRS</div>
      <ul className="flex gap-6">
        <li><a href="#" className= " text-xl hover:text-green-600">Home</a></li>
        <li><a href="#" className="text-xl hover:text-green-600">Register</a></li>
        <li><a href="#" className="text-xl hover:text-green-600">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
