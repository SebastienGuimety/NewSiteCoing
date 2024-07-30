import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PaymentPage = () => {
  const cart = useSelector((state) => state.cart);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTax = () => {
    const total = parseFloat(calculateTotal());
    const taxRate = 0.2; // Exemple de taux de TVA de 20%
    return (total * taxRate).toFixed(2);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="container mx-auto py-8 mt-48 flex flex-col md:flex-row">
      {/* Récapitulatif du panier */}
      <div className="md:w-2/5 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Votre panier</h2>
        {cart.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.price} € x {item.quantity}</p>
            </div>
            <div className="text-right">{(item.price * item.quantity).toFixed(2)} €</div>
          </div>
        ))}
        <div className="mt-8">
          <input type="text" placeholder="code de réduction" className="border p-2 w-full mb-4" />
          <button className="bg-black text-white py-2 px-4 rounded w-full">Valider</button>
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <span>Sous-total</span>
            <span>{calculateTotal()} €</span>
          </div>
          <div className="flex justify-between">
            <span>Livraison</span>
            <span>Saisir une adresse d'expédition</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>{calculateTotal()} €</span>
          </div>
          <p className="text-gray-500 mt-2">Taxes de {calculateTax()} € incluse</p>
        </div>
      </div>

      {/* Formulaire de livraison et de paiement */}
      <div className="md:w-3/5 p-4">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <input type="email" placeholder="Adresse e-mail" className="border p-2 w-full mb-4" />
        <a href="#" className="text-blue-500">Ouvrir une session</a>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Livraison</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-1">Pays/région</label>
              <input type="text" placeholder="France" className="border p-2 w-full" />
            </div>
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block mb-1">Prénom</label>
                <input type="text" placeholder="Prénom" className="border p-2 w-full" />
              </div>
              <div className="w-1/2">
                <label className="block mb-1">Nom</label>
                <input type="text" placeholder="Nom" className="border p-2 w-full" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Adresse</label>
              <input type="text" placeholder="Adresse" className="border p-2 w-full" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Appartement, suite, etc. (optionnel)</label>
              <input type="text" placeholder="Appartement, suite, etc. (optionnel)" className="border p-2 w-full" />
            </div>
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block mb-1">Code postal</label>
                <input type="text" placeholder="Code postal" className="border p-2 w-full" />
              </div>
              <div className="w-1/2">
                <label className="block mb-1">Ville</label>
                <input type="text" placeholder="Ville" className="border p-2 w-full" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Téléphone</label>
              <input type="text" placeholder="Téléphone" className="border p-2 w-full" />
            </div>
          </form>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2">Paiement</h3>
          <p>Toutes les transactions sont sécurisées et chiffrées.</p>
          <div className="space-y-4">
            <div className="border p-4 rounded cursor-pointer" onClick={() => handlePaymentMethodChange('creditCard')}>
              <div className="flex items-center">
                <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" checked={selectedPaymentMethod === 'creditCard'} onChange={() => handlePaymentMethodChange('creditCard')} className="mr-2" />
                <label htmlFor="creditCard" className="text-lg font-semibold">Carte de crédit</label>
                <div className="flex ml-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_2014_logo_detail.svg" alt="Visa" className="h-8 mr-2" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Mastercard_2019_logo.svg" alt="Mastercard" className="h-8 mr-2" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Amex_logo.svg" alt="Amex" className="h-8" />
                </div>
              </div>
              {selectedPaymentMethod === 'creditCard' && (
                <div className="mt-4">
                  <input type="text" placeholder="Numéro de carte" className="border p-2 w-full" />
                  <div className="flex space-x-4 mt-2">
                    <input type="text" placeholder="Date d'expiration (MM/AA)" className="border p-2 w-1/2" />
                    <input type="text" placeholder="Code de sécurité" className="border p-2 w-1/2" />
                  </div>
                  <input type="text" placeholder="Nom sur la carte" className="border p-2 w-full mt-2" />
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="billingSameAsShipping" checked className="mr-2" />
                    <label htmlFor="billingSameAsShipping">Utiliser l'adresse d'expédition comme adresse de facturation</label>

                  </div>
                  <button className="bg-black text-white py-3 px-6 rounded mt-4 w-full">Payer maintenant</button>

                </div>
              )}
            </div>
            <div className="border p-4 rounded cursor-pointer" onClick={() => handlePaymentMethodChange('paypal')}>
              <div className="flex items-center">
                <input type="radio" id="paypal" name="paymentMethod" value="paypal" checked={selectedPaymentMethod === 'paypal'} onChange={() => handlePaymentMethodChange('paypal')} className="mr-2" />
                <label htmlFor="paypal" className="text-lg font-semibold">PayPal</label>
              </div>
              {selectedPaymentMethod === 'paypal' && (
                <div className="mt-4">
                  <p>Après avoir cliqué sur « Payer avec PayPal », vous serez redirigé(e) vers PayPal pour finaliser votre achat de façon sécurisée.</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded w-full mt-4">Payer avec PayPal</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
