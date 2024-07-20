import React, { useState, useEffect } from 'react';
import { CiMenuBurger, CiShoppingCart, CiSearch } from "react-icons/ci";
import { useLocation } from 'react-router-dom';
import SideBarMenu from '../Side/SideBarMenu';
import SideBarPanier from '../Side/SideBarPanier';
import logoImage from '../../assets/img/logoreal.png';  // Assurez-vous que le chemin vers votre logo est correct
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import "./NavBar.css"

const NavBar = ( ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';


    const cartItems = useSelector((state) => state.cart); // Ensure this matches your state structure

    const dispatch = useDispatch();

    const backgroundColor = isScrolled ? 'bg-[#131313]	' : 'bg-transparent'; // Modifier la couleur de fond uniquement sur la page d'accueil

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Attacher l'écouteur d'événements
        window.addEventListener('scroll', handleScroll);

        // Nettoyer l'écouteur d'événements
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getTotalQuantity = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${backgroundColor} `}>
                <div className="flex justify-between items-center mx-auto lg:px-0 xl:px-0 py-4 h-20">
                  <div className="grid grid-cols-3 w-full">

                     {/* Hamburger Menu Icon */}
                    <div className='ml-4 md:ml-8 flex justify-start'>
                        <div className="hover:bg-slate-400 hover:bg-opacity-20 rounded-full p-2 transition-all duration-500 ">
                            <CiMenuBurger className={`text-4xl cursor-pointer ${isHomePage ? (isScrolled ?  'text-white' : 'text-white' ) : (isScrolled ? 'text-white' : 'text-gray-900')}`} onClick={toggleMenu} />
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                      {isScrolled ? (
                            <NavLink to="/" className="text-xl font-sans font-bold text-white">
                                AuCoingDuVentoux
                            </NavLink>
                          
                      ) : (
                          <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2">
                            <img src={logoImage} alt="Logo" className="h-40 lg:h-40 md:h-28 sm:h-20 xs:h-14 2xs:h-12" onClick={ console.log("ah oui")} /> 
                        </div>
                      )}
                    </div>
                    
                   

                    {/* Icons on the right */}
                    <div className="flex items-center space-x-6 mr-4 md:mr-8 justify-end">
                        <div className="hover:bg-slate-400 hover:bg-opacity-20  rounded-full p-2 transition-all duration-500 ">
                            <CiSearch className={`text-4xl cursor-pointer ${isHomePage ? (isScrolled ?  'text-white' : 'text-white' ) : (isScrolled ? 'text-white' : 'text-gray-900')} hidden lg:block`} />
                        </div>
                    
                        <div className="relative hover:bg-slate-400 hover:bg-opacity-20 rounded-full p-2 transition-all duration-500">
                            <CiShoppingCart className={`text-4xl cursor-pointer ${isHomePage ? (isScrolled ? 'text-white' : 'text-white') : (isScrolled ? 'text-white' : 'text-gray-900')}`} onClick={toggleCart} />
                            {getTotalQuantity() > 0 && (
                                <span className="badge">
                                    {getTotalQuantity()}
                                </span>
                            )}
                        </div>
                    </div>
                  </div>
                </div>
            </nav>

            {/* SideBarMenu Menu */}
            <SideBarMenu isOpen={isMenuOpen} toggleSidebar={toggleMenu} />
            <SideBarPanier isOpen={isCartOpen} toggleSidebar={toggleCart} cartItems={cartItems} />

        </>
    );
};

export default NavBar;
