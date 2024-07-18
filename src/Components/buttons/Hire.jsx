import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hire() {
  return (
    <div>
       <motion.div className="bg-[#353DCC] rounded-lg hover:bg-purple-400 p-2 text-white font-semibold"
              initial={ { opacity: 0, y: -20 } } animate={ { opacity: 1, y: 0 } } transition={ { duration: 0.5 } }>
              <Link to="/about">Hire me</Link>
            </motion.div>
            
    </div>
  )
}
