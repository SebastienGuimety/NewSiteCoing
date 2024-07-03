import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const DropdownButton = ({ icon: Icon, title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <div
        className="flex items-center justify-between cursor-pointer text-gray-700 text-xl p-2 hover:bg-gray-100"
        onClick={onClick}
      >
        <div className="flex items-center">
          <Icon className="mr-2" />
          <span>{title}</span>
        </div>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600 p-2">
          {content}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
