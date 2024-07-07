import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../../redux/cartSlice';

const PanierCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center text-white">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p>{        console.log(item)}</p>
        <p>{(item.price * item.quantity).toFixed(2)} € <span className="text-gray-400">x {item.quantity}</span></p>
       
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-gray-200 text-black px-2 py-1 rounded" onClick={() => dispatch(incrementQuantity(item.id))}>
          +
        </button>
        <button className="bg-gray-200 text-black px-2 py-1 rounded" onClick={() => dispatch(decrementQuantity(item.id))}>
          -
        </button>
        <button className="text-white" onClick={() => dispatch(removeItem(item.id))}>
          <FaTrashAlt className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default PanierCard;