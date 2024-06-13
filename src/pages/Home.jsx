import React, { useState, useEffect, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import backgroundImage from '../assets/coudounat.jpeg';
import backgroundImage2 from '../assets/petillant.jpeg';

export const Home = () => {
    const slides = [
        { id: 1, url: backgroundImage },
        { id: 2, url: backgroundImage2 },
    ];


    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  // État pour stocker la largeur de la fenêtre

    const transitions = useTransition(index, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 800 },
        keys: index
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(current => (current + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (slideIndex) => {
        setIndex(slideIndex);
    };

    /** 
    const getBackgroundSize = useMemo(() => {
        console.log(windowWidth)
      if (windowWidth < 768) { // pour les tablettes et plus petits
        return 'cover'; // zoom plus grand pour éviter trop de rétrécissement
      } else {
        return '110%'; // zoom standard pour les grands écrans
      }
    }, [windowWidth]);
    */
    
    const getBackgroundPosition = (currentUrl) => {
      // Vérifiez si l'URL de l'image courante contient le mot "coudounat"
      if (currentUrl.includes('coudounat')) {
        return '90% 25%'; // Position pour coudounat
      } else {
        return '5% 18%'; // Position par défaut
      }
    };

    return (
        <>
            <div className='max-w-full h-screen relative bg-cover overflow-hidden '>
                {transitions((styles, i) => (
                    <>
                        <animated.div
                            style={{
                                ...styles,
                                backgroundImage: `url(${slides[i].url})`,
                                width: '100%',
                                height: '100%',
                                backgroundPosition: getBackgroundPosition(slides[i].url),
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',  // Ajouté pour fixer l'image de fond
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                        />
                        {/* Overlay pour assombrir l'image */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Réglez l'opacité ici
                        }}></div>
                    </>
                ))}
            </div>
            
                <div className="absolute top-80 left-1/2 transform -translate-x-1/2  text-white">
                    <p className='text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>DECOUVREZ NOTRE COLLECTION</p> {/* Texte ajustable */}
                    <div className='absolute hover:bg-gray-100 text-gray-800 top-40 left-1/2 transform -translate-x-1/2'>
                        <button className="bg-white hover:bg-gray-300 text-black py-5 px-16 sm:py-4 sm:px-12 md:py-5 md:px-16">
                            <div></div>ON CLIQUE
                        </button>   
                    </div>
                </div>

                <div className='absolute bottom-0 left-0 right-0 flex justify-center mb-8'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slide.id}
                            onClick={() => goToSlide(slideIndex)}
                            className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${index === slideIndex ? 'bg-gray-900' : 'bg-white'}`}
                        ></div>
                    ))}
                </div>

            <div>
                <p className='font-sans'> bah oui</p>
            </div>
        </>
    );
}
