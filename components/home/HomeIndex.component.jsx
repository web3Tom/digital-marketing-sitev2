import React, { useRef } from 'react';
import HomeHero from './HomeHero.component';
import CSTools from '../../core/UI-Components/sections/CSTools.component';
import ReviewsCarousel from '../../core/UI-Components/sections/reviews-carousel';
import WhatWeDo from './WhatWeDo.component';

const HomeIndex = () => {
  const arrowScrollRef = useRef(null);

  // const executeScroll = () => arrowScrollRef.current.scrollIntoView();

  return (
    <>
      <HomeHero />
      <ReviewsCarousel />
      <WhatWeDo />
      <CSTools />
    </>
  );
};

export default HomeIndex;
