import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import ArrowToggle from '../../core/UI-Components/ToggleArrow.component';
import MenuDropDown from '../../core/UI-Components/DropDown.component';

const softwareDropDownLinks = [
  {
    id: 1,
    title: "Arcana's CRM Platform",
    subTitle: `Ready to take your business's digital presence seriously? Get everything an entrepenuer needs for less than half the price of Hubspot.`,
    features: [
      { id: 1, feature: 'Messaging' },
      { id: 2, feature: 'Automation' },
      { id: 3, feature: 'Reviews' },
      { id: 4, feature: 'Social Media' },
      { id: 5, feature: 'Payments' },
      { id: 6, feature: 'Forms and Website' },
      { id: 7, feature: 'Reporting' },
    ],
  },
];

const servicesDropDownLinks = [
  {
    id: 2,
    title: 'Arcana Growth Services',
    subTitle: `Do your business a solid and leverage our expertise for extraordinary growth. Become the leader in your area!.`,
    features: [
      { id: 1, feature: 'SEO' },
      { id: 2, feature: 'Database Reactivation Campaigns' },
    ],
  },
];

const HeaderNavLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      <div className="flex justify-center items-center gap-8 text-white  text-base font-normal">
        <motion.div
          className="relative"
          onHoverStart={() => setOpen(!open)}
          onHoverEnd={() => setOpen(!open)}
        >
          <span className="flex justify-center items-center overflow-visible">
            <p className="cursor-default pr-[1px] select-none">Software</p>
            <ArrowToggle open={open} keyVal="arrow1" />
          </span>

          <MenuDropDown linksArray={softwareDropDownLinks} open={open} />
        </motion.div>
        <motion.div
          className="relative"
          onHoverStart={() => setOpen(!open)}
          onHoverEnd={() => setOpen(!open)}
        >
          <span className="flex justify-center items-center overflow-visible">
            <p className="cursor-default pr-[1px] select-none">Services</p>
            <ArrowToggle open={open} keyVal="arrow2" />
          </span>

          <MenuDropDown linksArray={servicesDropDownLinks} open={open} />
        </motion.div>
        <Link href="/">
          <a className="md:text-base cursor-default select-none">Pricing</a>
        </Link>
        <Link href="/">
          <a className="md:text-base cursor-default select-none">Why Arcana?</a>
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default HeaderNavLinks;
