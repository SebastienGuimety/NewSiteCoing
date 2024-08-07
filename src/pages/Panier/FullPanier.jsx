import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/cartSlice';
import QuantitySelector from '../../components/Buttons/QuantitySelector';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button';

const FullPanier = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (item, newQuantity) => {
    const quantityDiff = newQuantity - item.quantity;
    if (quantityDiff > 0) {
      for (let i = 0; i < quantityDiff; i++) {
        dispatch(incrementQuantity(item.id));
      }
    } else if (quantityDiff < 0) {
      for (let i = 0; i < -quantityDiff; i++) {
        dispatch(decrementQuantity(item.id));
      }
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-8 mt-48 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Votre panier</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Votre panier est actuellement vide.</p>
      ) : (
        <>
          <div className="hidden sm:block">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-4 text-left">Produit</th>
                  <th className="border-b p-4 text-left">Quantité</th>
                  <th className="border-b p-4 text-left">Total</th>
                  <th className="border-b p-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-8 flex items-center">
                      <img src={item.image} alt={item.title} className="w-20 h-32 object-contain mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p>{item.price} €</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <QuantitySelector onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)} showInput={false} initialQuantity={item.quantity} />
                        <div className="items-center pl-5">
                          {"X " + item.quantity}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{(item.price * item.quantity).toFixed(2)} €</td>
                    <td className="p-4 text-right">
                      <button
                        className="bg-black text-white py-3 px-6 rounded hover:bg-gray-700"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="block sm:hidden">
            {cart.map((item, index) => (
              <div key={index} className="border-b mb-4">
                <div className="flex items-center mb-2">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>{item.price} € x {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <QuantitySelector onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)} showInput={false} initialQuantity={item.quantity} />
                  <button
                    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Supprimer
                  </button>
                </div>
                <div className="text-right font-semibold">
                  Total: {(item.price * item.quantity).toFixed(2)} €
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <label htmlFor="orderNote" className="block mb-2">Ajoutez une note à votre commande</label>
              <textarea id="orderNote" className="border p-2 w-full" rows="4"></textarea>
            </div>
            <div className="w-full sm:w-1/2 text-right">
              <p className="text-2xl font-bold">Total: {calculateTotal()} €</p>
              <Link to="/paiement">
                <button className="bg-black text-white py-3 px-6 rounded mt-4 hover:bg-gray-700">
                  PASSER À LA CAISSE
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_2014_logo_detail.svg" alt="Visa" className="h-8 mr-2"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Mastercard_2019_logo.svg" alt="Mastercard" className="h-8 mr-2"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8"/>
          </div>
        </>
      )}
    </div>
  );
};

export default FullPanier;
