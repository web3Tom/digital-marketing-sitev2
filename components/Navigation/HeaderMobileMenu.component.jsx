import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa';

import {
  mobileSideBar,
  mobileSideBarDD,
} from '../../core/Animation/motion-variants';

const HeaderMobileMenu = () => {
  const [isMenuDDOpen, setMenuDDOpen] = useState(false);

  return (
    <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 w-full h-screen">
      <motion.div
        className="z-30 fixed max-w-[70vw] sm:max-w-[60vw] min-w-[50vw] sm:min-w-[40vw] px-5 sm:px-10 top-0 right-0 bottom-0 border-l-4 border-white bg-darkBlue"
        variants={mobileSideBar}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="absolute top-5 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
          <Image
            src="/logo/logo-icon-v3.svg"
            alt="countryside-logo"
            layout="responsive"
            width="100px"
            height="100px"
            objectFit="contain"
          />
        </div>
        <ul className="mt-[17vh] sm:mt-[22vh] flex flex-col justify-start items-start gap-y-3 sm:gap-y-2 text-sm sm:text-base text-white font-semibold">
          <li className="pb-2 text:lg sm:text-xl font-bold uppercase">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </li>
          <li
            onClick={() => setMenuDDOpen((isMenuDDOpen) => !isMenuDDOpen)}
            className="mt-2 before:h-[5px] relative before:absolute before:-top-4 before:w-[200px] before:block before:bg-secondary"
          >
            <motion.span className="flex justify-start gap-x-2">
              <p>Premier CRM</p>
              <motion.div
                layout
                animate={
                  isMenuDDOpen
                    ? {
                        rotate: -90,
                        y: 0,
                      }
                    : { rotate: 0, y: [0, -3, 3] }
                }
                transition={
                  isMenuDDOpen
                    ? 'null'
                    : {
                        y: {
                          repeat: Infinity,
                          repeatType: 'mirror',
                          duration: 2,
                        },
                      }
                }
              >
                <FaAngleDown size={20} />
              </motion.div>
            </motion.span>
          </li>
          <AnimatePresence>
            {isMenuDDOpen && (
              <motion.ul
                className="flex flex-col justify-start pl-2 py-2 gap-y-3 sm:gap-y-2 font-normal text-gray-300"
                layout
                variants={mobileSideBarDD}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <li className="whitespace-nowrap">
                  <Link href="/software/messaging">
                    <a>Messaging</a>
                  </Link>
                </li>
                <li className="whitespace-nowrap">
                  <Link href="/software/automation">
                    <a>Automation</a>
                  </Link>
                </li>
                <li className="whitespace-nowrap">
                  <Link href="/software/reviews">
                    <a>Reviews</a>
                  </Link>
                </li>
                <li className="whitespace-nowrap">
                  <Link href="/software/livechat">
                    <a>LiveChat</a>
                  </Link>
                </li>
                <li className="whitespace-nowrap">
                  <Link href="/software/payments">
                    <a>Payments</a>
                  </Link>
                </li>
                <li className="whitespace-nowrap">
                  <Link href="/software/forms-and-websites">
                    <a>Forms and Sites</a>
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>

          <li className="whitespace-nowrap">
            <Link href="/services/social-media-marketing">
              <a className="">Social Media Marketing</a>
            </Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/services/seo">
              <a className="">SEO Services</a>
            </Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/services/dbr">
              <a className="">Database Reactivation</a>
            </Link>
          </li>
          <li className="mb-3 whitespace-nowrap after:h-[5px] relative after:absolute after:top-8 after:w-[200px] after:block after:bg-secondary">
            <Link href="/services/web-design">
              <a className="">Web Design</a>
            </Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/services/pricing">
              <a className="">Pricing</a>
            </Link>
          </li>
          <li className="">
            <Link href="/services/web-design">
              <a className="">Why Us?</a>
            </Link>
          </li>
          <li className="">
            <Link href="/services/web-design">
              <a className="">Contact</a>
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HeaderMobileMenu;
