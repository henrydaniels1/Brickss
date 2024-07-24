// src/components/Navbar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      <div className="container md:w-[95%] w-[97%] mx-auto py-4 flex justify-between items-center z-10">
        <div className="text-black text-lg font-bold z-10  flex items-center">
          {/* Logo */ }
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-[#2947A9]"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-1 text-xl font-extrabold tracking-wide text-[#ecef39] uppercase">
              BRICKS&STEELS
            </span>
          </a>
        </div>
        <div className="hidden md:flex space-x-12 z-10 items-center">
         
              <div className=" hover:text-gray-700 hover:scale-110 font-bold text-black"> <Link to="/">Home</Link></div>
              <div className=" hover:text-gray-700 hover:scale-110 font-bold text-black"><Link to="/gallery">Gallery</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-bold text-black"> <Link to="/portfolio">Project</Link></div>
              <div className=" hover:text-gray-700 hover:scale-110 font-bold text-[#2947A9] py-2 px-2 rounded-lg"> <Link to="/contact">Contact Us</Link></div>
        </div>

        <div className="md:hidden z-10 flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none z-10 text-2xl font-extrabold"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden flex flex-col space-y-2 mt-4 z-10 items-center"
        >

              <div className=" hover:text-gray-700 hover:scale-110 font-bold text-black z-10"> <Link to="/">Home</Link></div>
              <div className=" hover:text-gray-700 hover:scale-110 font-bold text-black z-10"><Link to="/gallery">Gallery</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-bold text-black z-10"> <Link to="/portfolio">Project</Link></div>
              <div className=" hover:text-gray-700 hover:scale-110 font-bold text-black z-10"> <Link to="/contact">Contact</Link></div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
