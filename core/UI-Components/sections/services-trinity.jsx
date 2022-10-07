import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesTrinity = () => {
  const serviceTabs = [
    {
      text: 'All-in-one CRM Platform',
      link: '/hero/software-hero-snippet.png',
      width: '2000px',
      height: '1332px',
    },
    {
      text: 'Website Development',
      link: '/hero/hero-services-marketing.png',
      width: '2000px',
      height: '1332px',
    },
    {
      text: 'Marketing and SEO',
      link: '/hero/home-hero-services-wd.png',
      width: '2000px',
      height: '1332px',
    },
  ];
  const [current, setCurrent] = useState(serviceTabs[0]);

  const handleImgError = () => {
    setCurrent({
      text: '',
      link: '/hero/software-hero-snippet.png',
      width: '927px',
      height: '679px',
    });
  };

  return (
    <>
      <motion.div className="w-full">
        <motion.div className="block max-h-[50vh] aspect-[6/4] mx-auto mb-5">
          <Image
            src={current.link}
            layout="responsive"
            width={current.width}
            height={current.height}
            alt="/"
            className="z-[2]"
            onError={handleImgError}
            blurDataURL="/hero/software-hero-snippet.png"
          />
        </motion.div>
        <motion.div className="h-[100px] w-full flex justify-center bg-primary-400 rounded-full ring-4 ring-white">
          {serviceTabs.map((tab) => (
            <motion.button
              key={tab.text}
              onClick={() => setCurrent(tab)}
              className="h-full w-full flex flex-col justify-center items-center bg-primary-400 rounded-full ring-4 ring-white"
            >
              {tab.text}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ServicesTrinity;

{
  /* <AnimateSharedLayout>
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
      </AnimateSharedLayout> */
}
