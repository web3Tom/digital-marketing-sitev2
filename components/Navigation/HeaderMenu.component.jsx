import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import listenForOutsideClicks from './dropdown.events';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';

import {
  DropDownContainer,
  DropDownChild,
} from '../../core/UI-Components/motion-variants.ui';

const HeaderMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const ToggleDropDown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(
    listenForOutsideClicks(listening, setListening, menuRef, setIsMenuOpen)
  );

  return (
    <motion.div ref={menuRef}>
      <span
        className="flex justify-center items-center overflow-visible"
        onClick={ToggleDropDown}
      >
        <p className="cursor-default pr-[2px] select-none hover:scale-105 hover:underline">
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
        {isMenuOpen && (
          <motion.div
            className="fixed text-center bg-white md:top-[86px] md:left-[calc(100vw-(780px*1.75))] md:w-[780px] md:rounded-2xl md:px-5 md:pb-9 md:pt-5"
            variants={DropDownContainer}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div
              className="flex flex-col justify-start gap-5"
              variants={DropDownChild}
            >
              {route.subRoutes.map((subRoute, i) => (
                <motion.div className="flex flex-col w-full gap-3" key={i}>
                  <h1 className="font-bold text-black text-xl">
                    {subRoute.title}
                  </h1>
                  <h3 className="font-light text-gray-700 text-md">
                    {subRoute.subTitle}
                  </h3>
                  <p className="font-light text-gray-700 text-sm">
                    {subRoute.description}
                  </p>
                  <div
                    className={`grid gap-y-5 ${
                      subRoute.title === 'Arcana Growth Services'
                        ? 'grid-cols-2 justify-items-center gap-x-8'
                        : 'grid-cols-3 justify-items-center gap-x-5'
                    }`}
                  >
                    {subRoute.subRoutes.map((nested, i) => (
                      <motion.span
                        className="flex justify-center gap-3 items-start bg-gray-300 rounded-xl p-2"
                        key={i}
                      >
                        <p className="font-light text-black text-xs">
                          {nested.icon}
                        </p>
                        <span className="flex flex-col items-start gap-1">
                          <Link href={nested.path}>
                            <a className="text-black text-md font-semibold">
                              {nested.name}
                            </a>
                          </Link>
                          <p className="text-gray-600 text-sm text-left font-normal">
                            {nested.description}
                          </p>
                        </span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderMenu;
