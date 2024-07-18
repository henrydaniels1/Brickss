// src/components/ReusableMotionDiv.jsx
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const Book = ({ text  }) => {
  return (
    <motion.div
          className={ "bg-purple-500 rounded-lg p-2 hover:bg-purple-400 font-semibold text-white" }
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
          { text }
         
    </motion.div>
  );
};

export default Book;
