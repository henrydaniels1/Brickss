import { motion } from 'framer-motion';


export default function Cs() {
  return (
    <div>
      <motion.div
      className="w-32 h-32" // Adjust the size as needed
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <svg
        fill="none"
        height="32px"
        viewBox="0 0 24 24"
        width="32px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.50159 0H10.0797V1.07812H8.57971V2.15625H10.0797V3.23438H7.50159V0Z"
          fill="black"
        />
        <path
          d="M10.5953 0H13.1735V0.9375H11.6735V1.125H13.1735V3.28125H10.5953V2.29688H12.0953V2.10938H10.5953V0Z"
          fill="black"
        />
        <path
          d="M13.6891 0H16.2672V0.9375H14.7672V1.125H16.2672V3.28125H13.6891V2.29688H15.1891V2.10938H13.6891V0Z"
          fill="black"
        />
        <path
          clipRule="evenodd"
          d="M11.9912 24L5.04739 22.0723L3 4.71655H21L18.9541 22.0696L11.9912 24ZM7.04736 12.5727L7.23814 14.7013L14.6153 14.7013L14.3682 17.4619L11.9941 18.1027L11.992 18.1034L9.62135 17.4633L9.4698 15.7656H7.33301L7.63123 19.1079L11.9915 20.3183L16.3579 19.1078L16.8901 13.1443L16.9421 12.5727L17.3264 8.26428H6.66406L6.85756 10.3929H14.9936L14.7999 12.5727L7.04736 12.5727Z"
          fill="black"
          fillRule="evenodd"
        />
      </svg>
    </motion.div>
    </div>
  )
}
