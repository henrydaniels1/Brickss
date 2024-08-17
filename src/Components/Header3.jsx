

import { useEffect, useRef, useState } from 'react';
import Image2 from '../assets/b1.jpg'; 
import Image3 from '../assets/b2.jpg'; 
import Image4 from '../assets/b3.jpg'; 
import Image5 from '../assets/b4.jpg'; 
import { Link } from "react-router-dom";

export const Content1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:w-[95%] w-[97%] lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        
        {[Image2, Image3, Image4, Image5].map((image, index) => (
          <a href="/" aria-label="View Item" key={index}>
            <div
              className={`relative overflow-hidden transition-all duration-1000 ease-out transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={image}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  {index === 0 && "Mona Lisa"}
                  {index === 1 && "The Starry Night"}
                  {index === 2 && "The Kiss"}
                  {index === 3 && "The Harvesters"}
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  {index === 0 && "Painted between 1503 and 1517, Da Vinci’s alluring portrait has been dogged by two questions since the day it was made: Who’s the subject and why is she smiling?"}
                  {index === 1 && "Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in 1889."}
                  {index === 2 && "Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s fin-de-siècle portrayal of intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian variant of Art Nouveau."}
                  {index === 3 && "Bruegel’s fanfare for the common man is considered one of the defining works of Western art. This composition was one of six created on the theme of the seasons."}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center">
        <Link to='./portfolio' className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
          View Project
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
