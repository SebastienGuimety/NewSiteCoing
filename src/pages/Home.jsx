import React, { useState, useEffect, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import backgroundImage from '../assets/img/coudounat.jpeg';
import backgroundImage2 from '../assets/img/petillant.jpeg';
import Button from '../components/Buttons/Button'; // Assurez-vous que le chemin d'importation est correct
import { useTranslation, Trans } from 'react-i18next';
import ProductCard from '../components/Cards/ProductCard';
import Product from '../components/Cards/Products';


export const Home = () => {
    
    const { t, i18n } = useTranslation();

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
            
                <div className="absolute top-80 left-1/2 transform -translate-x-1/2 w-4/5 text-white">
                    <p className='text-center font-nunito font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{t('home.title')}</p> {/* Texte ajustable */}
                    <p className='relative font-nunito text-center top-6 text-lg sm:text-xl md:text-1xl lg:text-xl xl:text-2xl'>{t('home.description')} </p> {/* Texte ajustable */}

                    <div className='absolute hover:bg-gray-100 text-gray-800 top-40 sm:top-40  md:top-40 xl:top-48 left-1/2 transform -translate-x-1/2'>
                        <Button text="Cliquez ici" onClick={() => console.log("Bouton cliqué!")} variant="ok" />
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

            <div className='pt-10  pr-20 pl-20  xl:pt-40  xl:pr-20 xl:pl-20  md:pt-40  md:pr-20 md:pl-20  sm:pt-30  sm:pr-20 sm:pl-20'>
                <p className='text-center font-nunito text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'> 
                    <Trans i18nKey="home.section1.title"></Trans>
                </p>
                <p className='pt-10 text-center font-nunito text-xl xl:pl-40 xl:pr-40'>
                    {t('home.section1.description')}
                </p>
            </div>

            <div className='pt-10  pr-20 pl-20  xl:pt-40  xl:pr-20 xl:pl-20  md:pt-40  md:pr-20 md:pl-20  sm:pt-30  sm:pr-20 sm:pl-20'>
                <p className='text-center font-nunito text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'> 
                    <Trans i18nKey="home.section2.title"></Trans>
                </p>
                <p className='pt-10 text-center font-nunito text-xl xl:pl-40 xl:pr-40'>
                    {t('home.section2.description')}
                </p>
            </div>

            <div className='pt-10  xl:pt-10 xl:pr-20 xl:pl-20  md:pt-10  md:pr-10 md:pl-10  sm:pt-10  sm:pr-10 sm:pl-10 xs:pr-0 xs:pl-0'>
                <Product/>    
            </div>
        </>
    );
}
