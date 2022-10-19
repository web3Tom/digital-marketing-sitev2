import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const activeButtonClass = [
  'bg-gradient-to-r from-sky-400 via-sky-600 to-secondary lg:bg-gradient-to-r lg:from-green-500 lg:via-green-600 lg:to-green-500 text-white',
];

const ServicesTrinity = () => {
  const serviceTabs = [
    {
      text: 'All-in-one CRM Platform',
      link: '/hero/software-hero-snippet.png',
    },
    {
      text: 'Marketing and SEO',
      link: '/hero/home-hero-services-marketing.svg',
    },
    {
      text: 'Website Development',
      link: '/hero/home-hero-services-wd.png',
    },
  ];
  const [current, setCurrent] = useState(serviceTabs[0]);

  const handleImgError = () => {
    setCurrent({
      text: '',
      link: '/hero/software-hero-snippet.png',
    });
  };

  return (
    <>
      <motion.div className="max-h-full h-auto grid grid-cols-[minmax(250px,_90%)] grid-rows-[minmax(0px,_100%)] [grid-template-areas:'image'_'buttons'] tab:gap-y-4 md:gap-y-4 lg:gap-y-4 justify-center justify-items-center items-center">
        <AnimatePresence>
          <motion.div
            className="relative [grid-area:image] w-full max-w-[37vw] lg:max-w-[400px] h-full aspect-[6/4]"
            key={current.link}
            layout
            initial="enter"
            animate="in"
            exit="exit"
            variants={{
              enter: { x: '100%', opacity: 0 },
              in: {
                opacity: 1,
                x: 0,
                transition: { type: 'spring', duration: 0.7 },
              },
              exit: {
                opacity: 0,
                x: '100%',
                transition: { type: 'spring', duration: 0.7 },
              },
            }}
          >
            <Image
              src={current.link}
              layout="fill"
              width="2000px"
              height="1332px"
              objectFit="contain"
              alt="/"
              className="z-[2]"
              onError={handleImgError}
              blurDataURL="/hero/software-hero-snippet.png"
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            className="[grid-area:buttons] h-auto w-auto md:min-w-[500px] lg:w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 shadow-inner drop-shadow-xl lg:bg-none rounded-full md:py-3 md:px-4 lg:p-0 lg:max-w-[100%]  flex justify-evenly lg:justify-center items-center lg:gap-x-4 xl:gap-x-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 0.3 }}
          >
            {serviceTabs.map((tab, i) => (
              <motion.button
                key={tab}
                id={tab.link}
                onClick={() => setCurrent(tab)}
                className={`flex justify-center items-center tab:px-1.5 tab:py-2 md:px-1.5 md:py-2 lg:px-2 lg:py-1.5 xl:py-2 xl:px-3 tab:text-xs md:text-xs lg:text-sm xl:text-base rounded-lg whitespace-nowrap focus:outline-none ${
                  current === tab
                    ? activeButtonClass
                    : 'bg-white border-primary text-green-600 font-bold active:text-white focus:text-white hover:text-white active:bg-gradient-to-r active:from-sky-400 active:via-sky-600 active:to-secondary focus:bg-gradient-to-r focus:from-sky-400 focus:via-sky-600 focus:to-secondary hover:bg-gradient-to-r hover:from-sky-400 hover:via-sky-600 hover:to-secondary lg:font-normal lg:bg-secondary lg:border-none lg:text-white lg:active:bg-gradient-to-r lg:active:from-green-500 lg:active:via-green-600 lg:active:to-green-500 lg:focus:bg-gradient-to-r lg:focus:from-green-500 lg:focus:via-green-600 lg:focus:to-green-500 lg:hover:bg-gradient-to-r lg:hover:from-green-500 lg:hover:via-green-600 lg:hover:to-green-500'
                }`}
                layout
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: 'spring',
                  duration: 1,
                  delay: 0.2 + i * 0.2,
                }}
              >
                {tab.text}
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ServicesTrinity;

// active relative h-full w-full flex justify-center items-center md:py-2 md:px-3 rounded-full whitespace-nowrap fill-white text-secondary focus:outline-none bg-white active:bg-gradient-to-r active:from-sky-400 active:via-sky-600 active:to-secondary focus:bg-gradient-to-r focus:from-sky-400 focus:via-sky-600 focus:to-secondary hover:bg-gradient-to-r hover:from-sky-400 hover:via-sky-600 hover:to-secondary active:fill-secondary focus:fill-secondary hover:fill-secondary active:text-white focus:text-white hover:text-white
