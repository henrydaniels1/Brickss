import Image2 from '../assets/b1.jpg'; 
import Image3 from '../assets/b2.jpg'; 
import Image4 from '../assets/b3.jpg'; 
import Image5 from '../assets/b4.jpg'; 
import { Link } from "react-router-dom";



export const Content1 = () =>
{
  return (
    <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:w-[95%] w-[97%]  lg:py-20">
      {/* <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            There is no must in art
            <br className="hidden md:block" />
            because art is free.
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
         says Foucault; however, according to Reicher, it is
          not so much class that is dead, but rather the absurdity, and some
          would say the paradigm, of class. However, the subject is interpolated
          into a postpatriarchialist dialectic theory that includes
          consciousness as a totality.
        </p>
      </div> */}
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              
              
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Image2}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
              <p className="text-sm tracking-wide text-gray-300">
                Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                been dogged by two questions since the day it was made: Who’s
                the subject and why is she smiling?
              </p>
            </div>
          </div>
              </a>
              

        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src={Image3}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                The Starry Night
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Vincent Van Gogh’s most popular painting, The Starry Night was
                created by Van Gogh at the asylum in Saint-Rémy, where he’d
                committed himself in 1889.
              </p>
            </div>
          </div>
              </a>
              

        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Image4}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
              <p className="text-sm tracking-wide text-gray-300">
                Opulently gilded and extravagantly patterned, The Kiss, Gustav
                Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                Symbolism and Vienna Jugendstil, the Austrian variant of Art
                Nouveau.
              </p>
            </div>
          </div>
              </a>
              

        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Image5}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                The Harvesters
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Bruegel’s fanfare for the common man is considered one of the
                defining works of Western art. This composition was one of six
                created on the theme of the seasons.
              </p>
            </div>
          </div>
              </a>
              

      </div>
      <div className="text-center">
       
              <Link to='./portfolio' className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>View Project
                  <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg></Link>
      </div>
    </div>
  );
};