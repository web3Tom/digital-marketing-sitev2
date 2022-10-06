import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useMeasure from 'react-use-measure';

import { FaAngleDown } from 'react-icons/fa';

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

const HeaderMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [heightRef, { height }] = useMeasure();

  let domNode = useClickOutside(() => {
    setIsMenuOpen(false);
  });

  return (
    <div ref={domNode}>
      <span
        className="relative flex justify-center items-center overflow-visible"
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        <p className="text-sm cursor-default pr-[2px] select-none underline-offset-4 hover:underline sm:transition-all">
          {route.name}
        </p>
        <motion.div
          animate={
            isMenuOpen
              ? {
                  rotate: -90,
                  y: 0,
                }
              : { rotate: 0, y: [0, -3, 3] }
          }
          transition={
            isMenuOpen
              ? 'null'
              : { y: { repeat: Infinity, repeatType: 'mirror', duration: 2 } }
          }
        >
          <FaAngleDown />
        </motion.div>
      </span>
      <AnimatePresence>
        <motion.div
          initial={{ height: '0px', zIndex: 0 }}
          animate={{
            height,
            zIndex: 20,
          }}
          transition={{ duration: 0.5, type: 'tween', ease: 'circOut' }}
          exit={{
            height: '0px',
            transition: { duration: 0.3 },
          }}
          className="absolute overflow-hidden tab:top-[115px] left-[5%] w-[90%]"
          key={isMenuOpen}
          layout
        >
          <div
            ref={heightRef}
            className="text-center bg-white tab:rounded-2xl shadow-inner shadow-primary-500 font-['roc-grotesk']"
          >
            {isMenuOpen && (
              <div className="flex justify-start gap-x-3 divide-x-2 divide-primary-900 px-4 pb-5 pt-5">
                {route.subRoutes.map((subRoute, i) => (
                  <motion.div
                    className="grid-cols-1 auto-rows-auto w-full"
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="pb-2 text-2xl font-['roc-grotesk'] text-primary-900 text-center font-normal">
                      {subRoute.title}
                    </p>
                    <p className="text-left px-10 pb-4 leading-5 font-light text-gray-600 text-[16px]">
                      {subRoute.subTitle}
                    </p>
                    <div
                      className={`${
                        subRoute.title === 'Digital Marketing Services' ||
                        subRoute.title === 'Web Development Services'
                          ? 'flex flex-col justify-center items-center gap-y-5 pl-10 pr-3'
                          : 'grid gap-y-5 grid-cols-3 justify-items-center gap-x-3 pl-3'
                      }`}
                    >
                      {subRoute.subRoutes.map((nested, i) => {
                        if (
                          subRoute.title === 'Digital Marketing Services' ||
                          subRoute.title === 'Web Development Services'
                        ) {
                          return (
                            <motion.span
                              className="w-full p-3 flex justify-start gap-3 items-start bg-primary-600 rounded-xl"
                              key={i}
                              inital={{ y: 0 }}
                              whileHover={{ y: -5 }}
                            >
                              <p className="text-white">{nested.icon}</p>
                              <span className="flex flex-col items-start gap-1">
                                <Link href={nested.path}>
                                  <a className=" text-white text-lg font-medium">
                                    {nested.name}
                                  </a>
                                </Link>
                                <p className="text-white text-sm text-left font-normal">
                                  {nested.description}
                                </p>
                              </span>
                            </motion.span>
                          );
                        }
                        return (
                          <motion.span
                            className="w-full py-2 flex flex-col justify-start gap-2 items-center border-2 border-primary-300 rounded-xl "
                            key={i}
                            inital={{ y: 0 }}
                            whileHover={{ y: -5 }}
                          >
                            <span className="flex w-[90%] justify-center items-center">
                              <p className="text-primary-500">{nested.icon}</p>
                              <Link href={nested.path}>
                                <a className="pl-2 text-primary-500 text-sm font-light whitespace-nowrap">
                                  {nested.name}
                                </a>
                              </Link>
                            </span>
                            <p className="px-1 text-primary-500 text-xs text-center font-light">
                              {nested.description}
                            </p>
                          </motion.span>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderMenu;
