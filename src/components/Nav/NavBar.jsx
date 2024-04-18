import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi";
import { useLocation } from 'react-router-dom';
import SideBarMenu from '../Side/SideBarMenu';
import SideBarPanier from '../Side/SideBarPanier';
import "./NavBar.css"


const NavBar = ( ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const iconColor = location.pathname === '/' ? 'white' : 'gray-900';


const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
};

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      // Attach the event listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <>

      <nav className={` fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out   ${isScrolled ? 'bg-neutral-800' : 'bg-transparent bg-white shadow-lg'}`}>
        <div className="flex justify-between items-center mx-auto lg:px-0 xl:px-0 py-4 h-20">
          {/* Hamburger Menu Icon */}
          <AiOutlineMenu className={`text-4xl cursor-pointer ml-4 md:ml-8 ${iconColor === 'gray-900' && isScrolled ? 'text-white' : `text-${iconColor}`}`} onClick={toggleMenu} />

          {/* Logo in the center */}
            {/*
          <div className="flex-grow flex justify-center items-center">
            <img src={logo} alt="Logo" className={`h-12 ${isScrolled ? 'filter invert' : ''}`} />
          </div>
            */}
          {/* Icons on the right */}
            <div className="flex items-center space-x-6 mr-4 md:mr-8">
                <IoIosSearch className={`text-4xl cursor-pointer ${iconColor === 'gray-900' && isScrolled ? 'text-white' : `text-${iconColor}`}  hidden lg:block`}/>
                <HiOutlineUserCircle className={`text-4xl cursor-pointer ${iconColor === 'gray-900' && isScrolled ? 'text-white' : `text-${iconColor}`} hidden lg:block`}/>
                <HiOutlineShoppingBag className={`text-4xl cursor-pointer ${iconColor === 'gray-900' && isScrolled ? 'text-white' : `text-${iconColor}`} `} onClick={toggleCart}/>
            </div>


        </div>
      </nav>

      {/* SideBarMenu Menu */}
        <SideBarMenu isOpen={isMenuOpen} toggleSidebar={toggleMenu} />
        <SideBarPanier isOpen={isCartOpen} toggleSidebar={toggleCart} />



    </>
  );
};

export default NavBar;
