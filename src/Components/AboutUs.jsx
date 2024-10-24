

import { useEffect, useRef, useState } from 'react';
import Pic1 from '../assets/p1.jpeg'
import Pic2 from '../assets/p2.jpeg'
import Pic3 from '../assets/p3.jpeg'

export const HeaderS = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
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
    <div
      ref={sectionRef}
      className='py-16 pt-0 mx-auto md:w-[95%] w-[97%] md:px-0 lg:px-0'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div
          className={`flex flex-col justify-center transition-all duration-1000 ease-out transform ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-12'
          } md:pr-8 xl:pr-0 lg:max-w-lg`}>
          <div className='flex items-center reveal2 space-x-4 mb-4 rounded-full bg-teal-accent-400'>
            <svg className='text-teal-900 w-7 h-7' viewBox='0 0 24 24'>
              <polyline
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                points='8,5 8,1 16,1 16,5'
                strokeLinejoin='round'
              />
              <polyline
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                points='9,15 1,15 1,5 23,5 23,15 15,15'
                strokeLinejoin='round'
              />
              <polyline
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                points='22,18 22,23 2,23 2,18'
                strokeLinejoin='round'
              />
              <rect
                x='9'
                y='13'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                width='6'
                height='4'
                strokeLinejoin='round'
              />
            </svg>
            <p className='font-semibold tracking-wider text-teal-900 lg:text-4xl md:text-3xl text-2xl'>
              About Us
            </p>
          </div>
          <div className='max-w-xl mb-6'>
            {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Crafting Spaces That Inspire
              <br className="hidden md:block" />
              Your Vision, Our Design Expertise{' '}
              <span className="inline-block text-deep-purple-accent-400">
                Discover Architectural Excellence with Us
              </span>
            </h2> */}
            <p className='text-base text-gray-700 md:text-lg'>
              Bricks and Steels Construction Firm is a leading construction
              company dedicated to providing high-quality building solutions.
              With a commitment to excellence and innovation, we have been
              shaping skylines and constructing dreams since our inception. Our
              expertise spans residential, commercial, and industrial projects,
              ensuring that we meet the diverse needs of our clients with
              precision and professionalism.
            </p>
          </div>
          <div>
            <a
              href='/'
              aria-label=''
              className='inline-flex text-gray-500 items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
              Learn more
              <svg
                className='inline-block w-3 ml-2'
                fill='currentColor'
                viewBox='0 0 12 12'>
                <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`flex items-center justify-center transition-all duration-1000 ease-out transform ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-x-12'
          } -mx-4 lg:pl-8`}>
          <div className='flex flex-col items-end px-3'>
            <img
              className='object-cover mb-6 rounded shadow-lg h-48 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
              src={Pic1}
              alt=''
            />
            <img
              className='object-cover w-20 h-35 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
              src={Pic2}
            />
          </div>
          <div className='px-3'>
            <img
              className='object-cover w-40 h-52 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
              src={Pic3}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
};
