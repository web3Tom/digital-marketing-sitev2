import React, { useRef } from 'react';
import HomeHero from './HomeHero.Component';
import SoftwareSnippet from './software-snippet';
import ArcanaTools from './ArcanaTools.component';

const HomeIndex = () => {
  const arrowScrollRef = useRef(null);

  const executeScroll = () => arrowScrollRef.current.scrollIntoView();

  return (
    <>
      <HomeHero executeScroll={executeScroll} />
      <SoftwareSnippet refProp={arrowScrollRef} />
      <ArcanaTools />
    </>
  );
};

export default HomeIndex;
