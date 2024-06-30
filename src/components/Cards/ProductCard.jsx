// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ id, image, title, description, price }) => {
  return (
    <Link to={`/product/${id}`} className="max-w-md rounded overflow-hidden m-4 flex flex-col items-center">
      <div className="h-96 flex items-center justify-center">
        <img className="h-full object-contain" src={image} alt={title} />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <span className="text-gray-900 font-bold text-xl">{price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
