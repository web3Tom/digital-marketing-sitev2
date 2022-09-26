import { motion } from 'framer-motion';
import React from 'react';

import { DownArrowAnimation } from '../../core/UI-Components/buttons/down-arrow.component';

const HomeHero = ({ executeScroll }) => {
  // run this function from an event handler or an effect to execute scroll

  return (
    <div className="block w-full bg-black md:h-[calc(100vh-(90px))]">
      <div className="flex flex-col justify-center items-center gap-12 bg-transparent text-white md:px-36">
        <div className="w-fit mx-auto flex flex-col justify-end h-[calc(50vh-(100px))] text-center space-y-4">
          <h1 className="text-6xl text-white">
            Everything an Entreprenuer Needs.
          </h1>
          <h3 className="text-3xl text-white">
            For Small Businesses Looking to Grow.
          </h3>
        </div>
        <h3 className="text-xl text-center">
          Get all the tools Hubspot offers in{' '}
          <b className="underline underline-offset-4">one product</b>, with{' '}
          <b className="underline underline-offset-4">unlimited contacts</b>,
          for less than{' '}
          <b className="underline underline-offset-4">half the price</b>,{' '}
          <b className="uppercase">&nbsp;Guaranteed.</b>
          <br />
          <br />
          Grow and convert more traffic, automate sales processes, build using
          our content management features, outsource customer service, boosting
          your Google rank and reviews and much, much more.
        </h3>
        <div className="flex justify-center gap-x-10">
          <button
            onClick={() => setPopOpen(!popOpen)}
            className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] md:py-[6px] md:px-4  md:text-lg md:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
          >
            See Demo
          </button>
          <button
            onClick={() => setPopOpen(!popOpen)}
            className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] md:py-[6px] md:px-4  md:text-lg md:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
          >
            Schedule a Live Demo
          </button>
        </div>
        <div onClick={executeScroll}>
          <DownArrowAnimation />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

//https://api.leadconnectorhq.com/widget/form/aJIJVm6GaM9PSAfR7W9y
