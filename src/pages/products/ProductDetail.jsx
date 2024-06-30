import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import Button from '../../components/Buttons/Button'; 
import QuantitySelector from '../../components/Buttons/QuantitySelector'; 

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const stockWidth = `${product.stock}%`;
  const stockColor = product.stock > 50 ? 'bg-green-600' : 'bg-red-600';

  return (
    <div className=" mx-auto px-20 py-20 pt-64">
      <div className="flex flex-col md:flex-row items-start md:items-start">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img className="max-h-[500px] w-auto object-contain md:max-h-[700px]" src={product.imageLg} alt={product.title} />
        </div>
        <div className="md:w-1/2 md:ml-8 max-w-full">
          <h1 className="text-3xl font-bold  md:text-left">{product.title}</h1>
          <p className="text-xl text-gray-700 mt-2 md:text-left">{product.price}</p>
          <hr className="my-4 border-gray-300" />
          <div className="mt-4 md:text-left">
            <p className="font-bold">Stock - {product.quantitytitle}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
              <div className={`h-2.5 rounded-full ${stockColor}`} style={{ width: stockWidth }}></div>
            </div>
          </div>
          <div className="mt-4 md:text-left">
            <p className="font-bold">Quantity</p>
            <div className="flex md:justify-start mt-2">
                <QuantitySelector />
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-4 w-full">
            <Button text="Cliquez ici" onClick={() => console.log("Bouton cliqué!")} variant="black" className="w-full" />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="mt-2 text-gray-700 break-words">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
