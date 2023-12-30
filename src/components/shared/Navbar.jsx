import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaBars  } from 'react-icons/fa';

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="bg-gray-800 py-4 px-4 lg:px-[100px]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Home link */}
        <Link to="/" className="text-white text-xl font-bold flex">
          {/* <FaHome className="inline-block mr-2" /> */}
          <img src="/edurex_logo.png" alt="Edurex logo" className='w-[150px]' />
          {/* EDUREX */}
        </Link>

        {/* Responsive menu icon */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars className="text-2xl" />
        </button>

        {/* Navbar links for large screens */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            <FaHome className="inline-block" /> Home
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-300">
            <FaUser className="inline-block" /> Login
          </Link>
          <Link to="/settings" className="text-white hover:text-gray-300">
            <FaCog className="inline-block" /> Register
          </Link>
        </div>

        {/* Responsive menu for small screens */}
        {isOpen && (
          <div className="lg:hidden w-[70%] h-[92%] absolute top-[8%] left-0 bg-gray-800 text-white p-4 z-50">
            <Link to="/" className="block py-2 hover:text-gray-300">
              <FaHome className="inline-block" /> Home
            </Link>
            <Link to="/profile" className="block py-2 hover:text-gray-300">
              <FaUser className="inline-block" /> Login
            </Link>
            <Link to="/settings" className="block py-2 hover:text-gray-300">
              <FaCog className="inline-block" /> Register
            </Link>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}

export default Navbar