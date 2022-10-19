import { motion } from 'framer-motion';

export const SalesAutomationSVG = ({ fill, size }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <motion.line
        fill={fill}
        stroke={fill}
        stroke-width="5"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="2.5"
        y1="0"
        x2="2.5"
        y2="100"
      />
      <motion.line
        fill={fill}
        stroke={fill}
        stroke-width="5"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="100"
        y1="97.5"
        x2="0"
        y2="97.5"
      />
      <motion.rect
        fill={fill}
        x="15"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 71, height: 25 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.rect
        fill={fill}
        x="35"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 51, height: 45 }}
        transition={{
          duration: 1.5,
          delay: 0.4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.rect
        fill={fill}
        x="55"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 31, height: 65 }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.rect
        fill={fill}
        x="75"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 11, height: 85 }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.path
        d="M62,0.4L50.29,7.15l4.61,2.66c-2.96,6.12-8.68,15.9-19.02,24.97C24.76,44.55,13.46,48.95,7,50.94
	c1.06,0.35,2.13,0.69,3.19,1.04c5.97-1.51,17.57-5.28,28.87-15.09c10.75-9.33,16.11-19.69,18.59-25.49L62,13.91V0.4z"
        fill={fill}
      />
    </motion.svg>
  );
};

export const SVGRotation = ({ fill, size }) => {
  return (
    <motion.svg
      id="b"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 247.31 247.31"
      width={size}
      height={size}
    >
      <rect
        x=".53"
        y=".53"
        width="246.26"
        height="246.26"
        rx="26.89"
        ry="26.89"
        fill="none"
        stroke={fill}
        strokeMiterlimit="10"
        strokeWidth="10px"
      />

      <motion.path
        d="M80.69,42.23h3.57l-11.87,35.1h-3.16l-7.03-24.35-6.98,24.35h-3.16l-11.87-35.1h3.57l9.83,29.85,7.18-24.76h2.9l7.18,24.91,9.83-30.01Z"
        fill={fill}
      />
      <motion.path
        d="M140.7,42.23h3.57l-11.87,35.1h-3.16l-7.03-24.35-6.98,24.35h-3.16l-11.87-35.1h3.57l9.83,29.85,7.18-24.76h2.9l7.18,24.91,9.83-30.01Z"
        fill={fill}
      />
      <motion.path
        d="M203.56,42.23h3.57l-11.87,35.1h-3.16l-7.03-24.35-6.98,24.35h-3.16l-11.87-35.1h3.57l9.83,29.85,7.18-24.76h2.9l7.18,24.91,9.83-30.01Z"
        fill={fill}
      />
      <motion.g
        fill={fill}
        initial={{ x: 0 }}
        animate={{ x: -50 }}
        transition={{
          from: 0,
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1,
        }}
      >
        <rect
          x="154.83"
          y="147.42"
          width="16.79"
          height="58.54"
          transform="translate(-63.63 96.68) rotate(-27.84)"
        />
        <polygon points="133.16 119.77 131.26 170.01 175.72 146.53 133.16 119.77" />
      </motion.g>
    </motion.svg>
  );
};
