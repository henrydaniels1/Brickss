// src/components/ReusableMotionDiv.jsx
import { motion } from 'framer-motion';






// eslint-disable-next-line react/prop-types
const Cv = ({ text  }) => {
  return (
    <motion.div
          className={ "border border-purple-700 hover:text-white hover:bg-purple-500  font-semibold rounded-lg p-2" }
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
          { text }
         
    </motion.div>
  );
};

export default Cv;
