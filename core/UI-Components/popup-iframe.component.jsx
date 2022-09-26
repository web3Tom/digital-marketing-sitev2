import { useState } from 'react';
import { motion } from 'framer-motion';
import Iframe from 'react-iframe';

import React from 'react';

const PopupIframe = () => {
  const [popOpen, setPopOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setPopOpen(!popOpen)}
        className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] md:py-[6px] md:px-4  md:text-lg md:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
      >
        Open popUp
      </button>
      {popOpen && (
        <motion.div className="absolute z-40 w-[500xp] h-[500px] top-[calc(50vh-(250px))] left-[calc(50vw - (250px))] bg-gray-500">
          <Iframe
            url="https://api.leadconnectorhq.com/widget/form/aJIJVm6GaM9PSAfR7W9y"
            width="500px"
            height="500px"
            id="ghl-form"
            className=""
            display="initial"
            position="relative"
          />
          <button
            onClick={() => setPopOpen(false)}
            className="bg-red-800 rounded-full text-white text-1xl font-bold flex justify-center items-center w-9 h-9 absolute -top-1 -right-1"
          >
            X
          </button>
        </motion.div>
      )}
    </>
  );
};

export default PopupIframe;
