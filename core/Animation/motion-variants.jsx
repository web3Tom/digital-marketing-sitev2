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

// Hone Hero Copy
export const FlyInLeftContainer = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const FlyInLeftItem = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};
