// src/pages/Products.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import petillantImage from '../../assets/petillant-sf.png';
import coudounatImage from '../../assets/coudounat-sf.png';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Products = () => {
  const products = [
    {
      image: petillantImage,
      title: "GIN - BEL AIR",
      description: "Distillerie de Paris",
      price: "€47,00",
    },
    {
      image: coudounatImage,
      title: "RHUM - PANELA",
      description: "Distillerie de Paris",
      price: "€49,00",
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [direction, setDirection] = useState('');


  const handleNext = () => {
    setDirection('right');
    setTimeout(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
      setDirection('');
    }, 500); // Durée de la transition
  };

  const handlePrev = () => {
    setDirection('left');
    setTimeout(() => {
      setCurrentProductIndex((prevIndex) =>
        prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
      setDirection('');
    }, 500); // Durée de la transition
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center w-full ">
        <button
          className="absolute left-2 md:left-4 bg-white p-4 rounded-full shadow-lg text-2xl"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <div className="hidden md:flex justify-center space-x-40">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        <div className={`flex flex-col items-center md:hidden transition-transform duration-500 transform ${direction === 'right' ? 'translate-x-full' : direction === 'left' ? '-translate-x-full' : ''}`}>
          <ProductCard
            image={products[currentProductIndex].image}
            title={products[currentProductIndex].title}
            description={products[currentProductIndex].description}
            price={products[currentProductIndex].price}
          />
        </div>
        <button
          className="absolute right-2 md:right-4 bg-white p-4 rounded-full shadow-lg text-2xl"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Products;