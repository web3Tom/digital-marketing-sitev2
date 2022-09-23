import { motion, AnimatePresence } from 'framer-motion';

const arrowVariants = {
  hover: { rotate: 0 },
  notHovered: {
    rotate: 270,
  },
};

const ArrowToggle = ({ open, keyVal }) => {
  return (
    <AnimatePresence>
      <motion.svg
        fill="white"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        key={keyVal}
        variants={arrowVariants}
        animate={open ? 'hover' : 'notHovered'}
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </motion.svg>
    </AnimatePresence>
  );
};

export default ArrowToggle;
