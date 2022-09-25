export const DropDownContainer = {
  hidden: {
    height: '0px',
    opacity: 0,
  },
  show: {
    height: `auto`,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
      duration: 0.4,
      ease: 'easeIn',
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        ease: 'easeOut',
      },
    },
  },
};

export const DropDownChild = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
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
