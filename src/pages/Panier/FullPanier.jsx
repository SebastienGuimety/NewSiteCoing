import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/cartSlice';
import QuantitySelector from '../../components/Buttons/QuantitySelector';


const FullPanier = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [selectedQuantity, setSelectedQuantity] = useState(1);


  const handleQuantityChange = (item, newQuantity) => {
    const quantityDiff = newQuantity - item.quantity;
    if (quantityDiff > 0) {
      dispatch(incrementQuantity(item.id));
    } else if (quantityDiff < 0) {
      dispatch(decrementQuantity(item.id));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-8 mt-48">
      <h1 className="text-3xl font-bold text-center mb-8">Votre panier</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-4 text-left">Produit</th>
            <th className="border-b p-4 text-left">Quantité</th>
            <th className="border-b p-4 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-8 flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-32 object-contain mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.price} € x {item.quantity}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center">
                  <QuantitySelector onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity) } showInput={false} />

                </div>
                <button
                  className="text-red-600 mt-2"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Supprimer
                </button>
              </td>
              <td className="p-4">{(item.price * item.quantity).toFixed(2)} €</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-8">
        <div>
          <label htmlFor="orderNote" className="block mb-2">Ajoutez une note à votre commande</label>
          <textarea id="orderNote" className="border p-2 w-full" rows="4"></textarea>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">Total: {calculateTotal()} €</p>
          <button className="bg-black text-white py-3 px-6 rounded mt-4">
            PASSER À LA CAISSE
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_2014_logo_detail.svg" alt="Visa" className="h-8 mr-2"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Mastercard_2019_logo.svg" alt="Mastercard" className="h-8 mr-2"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8"/>
      </div>
    </div>
  );
};

export default FullPanier;
