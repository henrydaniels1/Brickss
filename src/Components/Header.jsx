// import ArchiBg from '../assets/hou.mp4'


// import ArchiBg from '../assets/Hero.png'


// export default function Header ()
// {
  

  

//   return (
//      <div className='h-screen  relative overflow-hidden  md:w-[95%] w-[97%] mx-auto'>
//           {/* <video src={ ArchiBg } autoPlay loop muted className=' absolute top-0 left-0 w-full h-full object-cover' /> */}
//           <img src={ArchiBg} className=' absolute top-0 left-0 w-full h-full object-cover object-center '/>
         
//       <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
//       <h1 className="text-white lg:text-5xl md:text-[2.8rem] text-[1.3rem] font-bold">Architecture.Design.Visualization</h1>
//       </div>
//     </div>
//   )
// }

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
    }, 4000); // Change image every 3 seconds

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
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
}

