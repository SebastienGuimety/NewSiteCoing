// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="max-w-md rounded overflow-hidden m-4 flex flex-col items-center">
      <div className="h-96 flex items-center justify-center">
        <img className="h-full object-contain" src={image} alt={title} />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <span className="text-gray-900 font-bold text-xl">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
