import React from 'react'
import backgroundImage from '../assets/foret.avif'; // Remplacez par le chemin réel de votre image


export const Product = () => {
  return (
      <div className=""> {/* Ajout d'un padding en haut pour compenser la navbar */}
        <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="text-white text-4xl font-bold p-10">
            Shop
          </div>
          {/* ... le reste du contenu de votre page produit ... */}
        </div>
      </div>
  )
}
