// src/components/Navbar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800  p-4 z-10 ">
      <div className="container mx-auto flex justify-between items-center z-10 ">
        <div className="text-white text-lg font-bold z-10">Logo</div>
        <div className="hidden md:flex space-x-12 z-10">
         
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white"> <Link to="/">Home</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white"><Link to="/about">Gallery</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white"> <Link to="/portfolio">Project</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white"> <Link to="/contact">Contact</Link></div>
        </div>
        <div className="md:hidden z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none z-10"
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
          {/* <a href="#" className="text-gray-300 hover:text-white z-10">Home</a>
          <a href="#" className="text-gray-300 hover:text-white z-10">About</a>
          <a href="#" className="text-gray-300 hover:text-white z-10">Services</a>
          <a href="#" className="text-gray-300 hover:text-white z-10">Contact</a> */}
                   <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white z-10"> <Link to="/">Home</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white z-10"><Link to="/about">Gallery</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white z-10"> <Link to="/portfolio">Project</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold text-white z-10"> <Link to="/contact">Contact</Link></div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
