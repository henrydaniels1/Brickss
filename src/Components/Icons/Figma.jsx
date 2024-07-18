import { motion } from 'framer-motion';

export default function Figma() {
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
                  id="Layer_1"
                  height="32px"
                  width="32px"
        style={{ enableBackground: 'new 0 0 3000 3000' }}
        version="1.1"
        viewBox="0 0 3000 3000"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <style type="text/css">
          {`
            .st0{fill:#0ACF83;}
            .st1{fill:#A259FF;}
            .st2{fill:#F24E1E;}
            .st3{fill:#FF7262;}
            .st4{fill:#1ABCFE;}
          `}
        </style>
        <title/>
        <desc/>
        <path className="st0" d="M1083.333374,2750c230,0,416.666626-186.666748,416.666626-416.666748v-416.666626h-416.666626  c-230.000061,0-416.666687,186.666626-416.666687,416.666626S853.333313,2750,1083.333374,2750z" id="path0_fill"/>
        <path className="st1" d="M666.666687,1500c0-230,186.666626-416.666748,416.666687-416.666748H1500v833.333374  h-416.666626C853.333313,1916.666626,666.666687,1730,666.666687,1500z" id="path1_fill"/>
        <path className="st2" d="M666.666687,666.666626C666.666687,436.666656,853.333313,250,1083.333374,250H1500  v833.333252h-416.666626C853.333313,1083.333252,666.666687,896.666626,666.666687,666.666626z" id="path1_fill_1_"/>
        <path className="st3" d="M1500,250h416.666626c230.000122,0,416.666626,186.666656,416.666626,416.666626  s-186.666504,416.666626-416.666626,416.666626H1500V250z" id="path2_fill"/>
        <path className="st4" d="M2333.333252,1500c0,230-186.666504,416.666626-416.666626,416.666626S1500,1730,1500,1500  s186.666626-416.666748,416.666626-416.666748S2333.333252,1270,2333.333252,1500z" id="path3_fill"/>
      </svg>
    </motion.div>
    </div>
  )
}
