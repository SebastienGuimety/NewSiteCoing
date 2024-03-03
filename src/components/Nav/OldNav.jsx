import React, { useState, useEffect } from "react";
import logo from '../../assets/logo.png';
import profil from '../../assets/profil.png';
import panier from '../../assets/panier.png';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoSearch } from "react-icons/io5";
import { useLocation, NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const path = location.pathname; // This will be used for active link styling

    return (
        <div className="bg-white shadow-md">
            {/* Mobile container */}
            <div className="flex justify-between items-center p-4 lg:hidden">
                <AiOutlineMenu className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
                <img src={logo} alt="Logo" className="h-10" />
                <AiOutlineShoppingCart className="text-2xl" />
            </div>

            {/* Desktop container */}
            <div className="hidden lg:flex justify-between items-center p-2">
                <div className="flex items-center gap-2 ml-4">
                    <img src={logo} alt="Logo" className="w-16 h-16 rounded-full border-2 border-white" />
                    <p className="text-lg font-bold mr-2">AuCoinDuVentoux</p>
                </div>

                <ul className={`flex-col space-x-8 md:flex-row gap-10 md:flex ${isOpen ? "flex" : "hidden"}`}>
                    {["product", "boutique", "products", "contact"].map((item) => (
                        <li key={item} className="menu-item text-lg cursor-pointer transition duration-300 ease-in-out relative">
                            <NavLink
                                to={`/${item}`}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active-link-class' : 'inactive-link-class'}`
                                }
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="space-x-8 flex gap-4 items-center">
                    <IoSearch className="w-6 h-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer hover:text-yellow-500" />
                    <img src={profil} alt="Profile" className="w-6 h-6 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer" />
                    <div className="hover:scale-110 transition-transform duration-300 ease-in-out flex items-center gap-2 border border-gray-300 bg-white shadow-sm p-2 px-4 py-2 rounded-full cursor-pointer hover:shadow-md">
                        <span className="text-sm">0.00€</span>
                        <img src={panier} alt="Cart" className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Dropdown menu for mobile and tablet */}
            {isOpen && (
                <div className="lg:hidden">
                    <ul className="flex flex-col items-start p-4 bg-gray-100">
                        {["product", "boutique", "products", "contact"].map((item) => (
                            <li key={item} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out my-2 text-lg pl-4">
                                <NavLink
                                    to={`/${item}`}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active-link-class' : 'inactive-link-class'}`
                                    }
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
