// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import './NavBar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Spiritueux', path: '/spiritueux' },
    // ... autres éléments du menu
  ];

  // Appliquez des styles en ligne ou des classes conditionnelles pour gérer la transition
  const overlayStyle = {
    opacity: isOpen ? 1 : 0,
    // La visibilité ne doit pas empêcher l'opacité de transitionner.
    visibility: isOpen ? 'visible' : 'hidden',
    transition: `opacity 0.3s ease-in-out, visibility 0s ${isOpen ? '0s' : '0.3s'}`, // Ajustez le délai de visibilité basé sur l'état isOpen
  };

  const sidebarStyle = {
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300 ease-in-out`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleSidebar} />
      <div className={`absolute left-0 top-0 bottom-0 bg-[#131313] ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:w-full md:w-2/3 lg:w-1/3 w-full`} style={sidebarStyle}>
        <button className="absolute top-0 right-0 m-8 text-white" onClick={toggleSidebar}>
          <AiOutlineClose className="text-3xl" />
        </button>
        <div className="mt-24 text-white space-y-6 p-20">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => isActive ? 'active-link-sidebar block text-4xl transition-colors duration-200' : "block text-4xl hover:text-gray-300 transition-colors duration-200"}
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

export default Sidebar;
