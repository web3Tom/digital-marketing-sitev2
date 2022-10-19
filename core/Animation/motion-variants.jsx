export const DropDownChild = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const FadeInUp = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const ScrollUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

export const ScrollUpChild = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

// Home-Hero

export const HillsSVGVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const HeroMoonVariant = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
};

// Hone Hero Copy
export const FlyInLeftContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0,
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

export const FlyInLeftItem = {
  hidden: {
    x: '-50vw',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      mass: 0.3,
    },
  },
};

// Opacity Only
export const revealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

export const revealChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const revealFastContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const revealFastChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const mobileSideBar = {
  hidden: { x: '100%' },
  show: { x: 0, transition: { type: 'tween', duration: 0.4 } },
  exit: { x: '100%', transition: { type: 'tween', duration: 0.4 } },
};

export const mobileSideBarDD = {
  hidden: { height: '0px', opacity: 0 },
  show: {
    height: 'auto',
    opacity: 1,
    transition: { type: 'tween', duration: 0.4 },
  },
  exit: {
    height: '0px',
    opacity: 0,
    transition: { type: 'tween', duration: 0.4 },
  },
};
