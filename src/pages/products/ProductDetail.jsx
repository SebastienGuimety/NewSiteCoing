import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import Button from '../../components/Buttons/Button'; 
import QuantitySelector from '../../components/Buttons/QuantitySelector'; 
import { FaTruck, FaLock, FaEnvelope } from 'react-icons/fa'; // Import the icons from react-icons
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import the chevron icons
import DropdownButton from '../../components/Buttons/DropdownButton'; // Import the new DropdownSection component
import RightSidebar from '../../components/Side/SideBarPanier';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const dispatch = useDispatch()


  const [expandedSections, setExpandedSections] = useState({
    delivery: false,
    payment: false,
    contact: false,
  });

  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen(!isCartSidebarOpen);
  };

  const addToCartt = () => {
    dispatch(addToCart({
      id:product.id, title:product.title, image:product.imageLg, price:product.price, quantity: selectedQuantity
    }))
    toggleCartSidebar();
  };


  if (!product) {
    return <div>Product not found</div>;
  }

  const stockWidth = `${product.stock}%`;
  const stockColor = product.stock > 50 ? 'bg-green-600' : 'bg-red-600';

  return (
    <div className=" mx-auto px-20 py-20 pt-64">
      <div className="flex flex-col md:flex-row items-start md:items-start">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img className="max-h-[500px] w-auto object-contain md:max-h-[700px]" src={product.imageLg} alt={product.title} />
        </div>
        <div className="md:w-1/2 md:ml-8 max-w-full">
          <h1 className="text-3xl font-bold  md:text-left">{product.title}</h1>
          <p className="text-xl text-gray-700 mt-2 md:text-left">{product.price}</p>
          <hr className="my-4 border-gray-300" />
          <div className="mt-4 md:text-left">
            <p className="font-bold">Stock - {product.quantitytitle}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
              <div className={`h-2.5 rounded-full ${stockColor}`} style={{ width: stockWidth }}></div>
            </div>
          </div>
          <div className="mt-4 md:text-left">
            <p className="font-bold">Quantity</p>
            <div className="flex md:justify-start mt-2">
              <QuantitySelector onQuantityChange={setSelectedQuantity} />
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-4 w-full">
            <Button text="Ajouter au panier" onClick={addToCartt} variant="black" className="w-full" />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="mt-2 text-gray-700 break-words">{product.description}</p>
          </div>


          <div className="mt-8 space-y-4">
            <DropdownButton
              icon={FaTruck}
              title="Livraison rapide"
              content="Livraison en 48 - 72h en France métropolitaine."
              isOpen={expandedSections.delivery}
              onClick={() => toggleSection('delivery')}
            />
            <DropdownButton
              icon={FaLock}
              title="Paiement sécurisé"
              content="Paiement 100% sécurisé via notre plateforme."
              isOpen={expandedSections.payment}
              onClick={() => toggleSection('payment')}
            />
            <DropdownButton
              icon={FaEnvelope}
              title="Contactez-nous"
              content="Pour toute question, contactez-nous par email ou téléphone."
              isOpen={expandedSections.contact}
              onClick={() => toggleSection('contact')}
            />
          </div>
        </div>
      </div>
      <RightSidebar
        isOpen={isCartSidebarOpen}
        toggleSidebar={toggleCartSidebar}
      />
    </div>
    
  );
};

export default ProductDetail;
