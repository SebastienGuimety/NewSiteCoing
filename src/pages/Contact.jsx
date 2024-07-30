import React from 'react';
import imageright from '../assets/img/coudounat.jpeg';
import Button from '../components/Buttons/Button';

const ContactPage = () => {
    return (
      <div className=" mx-auto py-16 md:px-10 md:pt-72 2xs:pt-24 ">
        <div className="flex flex-wrap">
          {/* Introduction de la boutique et Formulaire de contact */}
          <div className="w-full md:w-1/2 p-8">
            <img src={imageright} alt="Boutique et Bouteilles" className="w-full h-full object-cover" />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-5xl font-bold mb-6">La boutique</h1>
            <p className="mb-6">
              Est installée au 60 rue du Faubourg Saint-Denis dans le 10e arrondissement, là où se tenaient historiquement les premières maisons de parfums.
              Dans ce quartier vivant où les influences underground et multiculturelles sont partout, la créativité peut s’exprimer en toute liberté.
            </p>
            <p className="mb-10">
              La boutique de la Distillerie de Paris est pensée tel un laboratoire centré sur les propositions sensorielles de Nicolas Julhès, autour de l’univers du parfum et des spiritueux mis en valeur par les fines sélections de produits utilisés dans ses compositions.
            </p>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Nom" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Numéro de téléphone" className="border p-2 w-full" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" className="border p-2 w-full h-32"></textarea>
              </div>
              <Button text="Cliquez ici" onClick={() => console.log("Bouton cliqué!")} variant="black" />
              </form>
          </div>
          {/* Image */}
          
        </div>
  
        <div className="flex flex-wrap mt-16">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Adresse</h2>
                <p>60 rue du Faubourg Saint-Denis,<br/>75010 Paris<br/>France</p>
            </div>
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Horaires</h2>
                <p>Du Mardi au Samedi<br/>12h00 - 14h30<br/>15h00 - 20h00</p>
            </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999789014812!2d2.3488!3d48.8718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e296d2b4f39%3A0x8c3c64c5bbd674c4!2s60%20Rue%20du%20Faubourg%20Saint-Denis%2C%2075010%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1633093798562!5m2!1sen!2sus"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                className="border border-gray-300 rounded"
            ></iframe>
            </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;