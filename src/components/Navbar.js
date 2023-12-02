
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white font-bold text-xl flex items-center">
          <img src="icon.jpg" alt="Icon" className="mr-2 h-6 w-6" />
          <span>Image Processing</span>
        </div>

        {/* Botón para mostrar/ocultar el menú en dispositivos pequeños */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menú de navegación */}
        <div className={`lg:flex-col lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="lg:flex-grow lg:flex lg:justify-end lg:items-center">
            <Link href="/" className="block lg:inline-block text-white hover:text-gray-300 px-4 py-2">
            Home
            </Link>

            <Link href="/docs" className="block lg:inline-block text-white hover:text-gray-300 px-4 py-2">
              Docs
            </Link>

            <Link href="/features" className="block lg:inline-block text-white hover:text-gray-300 px-4 py-2">
              New Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
