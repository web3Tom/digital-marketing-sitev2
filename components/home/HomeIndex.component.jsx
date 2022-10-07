import React, { useRef } from 'react';
import HomeHero from './HomeHero.Component';
import ArcanaTools from './ArcanaTools.component';

const HomeIndex = () => {
  const arrowScrollRef = useRef(null);

  const executeScroll = () => arrowScrollRef.current.scrollIntoView();

  return (
    <>
      <HomeHero executeScroll={executeScroll} />
      <ArcanaTools />
    </>
  );
};

export default HomeIndex;
