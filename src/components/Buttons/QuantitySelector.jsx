import React, { useState } from 'react';
import './QuantitySelector.css'; // Ensure you import the CSS file
import PlusIcon from '../../assets/svgs/PlusIcon';
import MinusIcon from '../../assets/svgs/MinusIcon';
const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="flex border border-gray-300 rounded">
      <button
        onClick={handleDecrement}
        className="bg-white text-black px-4 py-2 rounded-l-md focus:outline-none flex items-center justify-center transition-colors duration-700 hover:bg-gray-200"
      >
        <MinusIcon size={20} />

      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="w-16 text-center focus:outline-none"
      />
      <button
        onClick={handleIncrement}
        className="bg-white text-black px-4 py-2 rounded-r-md focus:outline-none flex items-center justify-center transition-colors duration-700 hover:bg-gray-200"
      >
        <PlusIcon size={20} />

      </button>
    </div>
  );
};

export default QuantitySelector;
