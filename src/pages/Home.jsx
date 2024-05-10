import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import backgroundImage from '../assets/coudounat.jpeg';
import backgroundImage2 from '../assets/petillant.jpeg';

export const Home = () => {
    const slides = [
        { id: 1, url: backgroundImage },
        { id: 2, url: backgroundImage2 },
    ];


    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    const getBackgroundSize = () => {
      if (windowWidth < 768) { // pour les tablettes et plus petits
        return '150%'; // zoom plus grand pour éviter trop de rétrécissement
      } else {
        return '110%'; // zoom standard pour les grands écrans
      }
    };

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
                                backgroundSize: getBackgroundSize(),
                                backgroundRepeat: 'no-repeat',
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
              
                <div className="absolute top-80 left-1/2 transform -translate-x-1/2 text-6xl text-white">
                    <p>DECOUVREZ NOTRE</p> {/* Texte ajustable */}
                    <p className='text-center'>COLLECTION</p>
                </div>

                    <button className="btn btn-xs  top-100 sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>


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
