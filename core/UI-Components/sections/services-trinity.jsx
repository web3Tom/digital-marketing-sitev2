import React from 'react';
import { motion } from 'framer-motion';

const ServicesTrinity = () => {
  return (
    <motion.div className="w-full h-auto flex justify-around items-center">
      <div className="relative w-fit h-auto flex flex-col justify-center items-center cursor-pointer bg-transparent rounded-full">
        <motion.div
          className="w-32 h-32 flex flex-col justify-center items-center cursor-pointer bg-gradient-to-r from-primary-900 to-secondary-500 rounded-full"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-28 h-28 bg-white rounded-full"></div>
        </motion.div>
        <p className="absolute text-black text-md text-center">Whatsup</p>
      </div>
      <div className="relative w-fit h-auto flex flex-col justify-center items-center cursor-pointer bg-transparent rounded-full">
        <motion.div
          className="w-32 h-32 flex flex-col justify-center items-center cursor-pointer bg-gradient-to-r from-primary-900 to-secondary-500 rounded-full"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-28 h-28 bg-white rounded-full"></div>
        </motion.div>
        <p className="absolute text-black text-md text-center">Whatsup</p>
      </div>
      <div className="relative w-fit h-auto flex flex-col justify-center items-center cursor-pointer bg-transparent rounded-full">
        <motion.div
          className="w-32 h-32 flex flex-col justify-center items-center cursor-pointer bg-gradient-to-r from-primary-900 to-secondary-500 rounded-full"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-28 h-28 bg-white rounded-full"></div>
        </motion.div>
        <p className="absolute text-black text-md text-center">Whatsup</p>
      </div>
    </motion.div>
  );
};

export default ServicesTrinity;
