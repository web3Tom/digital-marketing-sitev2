import React from 'react';
import { motion } from 'framer-motion';

import { Routes } from '../../core/UI-Components/data/nav-links.data';

const HeaderMobileMenu = () => {
  return (
    <motion.div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col mx-auto">
      <ul className="text-md text-blue-500 font-semibold ">
        {Routes.map((route, i) => (
          <li key={i}>{route.name}</li>
        ))}
        <li>Login</li>
      </ul>
    </motion.div>
  );
};

export default HeaderMobileMenu;
