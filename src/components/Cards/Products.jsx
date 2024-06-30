// src/pages/Products.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../../data/products';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Products = () => {

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
              key={product.id}
              id={product.id}
              image={product.imageSm}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        <div className={`flex flex-col items-center md:hidden transition-transform duration-500 transform ${direction === 'right' ? 'translate-x-full' : direction === 'left' ? '-translate-x-full' : ''}`}>
          <ProductCard
            id={products[currentProductIndex].id}
            key={products[currentProductIndex].id}
            image={products[currentProductIndex].imageSm}
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