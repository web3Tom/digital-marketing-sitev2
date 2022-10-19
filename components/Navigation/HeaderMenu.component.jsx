import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  let domNode = useClickOutside(() => {
    setIsMenuOpen(false);
  });

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
    setIsMenuOpen(false);
  };

  return (
    <div ref={domNode}>
      <span
        className="relative flex justify-center items-center overflow-visible"
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        <p className="text-sm cursor-default pr-[2px] whitespace-nowrap select-none underline-offset-4 hover:underline sm:transition-all">
          {route.name}
        </p>
        <motion.div
          layout
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
          layout
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
          className="absolute overflow-hidden tab:top-[115px] left-[4%] w-[92%]"
          key={isMenuOpen}
        >
          <div
            ref={heightRef}
            className="text-center bg-white rounded-xl tab:rounded-2xl shadow-inner shadow-secondary font-['Inter var']"
          >
            {isMenuOpen && (
              <div className="flex justify-start gap-x-3 px-3 lg:px-4 pb-5 pt-5">
                {route.subRoutes.map((subRoute, i) => (
                  <motion.div
                    className={`${
                      subRoute.title === 'All-in-one CRM Platform'
                        ? 'w-[44%] border-x-2 border-secondary'
                        : 'w-[28%]'
                    }
                    grid-cols-1`}
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="pb-1 lg:pb-2 text-xl lg:text-2xl font-['Inter var'] text-secondary text-center font-semibold">
                      {subRoute.title}
                    </p>
                    <p className="lg:px-10 pb-4 text-gray-600 text-xs lg:text-sm text-center font-light">
                      {subRoute.subTitle}
                    </p>
                    <div
                      className={`${
                        subRoute.title === 'Digital Marketing Services' ||
                        subRoute.title === 'Web Development Services'
                          ? 'flex flex-col justify-start items-start gap-y-5 xl:px-2'
                          : 'grid grid-cols-3 gap-3 justify-items-center px-2 xl:px-3'
                      }`}
                    >
                      {subRoute.subRoutes.map((nested, i) => {
                        if (
                          subRoute.title === 'Digital Marketing Services' ||
                          subRoute.title === 'Web Development Services'
                        ) {
                          return (
                            <motion.span
                              className="w-full p-3 flex justify-start gap-3 items-start bg-secondary rounded-xl group"
                              key={i}
                              inital={{ y: 0 }}
                              whileHover={{ y: -5 }}
                            >
                              <p className="text-white">{nested.icon}</p>
                              <span
                                className="flex flex-col items-start gap-1 cursor-pointer"
                                onClick={(e) => handleClick(e, nested.path)}
                              >
                                <p className=" text-white text-base lg:text-lg font-medium group-hover:underline underline-offset-4">
                                  {nested.name}
                                </p>

                                <p className="text-white text-xs lg:text-sm text-left font-normal">
                                  {nested.description}
                                </p>
                              </span>
                            </motion.span>
                          );
                        }
                        return (
                          <motion.span
                            className="group w-full py-2 flex flex-col justify-start gap-2 items-center text-secondary border-2 border-secondary hover:text-white hover:bg-secondary rounded-xl cursor-pointer"
                            key={i}
                            inital={{ y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={(e) => handleClick(e, nested.path)}
                          >
                            <span className="flex w-[90%] items-center">
                              <p className="w-fit">{nested.icon}</p>

                              <p className="pr-1 w-full text-center text-xs lg:text-sm xxl:text-base lg:leading-tight whitespace-nowrap font-medium group-hover:underline underline-offset-2">
                                {nested.name}
                              </p>
                            </span>
                            <p className="px-1 text-xs text-center font-light">
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
