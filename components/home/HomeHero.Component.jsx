import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import ServicesTrinity from '../../core/UI-Components/sections/services-trinity';

import {
  HillsSVGVariant,
  FlyInLeftContainer,
  FlyInLeftItem,
} from '../../core/Animation/motion-variants';
import { HillsD } from '../../core/Animation/hills-animation';
import {
  GradientButton,
  GradientButtonGreen,
} from '../../core/UI-Components/buttons/gradient-button.component';

const HomeHero = ({ executeScroll }) => {
  return (
    <section className="relative w-full h-[calc(100vh-100px)] sm:max-h-[850px] bg-transparent pt-8 tab:pt-10">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2560 645"
        width="100%"
        className="absolute z-0 -bottom-[30px]"
        variants={HillsSVGVariant}
        initial="hidden"
        animate="show"
      >
        {HillsD.map((path, i) => (
          <motion.path
            key={i}
            d={path.d}
            fill={path.style}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          />
        ))}
      </motion.svg>
      <div className="flex max-w-[1680px] w-full h-full mx-auto px-10 cus:px-0">
        <motion.div
          className="flex-1 z-10"
          variants={FlyInLeftContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="text-center tab:text-left sm:pb-2 tab:pb-2 md:pb-4 lg:pb-10 relative">
            <motion.p
              className="sm:mb-2 tab:mb-1 md:mb-3 lg:mb-4 font-['Inter var'] uppercase font-bold text-sm tab:text-base md:text-lg lg:text-xl xl:text-2xl text-white"
              variants={FlyInLeftItem}
            >
              Stop Paying for multuple marketing services
            </motion.p>
            <motion.h1
              className="-mb-1 md:mb-0 xl:mb-1 font-['Inter var'] uppercase sm:text-2xl tab:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r placeholder-amber-100 from-secondary-900 via-green-500 to-secondary-900"
              variants={FlyInLeftItem}
            >
              A Digiltal Marketing Agency
            </motion.h1>
            <motion.p
              className="font-['Inter var'] uppercase font-black sm:text-2xl tab:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r  from-secondary-900 via-green-500 to-secondary-900"
              variants={FlyInLeftItem}
            >
              Outfitted for the future
            </motion.p>
          </motion.div>
          <motion.div
            className="mx-auto tab:mx-0 sm:max-w-[75%] tab:max-w-[75%] mb-10"
            variants={FlyInLeftItem}
          >
            <p className="text-center tab:text-left text-white text-xs tab:text-xs md:text-sm lg:text-base xl:text-[18px]">
              Countryside Media is a full-service digital marketing and software
              agency offering digital marketing services and an{' '}
              <strong className="tab:underline">all-in-one CRM platform</strong>
              . We specialize in helping small businesses compete in today&#39;s
              technology-centric world while simultaneously fortifying thier
              ability to handle an influx of prospects and website visitors.
            </p>
          </motion.div>
          <motion.div className="w-full lg:max-w-1/2 flex justify-start items-center gap-8">
            <GradientButton
              link="/"
              buttonTarget="_blank"
              content="See Demo"
              rounded="lg"
            />
            <GradientButtonGreen
              link="https://app.arcanadigital.io/"
              buttonTarget="_blank"
              content="Schedule a Free Call"
              rounded="lg"
            />
          </motion.div>
        </motion.div>
        <div className="z-10 w-full max-w-[40vw] h-auto flex flex-col justify-start items-start">
          <ServicesTrinity />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

// <h3 className="text-xl text-center">
//   Rank amongst the top 3 for your l
//   <b className="underline underline-offset-4">one product</b>, with{' '}
//   <b className="underline underline-offset-4">unlimited contacts</b>,
//   for less than{' '}
//   <b className="underline underline-offset-4">half the price</b>,{' '}
//   <b className="uppercase">&nbsp;Guaranteed.</b>
//   <br />
//   <br />
//   Grow and convert more traffic, automate sales processes, build using
//   our content management features, outsource customer service, boosting
//   your Google rank and reviews and much, much more.
// </h3>
// <div className="flex justify-center gap-x-10">
//   <button
//     onClick={() => setPopOpen(!popOpen)}
//     className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] tab:py-[6px] tab:px-4  tab:text-lg tab:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
//   >
//     See Demo
//   </button>
//   <button
//     onClick={() => setPopOpen(!popOpen)}
//     className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] tab:py-[6px] tab:px-4  tab:text-lg tab:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
//   >
//     Schedule a Live Demo
//   </button>
// </div>
// <div onClick={executeScroll}>
//   <DownArrowAnimation />
// </div>
