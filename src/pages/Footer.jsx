import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-20 ">
      <div className="container mx-auto px-8 pt-10 pb-11 flex flex-col md:flex-row justify-between">
        {/* Company Information */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <img src="path/to/your/logo.png" alt="Distillerie de Paris" className="mb-4"/>
          <p>SARL Soleu & Destre</p>
          <p>56 rue du Faubourg Saint Denis</p>
          <p>75010 Paris, France</p>
          <p>contact@AuCoingDuVentoux.com</p>
        </div>
        
        {/* Customer Service Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="font-bold mb-4">Service client</h3>
          <ul>
            <li><a href="#" className="hover:underline">Conditions générales de vente</a></li>
            <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:underline">Mentions légales</a></li>
          </ul>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="md:w-1/3">
          <h3 className="font-bold mb-4">Recevez toutes nos offres et actualités</h3>
          <input type="email" placeholder="Entre votre adresse email" className="bg-gray-700 text-white p-2 rounded mb-4 w-full"/>
          <button className="bg-white text-black py-2 px-4 rounded">S'inscrire</button>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className=" mt-8 py-16 md:px-48 2xs:px-2 text-center">
        <p>Nous avons une multitude d'idée pour enrichir ce projet et le développer. Nous souhaitons créer une vraie communauté où chaque membre enrichi notre dynamique de création. Plein de belles choses à entreprendre.</p>
       
      </div>
      <div className="border-t border-gray-700 mt-8 pt-5 mb-2 text-center">
        <p className="mt-4 text-sm">&copy; 2024, Distillerie de Paris. L'abus d'alcool est dangereux pour la santé. À consommer avec modération.</p>
        <p className="text-sm">Designed & developed by PANTEL AGENCY</p>
      </div>
    </footer>
  );
};

export default Footer;
