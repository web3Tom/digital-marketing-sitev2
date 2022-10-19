import React from 'react';
import { motion } from 'framer-motion';

import { HomeHeroCopy } from '../copy';

import {
  revealFastContainer,
  revealFastChild,
} from '../../Animation/motion-variants';

const ServiceSummary = () => {
  return (
    <motion.ul
      className="w-full h-auto flex justify-center items-center md:gap-x-16 lg:gap-x-20"
      variants={revealFastContainer}
      initial="hidden"
      animate="show"
    >
      <motion.li variants={revealFastChild} className="whitespace-nowrap">
        {HomeHeroCopy.bulletOne}
      </motion.li>
      <motion.li variants={revealFastChild} className="whitespace-nowrap">
        {HomeHeroCopy.bulletTwo}
      </motion.li>
      <motion.li variants={revealFastChild} className="whitespace-nowrap">
        {HomeHeroCopy.bulletThree}
      </motion.li>
    </motion.ul>
  );
};

export default ServiceSummary;
