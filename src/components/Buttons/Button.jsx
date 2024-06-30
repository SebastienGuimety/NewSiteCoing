import React from 'react';

// Props destructuring pour passer du texte et des méthodes onClick facultatives
const Button = ({ text, onClick, className, variant }) => {
  const baseStyle = "py-4 px-12 sm:py-4 sm:px-12 md:py-5 md:px-16 xl:py-5 xl:px-16";
  
  let variantStyle;

  switch (variant) {
    case 'white':
      variantStyle = "bg-white hover:bg-gray-300 text-black";
      break;
    case 'black':
      variantStyle = "bg-black hover:bg-gray-700 text-white";
      break;
    case 'blue':
      variantStyle = "bg-blue-500 hover:bg-blue-700 text-white";
      break;
    case 'gray':
      variantStyle = "bg-gray-500 hover:bg-gray-700 text-white";
      break;
    default:
      variantStyle = "bg-white hover:bg-gray-300 text-black";
      break;
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
