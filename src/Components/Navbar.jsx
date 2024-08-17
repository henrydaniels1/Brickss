

// src/components/Navbar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="container md:w-[95%] w-[97%] px-0 h-full mx-auto flex justify-between items-center z-10">
        <div className="text-black text-lg h-full py-0 font-bold z-10 flex items-center">
          {/* Logo */}
          <div className="w-20 h-20 py-0">
            <img src={Logo} alt="Logo" className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="hidden md:flex space-x-12 z-10 items-center py-4">
          {["/", "/gallery", "/portfolio", "/contact"].map((path, index) => {
            const labels = ["Home", "Gallery", "Project", "Contact Us"];
            return (
              <motion.div
                key={path}
                whileHover={{ scale: 1.1, color: "#4A4A4A", borderBottom: ".5px solid #007BFF" }}
                transition={{ duration: 0.3 }}
                className={`font-bold text-black relative pb-1 cursor-pointer`}
              >
                <Link to={path} className="z-10">{labels[index]}</Link>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 origin-bottom scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
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
          {["/", "/gallery", "/portfolio", "/contact"].map((path, index) => {
            const labels = ["Home", "Gallery", "Project", "Contact"];
            return (
              <motion.div
                key={path}
                whileHover={{ scale: 1.1, color: "#4A4A4A", borderBottom: "2px solid #007BFF" }}
                transition={{ duration: 0.3 }}
                className={`font-bold text-black relative pb-2 cursor-pointer`}
              >
                <Link to={path} className="z-10">{labels[index]}</Link>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 origin-bottom scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
