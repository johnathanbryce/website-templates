'use client'
import React, { useState, useEffect } from 'react';
import styles from './SlideShowAuto.module.css'
import Image from 'next/image';
// images
import slide1 from '../../../public/images/slide1.jpg'
import slide2 from '../../../public/images/slide2.jpg'
import slide3 from '../../../public/images/slide3.jpg'
import slide4 from '../../../public/images/slide4.jpg'

// slides could be exported to a slidesList.js file in a "lists" folder 
const slides = [
  {
    image: slide1,
    header: 'Slide 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum semper magna, nec ullamcorper velit viverra nec.'
  },
  {
    image: slide2,
    header: 'Slide 2',
    text: 'Quisque luctus diam nec finibus eleifend. Morbi vel purus in est pulvinar efficitur.'
  },
  {
    image: slide3,
    header: 'Slide 3',
    text: 'Praesent consequat libero in mi facilisis, sed bibendum enim dictum. Maecenas maximus vestibulum dignissim..'
  },
  {
    image: slide4,
    header: 'Slide 4',
    text: 'Nunc aliquet leo et mi hendrerit, id efficitur purus congue. Nulla vel velit ut lectus congue vehicula.'
  },
  // Add more slides as needed
];

const SlideShowAuto = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Automatically move to the next slide after a certain interval
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => {
      // Clean up the interval on component unmount
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.slideshow}>
      {slides.map((slide, index) => (
           <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}>
          <Image key={index} src={slide.image} alt="" className={styles.slideImage} />
          <div className={styles.overlay}>
            <h2> {slide.header} </h2>
            <p> {slide.text} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideShowAuto;
