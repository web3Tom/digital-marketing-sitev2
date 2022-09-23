import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderLogo from '../../core/UI-Components/logo.component';
import { HamburgerIcon } from '../../core/UI-Components/Hamburger.components';
import HeaderMenu from './HeaderMenu.component';

import { MediaQuery } from '../../core/utils/use-media-query';

import { Routes } from '../../core/UI-Components/data/nav-links.data';
import { DynoGrid } from '../../core/utils/dynamic-grid';

const Header = () => {
  const isMobile = MediaQuery(960);

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
    <header className="z-10 relative">
      <nav className="w-full flex justify-between items-center py-4 text-white tracking-wide font-semibold md:w-11/12 md:justify-between md:mx-auto">
        <div>
          <Link href="/">
            <HeaderLogo height={height} width={width} />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-8 text-white text-base font-normal">
          {Routes.map((route, index) => {
            if (route.subRoutes) {
              return <HeaderMenu route={route} key={route.name} />;
            }

            return (
              <Link href={route.path} key={index}>
                <a className="link md:text-base cursor-default select-none">
                  {route.name}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-4 ">
          <Link href="/">
            <motion.a
              className="cursor-pointer text-xs text-white md:text-yellow-300 md:hover:text-white md:transition-colors md:duration-150 md:text-lg"
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
        </div>
        {isMobile && (
          <HamburgerIcon
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
            strokeWidth="3"
            color="#3399cc"
            transition={{ ease: 'easeOut', duration: 0.2 }}
            width="30"
            height="15"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
