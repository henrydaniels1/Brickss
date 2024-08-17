// import { motion } from 'framer-motion';

// export default function Hand() {
//   return (
//     <div>
//        <motion.svg
//       viewBox="0 0 256 256"
//       xmlns="http://www.w3.org/2000/svg"
//       initial={{ rotate: 0 }}
//       animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
//       transition={{
//         repeat: Infinity,
//         duration: 2,
//         ease: 'easeInOut',
//       }}
//       style={{ originX: '50%', originY: '50%' }}
//     >
//       <rect fill="none" height="25" width="25" />
//       <path d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9" fill="none" stroke="#FFD700" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" />
//       <path d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9" fill="none" stroke="#FFD700" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" />
//       <path d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1" fill="none" stroke="#FFD700" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" />
//       <path d="M81.1,240A110.3,110.3,0,0,1,48,204" fill="none" stroke="#FFD700" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" />
//       <path d="M176,31a51.7,51.7,0,0,1,45,26" fill="none" stroke="#FFD700" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" />
//     </motion.svg>
//     </div>
//   )
// }


import { motion } from 'framer-motion';

export default function Hand() {
  return (
    <div>
      <motion.svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
        style={{ originX: '50%', originY: '50%' }}
      >
        <rect fill="none" height="25" width="25" />
        <path
          d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9"
          fill="none"
          stroke="#FFD700"
          strokeLinecap="round"  // Fixed
          strokeLinejoin="round" // Fixed
          strokeWidth="12"       // Fixed
        />
        <path
          d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9"
          fill="none"
          stroke="#FFD700"
          strokeLinecap="round"  // Fixed
          strokeLinejoin="round" // Fixed
          strokeWidth="12"       // Fixed
        />
        <path
          d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1"
          fill="none"
          stroke="#FFD700"
          strokeLinecap="round"  // Fixed
          strokeLinejoin="round" // Fixed
          strokeWidth="12"       // Fixed
        />
        <path
          d="M81.1,240A110.3,110.3,0,0,1,48,204"
          fill="none"
          stroke="#FFD700"
          strokeLinecap="round"  // Fixed
          strokeLinejoin="round" // Fixed
          strokeWidth="12"       // Fixed
        />
        <path
          d="M176,31a51.7,51.7,0,0,1,45,26"
          fill="none"
          stroke="#FFD700"
          strokeLinecap="round"  // Fixed
          strokeLinejoin="round" // Fixed
          strokeWidth="12"       // Fixed
        />
      </motion.svg>
    </div>
  );
}
