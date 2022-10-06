import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import softwareImg from '../../public/software-snippet.png';

import { ScrollUp } from '../../core/Animation/motion-variants';

const SoftwareSnippet = (props) => {
  return (
    <motion.div ref={props.refProp} className="w-fit mx-auto">
      <motion.div
        variants={ScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 'some' }}
      >
        <Image src={softwareImg} alt="/" />
      </motion.div>
    </motion.div>
  );
};

export default SoftwareSnippet;
