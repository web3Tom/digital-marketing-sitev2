import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderBanner from './header-banner.component';
import HeaderLogo from '../../core/UI-Components/logo.component';
import HeaderMenu from './HeaderMenu.component';
import { HamburgerIcon } from '../../core/UI-Components/Hamburger.components';
import HeaderMobileMenu from './HeaderMobileMenu.component';

import { Routes } from '../../core/UI-Components/data/nav-links.data';

import { MediaQuery } from '../../core/utils/use-media-query';
import { FadeInUp } from '../../core/UI-Components/motion-variants.ui';

const Header = () => {
  const isMobile = MediaQuery(960);
  const [isOpen, setIsOpen] = useState(false);

  let height = '';
  let width = '';
  if (isMobile) {
    height = '25';
    width = '110';
  } else {
    height = '50';
    width = '220';
  }

  return (
    <motion.header
      variants={FadeInUp}
      initial="hidden"
      animate="show"
      className="z-10"
    >
      <HeaderBanner />
      <nav className="w-11/12 mx-auto flex justify-between items-center py-0 text-white tracking-wide font-semibold md:w-11/12 md:justify-between md:mx-auto">
        <div className="">
          <Link href="/">
            <HeaderLogo height={height} width={width} />
          </Link>
        </div>
        <div
          className={`md:justify-center md:items-center md:gap-8 md:text-white md:text-base md:font-normal ${
            isMobile ? 'hidden' : 'flex'
          }`}
        >
          {Routes.map((route, index) => {
            if (route.subRoutes) {
              return <HeaderMenu route={route} key={route.name} />;
            }

            return (
              <Link href={route.path} key={index}>
                <a className="link md:text-base cursor-default select-none hover:scale-105 hover:underline">
                  {route.name}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-4 ">
          <Link href="/">
            <motion.a
              className="hidden md:inline cursor-pointer text-xs text-white md:text-yellow-300 md:hover:text-white md:transition-colors md:duration-150 md:text-lg"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Login
            </motion.a>
          </Link>
          <button
            to="https://app.arcanadigital.io/"
            target="_blank"
            className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] md:py-[6px] md:px-4  md:text-lg md:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
          >
            Schedule a Free Call
          </button>
          {isMobile && (
            <HamburgerIcon
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              strokeWidth="3"
              color="#3399cc"
              transition={{ ease: 'easeOut', duration: 0.2 }}
              width="30"
              height="15"
              className="z-40"
            />
          )}
        </div>
      </nav>
      {isOpen && <HeaderMobileMenu />}
    </motion.header>
  );
};

export default Header;
