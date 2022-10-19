import React from 'react';
import { motion } from 'framer-motion';
import { MediaQuery } from '../../core/utils/use-media-query';

import WhatWeDoBg from '../../public/bg/home-section-bg.svg';
import { WhatWeDoCopy } from '../../core/UI-Components/copy';

import {
  SalesAutomationSVG,
  SVGRotation,
} from '../../core/Animation/WhatWeDo-animation';

import {
  ScrollUp,
  revealContainer,
} from '../../core/Animation/motion-variants';

const WhatWeDo = () => {
  const isMobile = MediaQuery(500);

  return (
    <section className="relative w-full py-8 tab:py-20 bg-white">
      <div className="absolute z-10 -left-[2.5%] w-[105vw] -top-[20px] sm:-top-[40px] tab:-top-[50px]">
        <WhatWeDoBg />
      </div>
      <motion.div
        className="max-w-[1680px] mx-auto w-full flex flex-col justify-center items-start"
        viewport={{ amount: 0.2, once: true }}
        layout
        variants={ScrollUp}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          className="z-10 mx-auto sm:max-w-[480px] tab:max-w-[680px] md:max-w-[800px] lg:max-w-[900px] tab:mb-5 text-secondary text-center"
          variants={revealContainer}
        >
          <motion.h2 className="bg-white mb-2 xs:mb-3 sm:mb-3 md:mb-4 mx-auto p-1 lg:p-6 max-w-[90%] font-bold sm:font-extrabold text-xl xs:text-3xl sm:text-[33px] tab:text-5xl lg:text-6xl text-secondary border-4 border-secondary rounded-xl">
            {WhatWeDoCopy.title}
          </motion.h2>
          <motion.p className="w-[80%] tab:w-4/6 mx-auto font-semibold md:font-medium text-base sm:text-base tab:text-lg lg:text-xl text-center">
            {WhatWeDoCopy.description}
          </motion.p>
        </motion.div>
        <motion.div className="mt-12 tab:mt-10 mx-auto lg:w-[1100px] flex tab:flex-row flex-col justify-start tab:items-start gap-8 tab:gap-0 tab:justify-evenly items-center">
          <div className="tab:max-w-[30%] flex flex-col justify-start items-center gap-y-1 sm:gap-y-2">
            <SalesAutomationSVG
              fill="#007cc7"
              size={isMobile ? '60px' : '90px'}
            />
            <p className="pt-3 w-[80%] text-center text-secondary text-sm sm:text-sm tab:text-base">
              {WhatWeDoCopy.service1}
            </p>
          </div>
          <div className="tab:max-w-[30%] flex flex-col justify-start items-center gap-y-1 sm:gap-y-2">
            <SalesAutomationSVG
              fill="#007cc7"
              size={isMobile ? '60px' : '90px'}
            />
            <p className="pt-3 w-[80%] tab:w-3/4 text-center text-secondary text-sm sm:text-sm tab:text-base">
              {WhatWeDoCopy.service2}
            </p>
          </div>
          <div className="tab:max-w-[30%] flex flex-col justify-start items-center gap-y-1 sm:gap-y-2">
            <SVGRotation fill="#007cc7" size={isMobile ? '60px' : '90px'} />
            <p className="pt-3 w-[80%] tab:w-3/4 text-center text-secondary text-sm sm:text-sm tab:text-base">
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
