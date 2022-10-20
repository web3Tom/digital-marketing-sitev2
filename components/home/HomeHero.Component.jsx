import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { HomeHeroCopy } from '../../core/UI-Components/copy';

import {
  GradientButtonSecondary,
  ButtonGreenAlt,
} from '../../core/UI-Components/buttons/buttons.component';

import { HillsD } from '../../core/Animation/hills-animation';
import {
  HillsSVGVariant,
  FlyInLeftContainer,
  FlyInLeftItem,
  HeroMoonVariant,
} from '../../core/Animation/motion-variants';

const HomeHero = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '-550%']);

  return (
    <>
      <section className="relative w-full h-[calc(100vh-88px)] bg-transparent pt-[10vh] sm:pt-[18vh] tab:pt-[20%] md:pt-16">
        <AnimatePresence>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2560 645"
            width="100%"
            className="absolute z-[1] -bottom-[5px] sm:-bottom-[10px] tab:-bottom-[30px] lg:-bottom-[30px]"
            variants={HillsSVGVariant}
            initial="hidden"
            animate="show"
          >
            {HillsD.map((path, i) => (
              <motion.path
                key={i}
                d={path.d}
                fill={path.style}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + i * 0.2 }}
              />
            ))}
          </motion.svg>
          <motion.div
            className="z-[0] absolute bottom-[0%] md:bottom-[5%] cus:bottom-[0%] left-[calc(50vw_-_80px)] tab:left-[calc(50vw_-_100px)] md:left-[4%] w-[160px] h-[160px] tab:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] cus:w-[400px] cus:h-[400px]"
            style={{ y }}
            variants={HeroMoonVariant}
            initial="hidden"
            animate="show"
          >
            <Image
              src="/hero/moon.png"
              alt="moon-pic"
              layout="responsive"
              width="200px"
              height="200px"
            />
          </motion.div>
        </AnimatePresence>
        <div className="z-10 relative mx-auto max-w-[1680px] max-h-full w-full h-full flex flex-col justify-start items-center">
          <motion.main
            className="flex flex-col justify-center text-center"
            variants={FlyInLeftContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="mb-0 tab:mb-3 md:mb-2 font-['Inter var'] font-extrabold uppercase whitespace-nowrap text-3xl xs:text-4xl sm:text-3xl tab:text-[40px] md:text-6xl text-white"
              variants={FlyInLeftItem}
            >
              Give Your{' '}
              <span className="block sm:inline-block text-primary font-extrabold">
                {HomeHeroCopy.title}
              </span>
            </motion.h1>
            <motion.p
              className="mb-7 sm:mb-5 tab:mb-10 md:mb-6 xl:mb-8 font-['Inter var'] uppercase sm:whitespace-nowrap text-3xl xs:text-4xl sm:text-3xl tab:text-[40px] md:text-6xl font-extrabold text-white"
              variants={FlyInLeftItem}
            >
              {HomeHeroCopy.title2}
              <span className="block sm:inline-block pl-1 sm:pl-2 tab:pl-3 text-secondary font-extrabold">
                {HomeHeroCopy.title3}
              </span>
            </motion.p>

            <motion.p
              className="xs:max-w-[90%] sm:max-w-[80%] tab:max-w-[60%] md:max-w-[63%] xs:mx-auto px-1 mb-10 sm:mb-6 tab:mb-12 md:mb-9 xl:mb-12 text-center text-white text-base sm:text-sm tab:text-lg md:text-xl xl:text-2xl md:font-medium xl:leading-[1.4]"
              variants={FlyInLeftItem}
            >
              {HomeHeroCopy.description1}
              <span className="px-1 tab:px-2 tab:text-secondary">
                {HomeHeroCopy.description2}
              </span>
              and
              <span className="px-1 tab:px-2 tab:text-secondary">
                {HomeHeroCopy.description3}
              </span>
              to Small Businesses and Sales Agents
            </motion.p>
            <motion.div
              className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 tab:gap-8 md:gap-12 text-lg xs:text-xl sm:text-base tab:text-lg font-semibold xl:font-bold"
              variants={FlyInLeftItem}
            >
              <ButtonGreenAlt
                link="/"
                buttonTarget="_blank"
                content="Watch CRM Demo"
                rounded="lg"
                minWidth="min-w-[220px] xs:min-w-[225px] sm:min-w-[190px] md:min-w-[195px]"
                padding="py-2 sm:px-3 sm:py-2 tab:px-2 tab:py-[6px] md:py-[9px] md:px-3"
                border="border-[3px]"
              />
              <GradientButtonSecondary
                link="https://app.arcanadigital.io/"
                buttonTarget="_blank"
                content="Schedule a Free Call"
                rounded="lg"
                minWidth="min-w-[220px] xs:min-w-[225px] sm:min-w-[190px] md:min-w-[195px]"
                padding="py-[10px] sm:px-3 sm:py-3 tab:px-3 tab:py-[9px] md:py-[10px] md:px-3"
                border="border-4"
                textSize=""
              />
            </motion.div>
          </motion.main>
          {/* <div className="w-full lg:w-full lg:max-h-full">
          <ServicesTrinity />
        </div> */}
        </div>
      </section>
    </>
  );
};

export default HomeHero;

// <h3 className="text-xl text-center">
//   Rank amongst the top 3 for your l
//   <b className="underline underline-offset-4">one product</b>, with{' '}
//   <b className="underline underline-offset-4">unlimited contacts</b>,
//   for less than{' '}
//   <b className="underline underline-offset-4">half the price</b>,{' '}
//   <b className="uppercase">&nbsp;Guaranteed.</b>
//   <br />
//   <br />
//   Grow and convert more traffic, automate sales processes, build using
//   our content management features, outsource customer service, boosting
//   your Google rank and reviews and much, much more.
// </h3>
// <div className="flex justify-center gap-x-10">
//   <button
//     onClick={() => setPopOpen(!popOpen)}
//     className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] tab:py-[6px] tab:px-4  tab:text-lg tab:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
//   >
//     See Demo
//   </button>
//   <button
//     onClick={() => setPopOpen(!popOpen)}
//     className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] tab:py-[6px] tab:px-4  tab:text-lg tab:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
//   >
//     Schedule a Live Demo
//   </button>
// </div>
// <div onClick={executeScroll}>
//   <DownArrowAnimation />
// </div>
