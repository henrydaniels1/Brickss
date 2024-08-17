import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Make sure the path is correct relative to the `src` directory
import Image1 from '../assets/Hero.png'; 
import Image2 from '../assets/b1.jpg'; 
import Image3 from '../assets/b2.jpg'; 
import Image4 from '../assets/b3.jpg'; 
import Image5 from '../assets/b4.jpg'; 

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:w-[95%] w-full h-[38rem] mx-auto md:h-screen overflow-hidden">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className={`absolute w-full h-full object-fill transition-opacity duration-2000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={ { duration: 1 } }
        />
      ))}
      
      {/* Add the text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white lg:text-5xl md:text-[2.8rem] text-[1.7rem] lg:tracking-[1rem] md:tracking-[0.7rem] tracking-[0.1rem] font-bold">Architecture at it&apos;s best</h1>
      </div>
    </div>
  );
}
