import { motion, AnimatePresence } from 'framer-motion';

import ArrowToggle from '../../core/UI-Components/ToggleArrow.component';
import MenuDropDown from '../../core/UI-Components/DropDown.component';

const NavLinkTemplate = ({ handleDropdown, id, dropdown, links, title }) => {
  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default NavLinkTemplate;
