import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';

// import ArrowToggle from '../../core/UI-Components/ToggleArrow.component';

const ddContainer = {
  hidden: {
    zindex: '0',
    height: '0px',
    width: '0px',
  },
  show: {
    zindex: '20',
    height: '600px',
    width: '680px',
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'linear',
      when: 'beforeChildren',
    },
    exit: {
      zindex: '0',
      height: '0px',
      width: '0px',
      transition: {
        type: 'tween',
        duration: 0.1,
        when: 'afterChildren',
      },
    },
  },
};

const ddChild = {
  hidden: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
};

const HeaderMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(route.subRoutes[0]);
  const gridSize = route.subRoutes[0].title == 'Arcana Growth Services';

  return (
    <motion.div onHoverStart={toggleMenu} onHoverEnd={toggleMenu}>
      <span className="flex justify-center items-center overflow-visible">
        <p className="cursor-default pr-[2px] select-none">{route.name}</p>
        <motion.div
          animate={
            isMenuOpen
              ? {
                  rotate: -90,
                }
              : { rotate: 0 }
          }
        >
          <FaAngleDown />
        </motion.div>
      </span>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute left-auto right-auto md:mt-9 md:w-[680px] bg-white rounded-lg md:px-5 md:pt-5 md:pb-8 text-center"
            variants={ddContainer}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="flex flex-col w-full gap-3">
              {route.subRoutes.map((subRoute, i) => (
                <div className="flex flex-col w-full gap-2" key={i}>
                  <h1 className="font-bold text-black text-xl">
                    {subRoute.title}
                  </h1>
                  <h3 className="font-light text-gray-700 text-md">
                    {subRoute.subTitle}
                  </h3>
                  <div
                    className={`grid ${
                      gridSize
                        ? `grid-cols-2 justify-items-stretch`
                        : `grid-cols-3 justify-items-center`
                    } gap-x-5 gap-y-5  mt-7`}
                  >
                    {subRoute.subRoutes.map((nested, i) => (
                      <motion.span
                        className="flex justify-center gap-3 items-center"
                        variants={ddChild}
                        key={i}
                        custom={i}
                      >
                        <p className="font-light text-black text-xs">
                          {nested.icon}
                        </p>
                        <Link href={nested.path}>
                          <a className="text-black text-md font-semibold">
                            {nested.name}
                          </a>
                        </Link>
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderMenu;
