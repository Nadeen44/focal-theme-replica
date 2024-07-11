// src/components/Navbar.js
import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaUser, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'; // Import specific icons
import logo from '../assets/images/logo-focal.avif';
import '../styles.css'; // Import the custom styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-800 shadow-md py-6 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">
            <img src={logo} alt="Brand Logo" className="h-4 w-auto" />
          </a>
        </div>
        <div className="hidden md:flex space-x-8 font-normal">
          <a href="/" className="text-white underline-animation  hover:text-white">Shop by Category</a>
          <a href="/shop" className="text-white underline-animation  hover:text-white">Shop by Device</a>
          <a href="/about" className="text-white underline-animation  hover:text-white">Collections</a>
          <a href="/contact" className="text-white underline-animation  hover:text-white">Blog</a>
        </div>
        <div className="flex items-center space-x-6 ">
          <a href="/messages" className="text-gray-300 hover:text-white">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href="/search" className="text-gray-300 hover:text-white">
            <FaSearch className="w-5 h-5" />
          </a>
          <a href="/profile" className="text-gray-300 hover:text-white">
            <FaUser className="w-5 h-5" />
          </a>
          <a href="/cart" className="text-gray-300 hover:text-white">
            <FaShoppingBag className="w-5 h-5" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-zinc-800 shadow-md">
          <a href="/" className="block px-4 py-2 text-white">Shop by Category</a>
          <a href="/shop" className="block px-4 py-2 text-white">Shop by Device</a>
          <a href="/about" className="block px-4 py-2 text-white">Collections</a>
          <a href="/contact" className="block px-4 py-2 text-white">Blog</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
