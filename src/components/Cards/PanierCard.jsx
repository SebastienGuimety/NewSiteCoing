import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartSlice';

const PanierCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center text-white">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p>{item.price} €</p>
      </div>
      <button className="ml-4 text-white" onClick={() => dispatch(removeItem(item.id))}>
        <FaTrashAlt className="text-xl" />
      </button>
    </div>
  );
};

export default PanierCard;