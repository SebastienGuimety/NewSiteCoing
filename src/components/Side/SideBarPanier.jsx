// RightSideBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const RightSidebar = ({ isOpen, toggleSidebar }) => {
    const menuItems = [
        { name: 'Panier', path: '/cart' },
        // ... autres éléments spécifiques au panier
    ];

    const overlayStyle = {
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: `opacity 0.3s ease-in-out, visibility 0s ${isOpen ? '0s' : '0.3s'}`, // Ajustez le délai de visibilité basé sur l'état isOpen
    };

    const sidebarStyle = {
        transform: isOpen ? 'translateX(0%)' : 'translateX(100%)', // Animation de droite à gauche
        transition: 'transform 0.3s ease-in-out',
    };

    return (
        <div className="fixed inset-0 z-50" style={overlayStyle}>
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleSidebar} />
            <div className="absolute right-0 top-0 bottom-0 bg-[#131313] sm:w-full md:w-2/3 lg:w-1/3 w-full" style={sidebarStyle}>
                <button className="absolute top-0 right-0 m-8 text-white" onClick={toggleSidebar}>
                    <AiOutlineClose className="text-3xl" />
                </button>
                <div className="mt-8 md:mt-16 lg:mt-24 text-white space-y-4 md:space-y-5 lg:space-y-6 p-8 md:p-16 lg:p-20">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className="block text-3xl lg:text-4xl hover:text-gray-300 transition-colors duration-200"
                            onClick={toggleSidebar}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
