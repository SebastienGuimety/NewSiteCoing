// RightSideBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa'; // Import trash icon
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PanierCard from '../Cards/PanierCard';

const RightSidebar = ({ isOpen, toggleSidebar }) => {

    const dispatch = useDispatch();

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }

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

    const cart = useSelector((state) => state.cart)

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      };

    return (
        <div className="fixed inset-0 z-50" style={overlayStyle}>
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleSidebar} />
            <div className="absolute right-0 top-0 bottom-0 bg-[#131313] sm:w-full md:w-2/3 lg:w-2/5 w-full" style={sidebarStyle}>
                <button className="absolute top-0 right-0 m-8 text-white" onClick={toggleSidebar}>
                    <AiOutlineClose className="text-3xl" />
                </button>
                <div className="mt-8 md:mt-16 lg:mt-24 text-white p-8 md:p-16 lg:p-20">
                    <h2 className="text-xl font-bold">Votre panier</h2>
                    <div className="mt-4 space-y-4">
                        {cart.length === 0 ? (
                            <p className="text-gray-500">Votre panier est vide</p>
                        ) : (
                            cart.map((item, index) => (
                                <PanierCard key={index} item={item} />
                            ))
                        )}
                    </div>
                    {cart.length > 0 && (
                        <>
                            <div className="mt-8 text-white">
                                <div className="flex justify-between">
                                    <span>Sous-total</span>
                                    <span>{calculateSubtotal()} €</span>
                                    </div>
                            </div>
                            <div className="mt-8">
                                <button className="w-full bg-black text-white py-3 rounded mb-4" onClick={() => console.log("Go to cart")}>
                                    Aller au panier
                                </button>
                                <button className="w-full bg-white text-black py-3 rounded" onClick={() => console.log("Checkout")}>
                                    Commander
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
