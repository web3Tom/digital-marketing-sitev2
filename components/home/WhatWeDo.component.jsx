import React from 'react';
import { motion } from 'framer-motion';
import { MediaQuery } from '../../core/utils/use-media-query';

import WhatWeDoBg from '../../public/bg/home-section-bg.svg';
import { WhatWeDoCopy } from '../../core/UI-Components/copy';

import {
  SalesAutomationSVG,
  WebDesignServicesAnim,
  CRMServicesAnim,
} from '../../core/Animation/WhatWeDo-animation';

import {
  ScrollUp,
  revealContainer,
} from '../../core/Animation/motion-variants';

const WhatWeDo = () => {
  const isMobile = MediaQuery(750);

  return (
    <section className="relative w-full h-auto bg-white">
      <div className="absolute z-10 -left-[2.5%] w-[105vw] -top-[20px] sm:-top-[30px] tab:-top-[50px]">
        <WhatWeDoBg />
      </div>
      <motion.div
        className="max-w-[1680px] mx-auto pb-32 pt-16 sm:pb-28 sm:pt-20 tab:pt-20 tab:pb-40 md:pt-20 md:pb-40 w-full h-full flex flex-col justify-between tab:justify-center items-start tab:items-center"
        viewport={{ amount: 0.2, once: true }}
        layout
        variants={ScrollUp}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          className="sm:max-w-[480px] tab:max-w-[680px] md:max-w-[800px] lg:max-w-[900px] mx-auto text-gray-600 text-center"
          variants={revealContainer}
        >
          <motion.h2 className="mb-3 xs:mb-4 md:mb-5 mx-auto p-1 lg:p-6 max-w-[90%] font-bold sm:font-extrabold text-xl xs:text-3xl sm:text-[33px] tab:text-5xl lg:text-6xl text-gray-600 border-4 border-gray-600 md:border-none rounded-xl">
            {WhatWeDoCopy.title}
          </motion.h2>
          <motion.p className="w-[90%] tab:w-4/6 mx-auto text-center font-bold text-xl leading-8 md:text-2xl lg:text-3xl">
            {WhatWeDoCopy.description}
          </motion.p>
        </motion.div>
        <motion.div className="mx-auto h-full tab:h-auto lg:w-[1100px] mt-20 sm:mt-16 tab:mt-20 md:mt-32 flex flex-col tab:flex-row justify-evenly tab:justify-center items-center tab:items-start gap-10 sm:gap-16 tab:gap-0">
          <div className="tab:max-w-[33%] flex flex-col justify-start items-center">
            <CRMServicesAnim size={isMobile ? '70px' : '100px'} />
            <p className="pt-4 tab:w-[85%] text-center text-gray-600 font-semibold text-xl">
              {WhatWeDoCopy.service1}
            </p>
          </div>
          <div className="tab:max-w-[33%] flex flex-col justify-start items-center ">
            <SalesAutomationSVG
              fill="#007cc7"
              altFill="#0d1e34"
              size={isMobile ? '60px' : '100px'}
            />
            <p className="pt-4 tab:w-[85%] text-center text-gray-600 font-semibold text-xl">
              {WhatWeDoCopy.service2}
            </p>
          </div>
          <div className="tab:max-w-[33%] flex flex-col justify-start items-center">
            <WebDesignServicesAnim
              fill="rgb(75,85,99)"
              altFill="#007cc7"
              size={isMobile ? '60px' : '100px'}
            />
            <p className="pt-4 tab:w-[85%] text-center text-gray-600 font-semibold text-xl">
              {WhatWeDoCopy.service3}
            </p>
          </div>
        </motion.div>
        <div className="text-lg text-secondary"></div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;

// We get it. Technology and marketing is{' '}
//             <b className="italic underline">hard.</b>
