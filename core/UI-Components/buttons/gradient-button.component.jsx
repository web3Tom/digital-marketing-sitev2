import { motion } from 'framer-motion';

export const GradientButton = ({ link, buttonTarget, content, rounded }) => {
  return (
    <motion.a
      href={link}
      target={buttonTarget}
      className={`text-white text-center tracking-[.025em] text-xs sm:text-sm tab:text-sm tab:font-normal px-3 py-[5px] tab:py-[10px] tab:px-4 rounded-${rounded} bg-gradient-to-r from-sky-400 via-sky-600 to-primary-800 transition-all duration-500 bg-size-150 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200`}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
    >
      {content}
    </motion.a>
  );
};

export const GradientButtonGreen = ({
  link,
  buttonTarget,
  content,
  rounded,
}) => {
  return (
    <motion.a
      href={link}
      target={buttonTarget}
      className={`text-white text-center tracking-[.025em] text-xs sm:text-sm tab:text-sm tab:font-normal px-3 py-[5px] tab:py-[10px] tab:px-4 rounded-${rounded} bg-gradient-to-r from-green-400 via-green-600 to-secondary-800 transition-all duration-500 bg-size-150 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200`}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
    >
      {content}
    </motion.a>
  );
};
