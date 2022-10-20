import { motion } from 'framer-motion';

export const SalesAutomationSVG = ({ fill, altFill, size }) => {
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
        fill={altFill}
      />
    </motion.svg>
  );
};

export const WebDesignServicesAnim = ({ fill, altFill, size }) => {
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
        stroke={altFill}
        strokeMiterlimit="10"
        strokeWidth="10px"
      />

      <motion.path
        d="M80.69,42.23h3.57l-11.87,35.1h-3.16l-7.03-24.35-6.98,24.35h-3.16l-11.87-35.1h3.57l9.83,29.85,7.18-24.76h2.9l7.18,24.91,9.83-30.01Z"
        fill={altFill}
      />
      <motion.path
        d="M140.7,42.23h3.57l-11.87,35.1h-3.16l-7.03-24.35-6.98,24.35h-3.16l-11.87-35.1h3.57l9.83,29.85,7.18-24.76h2.9l7.18,24.91,9.83-30.01Z"
        fill={altFill}
      />
      <motion.path
        d="M203.56,42.23h3.57l-11.87,35.1h-3.16l-7.03-24.35-6.98,24.35h-3.16l-11.87-35.1h3.57l9.83,29.85,7.18-24.76h2.9l7.18,24.91,9.83-30.01Z"
        fill={altFill}
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

export const CRMServicesAnim = ({ size }) => {
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 494 478.56"
        width={size}
        height={size}
      >
        <rect width="494" height="69.47" fill="#0d1e34" />
        <rect y="61.75" width="494" height="347.34" fill="none" />
        <rect
          x="154.38"
          y="293.31"
          width="192.97"
          height="185.25"
          fill="none"
        />
        <g>
          <rect width="494" height="69.47" fill="#0d1e34" />
          <g clip-path="url(#b)">
            <path
              d="M15.44,69.47H494V36.22c0-2.94-2.41-5.35-5.35-5.35h-219.53L229.87,1.09c-.96-.71-2.14-1.09-3.31-1.09H5.31C2.38,0,0,2.38,0,5.31V69.47H15.44"
              fill="#0d1e34"
            />
          </g>
        </g>
        <g clip-path="url(#c)">
          <path
            d="M494,69.47H0v3.38s1.46,.56,1.5,.84c-.04,.28-.08,.56-1.5,.84V392.93c1.42,6.11,6.37,11.06,12.4,8.44H230.53l-6.67-7.72h53.07l-6.67,7.72h214.07c6.03,2.61,10.98-2.33,9.68-8.44V74.53c1.3-.28,1.26-.56,1.22-.84,.04-.28-1.22-.84-1.22-.84v-3.38"
            fill="#007cc7"
          />
        </g>
        <path
          d="M33.66,43.42c-6.59,0-11.9-5.39-11.9-12.02s5.31-11.98,11.9-11.98,11.94,5.35,11.94,11.98-5.35,12.02-11.94,12.02"
          fill="#22c55e"
        />
        <path
          d="M68.52,43.42c-6.59,0-11.94-5.39-11.94-12.02s5.35-11.98,11.94-11.98,11.94,5.35,11.94,11.98-5.35,12.02-11.94,12.02"
          fill="#22c55e"
        />
        <path
          d="M103.37,43.42c-6.59,0-11.94-5.39-11.94-12.02s5.35-11.98,11.94-11.98,11.9,5.35,11.9,11.98-5.31,12.02-11.9,12.02"
          fill="#22c55e"
        />
        <motion.g
          initial={{ x: -150 }}
          animate={{
            x: 150,
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 2,
            },
          }}
        >
          <path
            d="M248.5,265.61c-51.82,0-93.83,13.27-93.83,29.67,0,1.13,.2,2.25,.6,3.38,5.31,14.75,45.03,26.25,93.23,26.25s87.92-11.5,93.23-26.25c.4-1.13,.6-2.25,.6-3.38,0-16.4-42.01-29.67-93.83-29.67"
            fill="#0d1e34"
          />
          <g>
            <path
              d="M270.16,418.18c0-2.73,.76-5.43,2.21-7.76l68.46-109.39h-.6c-5.31,14.75-45.03,26.25-93.23,26.25s-87.92-11.5-93.23-26.25h-.6l68.46,109.39c1.45,2.33,2.21,5.03,2.21,7.76v46.75c0,.44,.2,.84,.56,1.17s.72,.64,1.01,1.01c3.98,4.7,16.12,15.08,44.74,11.78l-.44-.8c.28-.28,.44-.6,.44-1.01v-60.26"
              fill="#0d1e34"
            />
          </g>
        </motion.g>
        <g>
          <path
            d="M84.76,168.49c0-29.01,23.18-53.23,52.34-53.23,17.5,0,32.75,8.38,42.02,21.38l-15.85,11.52c-5.83-8.22-14.5-13.31-25.42-13.31-18.69,0-32.3,15.25-32.3,33.64s13.46,33.8,32.15,33.8c11.07,0,19.74-5.08,25.57-13.31l15.85,11.51c-9.27,13.01-24.52,21.38-42.02,21.38-29.16,0-52.34-24.08-52.34-53.39Z"
            fill="#fff"
          />
          <path
            d="M247.9,220.08l-24.52-36.94h-7.03v36.94h-20.79V117.05h41.12c23.63,0,33.8,16.75,33.8,33.65,0,14.65-10.32,29.01-24.82,31.55l26.62,37.83h-24.38Zm-31.55-84.64v30.95h16.6c11.66,0,16.6-7.03,16.6-15.25s-5.23-15.7-14.95-15.7h-18.24Z"
            fill="#fff"
          />
          <path
            d="M409.24,220.08h-21.23l-7.48-63.85-25.12,52.19h-16.3l-25.42-52.19-7.48,63.85h-21.23l12.71-103.03h17.64l31.85,67.59,31.55-67.59h17.94l12.56,103.03Z"
            fill="#fff"
          />
        </g>
      </motion.svg>
    </>
  );
};
