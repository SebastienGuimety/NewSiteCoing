import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'; // Import the arrow icons
import { useTranslation } from 'react-i18next';

const SideBarMenu = ({ isOpen, toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const menuItems = [
    { name: 'Accueil', path: '/', size: 'text-4xl' },
    { name: 'Spiritueux', path: '/spiritueux', size: 'text-4xl' },
    { name: 'Parfums', path: '/parfums', size: 'text-4xl' },
    { name: 'Contact', path: '/contact', size: 'text-4xl' },
  ];

  const overlayStyle = {
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: `opacity 0.3s ease-in-out, visibility 0s ${isOpen ? '0s' : '0.3s'}`, 
  };

  const sidebarStyle = {
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className={`fixed inset-0 z-50 `} style={overlayStyle}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleSidebar} />
      <div className={`absolute left-0 top-0 bottom-0 bg-[#131313] sm:w-full md:w-2/3 lg:w-2/5 w-full`} style={sidebarStyle}>
        <button className="absolute top-0 right-0 m-8 text-white" onClick={toggleSidebar}>
          <AiOutlineClose className="text-3xl" />
        </button>
        <div className="mt-8 md:mt-16 lg:mt-24 text-white space-y-4 md:space-y-5 lg:space-y-6 p-8 md:p-16 lg:p-20">
          {!isLanguageMenuOpen ? (
            <>
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `active-link-sidebar block ${item.size} transition-colors duration-200`
                      : `block ${item.size} hover:text-gray-300 transition-colors duration-200`
                  }
                  onClick={toggleSidebar}
                >
                  {item.name}
                </NavLink>
              ))}
              <div
                className="text-xl lg:text-2xl mt-8 flex items-center pt-6 cursor-pointer hover:text-gray-400"
                onClick={() => setIsLanguageMenuOpen(true)}
              >
                <span>Language</span>
                <FiArrowRight className="ml-auto" />
              </div>
            </>
          ) : (
            <div>
              <div
                onClick={() => setIsLanguageMenuOpen(false)}
                className="text-white text-4xl hover:text-gray-300 transition-colors duration-200 flex items-center cursor-pointer mb-10"
              >
                                <span>Language</span>

                <FiArrowLeft className="ml-auto" />
              </div>
              <div className="text-xl lg:text-xl space-y-4">
                <label className="flex items-center mb-4 cursor-pointer">
                  <input
                    type="radio"
                    name="language"
                    value="fr"
                    onChange={() => changeLanguage('fr')}
                    className="hidden"
                    checked={i18n.language === 'fr'}
                  />
                  <span className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-6 ${i18n.language === 'fr' ? 'bg-white' : ''}`}>
                    {i18n.language === 'fr' && <span className="w-3 h-3 bg-black rounded-full"></span>}
                  </span>
                  Français
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="language"
                    value="en"
                    onChange={() => changeLanguage('en')}
                    className="hidden"
                    checked={i18n.language === 'en'}
                  />
                  <span className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-6 ${i18n.language === 'en' ? 'bg-white' : ''}`}>
                    {i18n.language === 'en' && <span className="w-3 h-3 bg-black rounded-full"></span>}
                  </span>
                  English
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
