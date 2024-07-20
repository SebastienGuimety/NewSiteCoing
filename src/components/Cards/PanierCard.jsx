import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../../redux/cartSlice';
import PlusIcon from '../../assets/svgs/PlusIcon';
import MinusIcon from '../../assets/svgs/MinusIcon';
import { PiTrashLight } from "react-icons/pi";

const PanierCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center text-white">
      <img src={item.image} alt={item.title} className="w-20 h-28 object-contain" />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p>{        console.log(item)}</p>
        <p>{ item.price } € <span className="text-gray-400">x {item.quantity}</span></p>
       
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => dispatch(incrementQuantity(item.id))}
          className="text-white px-2 py-2 flex items-center justify-center transition-colors duration-700 hover:bg-gray-800"
        >
          <PlusIcon size={20} />
        </button>
        
        <button
          onClick={() => dispatch(decrementQuantity(item.id))}
          className="text-white px-2 py-2 flex items-center justify-center transition-colors duration-700 hover:bg-gray-800"
        >
          <MinusIcon size={20} />
        </button>
        <button className="text-white" onClick={() => dispatch(removeItem(item.id))}>
          <PiTrashLight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default PanierCard;