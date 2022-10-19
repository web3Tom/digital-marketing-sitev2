import { motion } from 'framer-motion';

export const GradientButtonSecondary = ({
  link,
  buttonTarget,
  content,
  minWidth,
  rounded,
  padding,
  textSize,
}) => {
  return (
    <motion.a
      href={link}
      target={buttonTarget}
      className={`${minWidth} rounded-${rounded} ${padding} ${textSize} text-white text-center tracking-[.025em] drop-shadow-lg bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-size-150 duration-100 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-secondary-200`}
      initial={{ y: 0 }}
      whileHover={{ y: -10 }}
    >
      {content}
    </motion.a>
  );
};

export const GradientButtonPrimary = ({
  link,
  buttonTarget,
  content,
  minWidth,
  rounded,
  padding,
  textSize,
  border,
}) => {
  return (
    <motion.a
      href={link}
      target={buttonTarget}
      className={`${minWidth} rounded-${rounded} ${padding} ${textSize} ${border} text-white text-center tracking-[.025em] drop-shadow-lg bg-gradient-to-r from-green-400 via-green-600 to-primary duration-100 bg-size-150 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-primary-200`}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
    >
      {content}
    </motion.a>
  );
};

export const ButtonBlue = ({ link, buttonTarget, content, rounded }) => {
  return (
    <a
      href={link}
      target={buttonTarget}
      className={`rounded-${rounded} text-white text-center tracking-[.025em] px-3 py-[5px] tab:py-[10px] tab:px-4 drop-shadow-lg bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-200`}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
    >
      {content}
    </a>
  );
};

export const ButtonGreen = ({ link, buttonTarget, content, rounded }) => {
  return (
    <a
      href={link}
      target={buttonTarget}
      className={`rounded-${rounded} text-white text-center tracking-[.025em] px-3 py-[5px] tab:py-[10px] tab:px-4 drop-shadow-lg bg-primary focus:ring-4 focus:outline-none focus:ring-primary`}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
    >
      {content}
    </a>
  );
};

export const ButtonBlueAlt = ({
  link,
  buttonTarget,
  content,
  minWidth,
  rounded,
  padding,
  textSize,
  border,
}) => {
  return (
    <motion.a
      href={link}
      target={buttonTarget}
      className={`${minWidth} rounded-${rounded} ${padding} ${textSize} ${border} text-white text-center tracking-[.025em] drop-shadow-lg bg-transparent border-secondary rounded-lg focus:ring-4 focus:outline-none focus:ring-secondary hover:bg-secondary hover:text-white hover:scale-105`}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
    >
      {content}
    </motion.a>
  );
};

export const ButtonGreenAlt = ({
  link,
  buttonTarget,
  content,
  minWidth,
  rounded,
  padding,
  textSize,
  border,
}) => {
  return (
    <motion.a
      href={link}
      target={buttonTarget}
      className={`${minWidth} rounded-${rounded} ${padding} ${textSize} ${border} text-primary text-center tracking-[.025em] drop-shadow-lg bg-transparent border-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-primary hover:bg-primary hover:text-white hover:scale-105`}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
    >
      {content}
    </motion.a>
  );
};
