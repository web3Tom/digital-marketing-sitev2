import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import HeaderBanner from './header-banner.component';
import HeaderMenu from './HeaderMenu.component';
import HeaderMobileMenu from './HeaderMobileMenu.component';

import { HamburgerIcon } from '../../core/UI-Components/icons/Hamburger.components';
import { GradientButtonPrimary } from '../../core/UI-Components/buttons/buttons.component';

import { Routes } from '../../core/UI-Components/data/nav-links.data';
import { MediaQuery } from '../../core/utils/use-media-query';
import { FadeInUp } from '../../core/Animation/motion-variants';

const Header = () => {
  const isTablet = MediaQuery(1024);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <motion.div variants={FadeInUp} initial="hidden" animate="show">
        <HeaderBanner />
      </motion.div>

      <motion.header
        variants={FadeInUp}
        initial="hidden"
        animate="show"
        className="z-10 max-w-[1680px] mx-auto pt-7"
      >
        <nav className="h-auto w-full px-5 sm:px-10 py-[5px] cus:px-0 font-['Inter var'] text-base text-white font-light overflow-hidden">
          <div className="w-full h-full max-h-[56px] flex justify-between items-center md:items-end">
            <Link href="/">
              <div className="relative w-full h-[50px] max-h-[50px] 2xl:h-[56px] 2xl:max-h-[56px] hover:opacity-50 transition-opacity">
                {isTablet ? (
                  <Image
                    src="/logo/logo-icon-v3.svg"
                    alt="countryside-logo"
                    sizes="100%"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer object-left"
                  />
                ) : (
                  <Image
                    src="/logo/logo-v3.svg"
                    alt="countryside-logo"
                    sizes="100%"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer object-left"
                  />
                )}
              </div>
            </Link>
            <div className="md:pb-1 flex justify-center items-end gap-8">
              <div
                className={`${
                  isTablet ? 'hidden' : 'flex'
                } h-fit flex justify-center items-center md:gap-6 lg:gap-8 tab:text-white `}
              >
                {Routes.map((route, index) => {
                  if (route.subRoutes) {
                    return <HeaderMenu route={route} key={route.name} />;
                  }

                  return (
                    <Link href={route.path} key={index}>
                      <a className="text-sm cursor-default whitespace-nowrap select-none underline-offset-4 hover:underline sm:transition-all">
                        {route.name}
                      </a>
                    </Link>
                  );
                })}
              </div>
              <div className="h-auto flex justify-center items-center gap-3 sm:gap-4 whitespace-nowrap">
                <GradientButtonPrimary
                  link="https://app.countrysidemedia.io/"
                  buttonTarget="_blank"
                  content="Schedule a Free Call"
                  rounded="lg"
                  padding="px-2 py-2 sm:px-3 tab:py-[6px] lg:py-2 lg:px-3"
                  textSize="text-sm sm:text-sm tab:text-base"
                />
                {isTablet && (
                  <HamburgerIcon
                    isOpen={isMobileOpen}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    strokeWidth="4"
                    color="#ffffff"
                    transition={{ ease: 'easeOut', duration: 0.2 }}
                    width="35"
                    height="20"
                    className="z-40"
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {isMobileOpen && <HeaderMobileMenu key="sidebar" />}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
