import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

import HeaderBanner from './header-banner.component';
import HeaderMenu from './HeaderMenu.component';
import HeaderMobileMenu from './HeaderMobileMenu.component';

import { HamburgerIcon } from '../../core/UI-Components/icons/Hamburger.components';
import { GradientButton } from '../../core/UI-Components/buttons/gradient-button.component';

import { Routes } from '../../core/UI-Components/data/nav-links.data';
import { MediaQuery } from '../../core/utils/use-media-query';
import { FadeInUp } from '../../core/Animation/motion-variants';

const Header = () => {
  const isTablet = MediaQuery(960);
  const [isOpen, setIsOpen] = useState(false);

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
        <nav className="h-auto w-full px-10 py-[5px] font-['roc-grotesk'] text-base text-white font-light cus:px-0">
          <div className="flex w-full justify-between items-center h-[62px]">
            <Link href="/">
              <div className="relative h-[40px] max-w-[33vw] w-[120px] sm:w-[200px] tab:w-[290px]">
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
            <div className="flex justify-center gap-8">
              <div
                className={`${
                  isTablet ? 'hidden' : 'flex'
                } h-auto justify-center items-center gap-8 tab:text-white `}
              >
                {Routes.map((route, index) => {
                  if (route.subRoutes) {
                    return <HeaderMenu route={route} key={route.name} />;
                  }

                  return (
                    <Link href={route.path} key={index}>
                      <a className="text-sm cursor-default select-none underline-offset-4 hover:underline sm:transition-all ">
                        {route.name}
                      </a>
                    </Link>
                  );
                })}
              </div>
              <div className="h-auto flex justify-center gap-x-2 items-center">
                <GradientButton
                  link="https://app.arcanadigital.io/"
                  buttonTarget="_blank"
                  content="Schedule a Free Call"
                  rounded="lg"
                />
                {isTablet && (
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
            </div>
          </div>
        </nav>
        {isOpen && <HeaderMobileMenu />}
      </motion.header>
    </>
  );
};

export default Header;
