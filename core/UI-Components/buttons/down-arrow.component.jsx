import { motion } from 'framer-motion';

export const DownArrowAnimation = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 173"
      width="90"
      height="90"
    >
      <motion.path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M299,21.71L280.12,2.83L149.5,133.46L18.88,2.83L0,21.71l130.62,130.62v0.01l18.87,18.88l0.01-0.01
	l0.01,0.01l18.87-18.88v-0.01L299,21.71z"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </motion.svg>
  );
};
