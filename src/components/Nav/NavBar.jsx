import React, { useState, useEffect } from 'react';
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import Sidebar from './SideBar';
import "./NavBar.css"


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="flex justify-between items-center mx-auto lg:px-0 xl:px-0 py-4 h-20">
          {/* Hamburger Menu Icon */}
          <AiOutlineMenu className="text-4xl cursor-pointer ml-4 md:ml-8" onClick={toggleMenu} />

          {/* Logo in the center */}
          <div className="flex-grow flex justify-center items-center">
            <img src="path-to-your-logo.png" alt="Logo" className="h-12" />
          </div>

          {/* Icons on the right */}
          <div className="flex items-center space-x-6 mr-4 md:mr-8">
            <IoIosSearch className="text-4xl cursor-pointer hidden lg:block" />
            <HiOutlineUserCircle className="text-4xl cursor-pointer hidden lg:block" />
            <HiOutlineShoppingBag className="text-4xl cursor-pointer" />
          </div>

        </div>
      </nav>

      {/* Sidebar Menu */}
      <Sidebar isOpen={isMenuOpen} toggleSidebar={toggleMenu} />
      

    </>
  );
};

export default NavBar;
