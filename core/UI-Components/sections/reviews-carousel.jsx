import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ScrollUp } from '../../Animation/motion-variants';

const reviewCards = [
  {
    id: 'LJ Shorecuts',
    name: 'Jeannine Martinelli',
    logo: '/reviews/lj-shorecuts-logo.png',
    prof: '/reviews/lj-shorecuts-prof.png',
    details: 'Cosmetologist and Co-founder of LJ Shorecuts',
    boldDetails:
      'went from having no website, no database and unranked on Google, to a #3 ranked website and a +500 contact database.',
    quote: `We didn't know the difference having a website ranked on the first page of Google would make. We're so busy! The automated appointment reminders are a lifesaver, too!`,
  },
  {
    id: 'san-carlo',
    name: 'Guiseppe Beradi',
    logo: '/reviews/san-carlo-logo.png',
    prof: '/reviews/san-carlo-prof.png',
    details: 'Owner of San Carlo Osteria Piemonte, Downtown Manhattan',
    boldDetails:
      'experienced a 37% increase in repeat customers & #3 Google ranking in 55-days.',
    quote: `Love these guys. Our reviews shot up almost instantly and we have taken all of thier knowledge & training on board. We are now running promotional campaigns and seeing very good results.`,
  },
  {
    id: 'texan-auto',
    name: 'Brian Fore',
    logo: '/reviews/texan-auto-logo.png',
    prof: '/reviews/texan-auto-prof.png',
    details: 'General Manager at Texan Auto Repair & Collision',
    boldDetails:
      'went from a #13 Google ranking to #1 Google ranking in as little as 65 days.',
    quote: `As a family run repait business, we were hesitant to partner with someone external, however we should have done this far sooner. We are no longer just a word of mouth business and welcoming new customers each day.`,
  },
  {
    id: 'Harley Street',
    name: 'Adam Thorne',
    logo: '/reviews/harley-street-logo.png',
    prof: '/reviews/harley-street-prof.png',
    details: 'Cosmetic dentist and founder of Harley Street Dental Group',
    boldDetails:
      'went from a #15 Google ranking to #1 Google Ranking in as little as 30 days.',
    quote: `Very impressed, we are now ranked #1 & are the most visited Dental Studio on Harley Street, that's saying something considering we are located in central London.`,
  },
];

const ReviewsCarousel = () => {
  const [currentReview, setCurrentReview] = useState(reviewCards[0]);

  return (
    <motion.section className="w-full pt-10 pb-20 bg-[#2e769e] flex flex-col justify-start items-center">
      <motion.div
        viewport={{ amount: 0.3, once: true }}
        layout
        variants={ScrollUp}
        initial="hidden"
        whileInView="show"
        className="w-full h-full flex flex-col justify-start items-center"
      >
        <article className="h-[190px] sm:h-[175px] sm:min-w-[420px] md:h-[200px] lg:h-[185px] xl:h-[220px] w-full max-w-[85vw] sm:max-w-[65vw] tab:max-w-[75vw] md:max-w-[70vw] lg:max-w-[55vw] sm:py-3 md:py-4 px-2 tab:px-3 xl:py-5 bg-white drop-shadow-2xl shadow-2xl mb-3 rounded-xl inline-grid grid-rows-[auto_auto] sm:grid-cols-[40%_60%] tab:grid-cols-[50%_50%] justify-items-center items-center">
          <div className="flex flex-col tab:flex-row justify-start tab:justify-between items-center tab:items-start gap-2 xl:gap-3 pr-2 tab:pr-3 md:pr-3">
            <div className="hidden sm:block sm:min-w-[50%] tab:min-w-[30%] md:min-w-[33%] xl:min-w-[35%] grow-1 relative">
              <Image
                src={currentReview.prof}
                width="100px"
                height="100px"
                layout="responsive"
                objectFit="contain"
                alt="/"
              />
            </div>
            <div className="w-auto flex flex-col justify-start items-center tab:items-start gap-1">
              <p className="hidden sm:block font-bold tab:text-[13px] md:text-sm text-center tab:text-left whitespace-nowrap select-none">
                {currentReview.name}
              </p>
              <p className="hidden sm:block text-sky-700 text-center tab:text-left text-xs tab:text-xs md:text-[13px] xl:text-sm select-none">
                {currentReview.details}
                <b className="hidden tab:inline pl-1 font-bold select-none">
                  {currentReview.boldDetails}
                </b>
              </p>
            </div>
          </div>

          <div className="relative h-full p-2 sm:p-0 sm:border-l-2 sm:border-secondary flex flex-col justify-start gap-1 sm:gap-2 xl:gap-3 sm:pl-2 tab:pl-3 items-center">
            <div className="relative max-w-[6%] md:max-w-[6%] lg:max-w-[7%] w-full self-start">
              <Image
                src="/reviews/reviewquotation.svg"
                alt="review-quotes"
                layout="responsive"
                width="94px"
                height="80px"
              />
            </div>
            <p className=" text-sky-700 text-left font-semibold italic text-sm md:text-base select-none">
              {currentReview.quote}
            </p>
          </div>
          <div className="text-secondary text-center text-xs sm:hidden">
            -{currentReview.name}, {currentReview.details}
          </div>
        </article>
        <div className="flex w-full justify-center items-center gap-8">
          {reviewCards.map((review) => (
            <motion.input
              layout
              key={review.id}
              onClick={() => setCurrentReview(review)}
              type="button"
              className={`w-2 h-2 border-1 border-black rounded-full hover:bg-blue-500 active:bg-blue-500 focus:outline-none ${
                review === currentReview ? 'bg-blue-500' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ReviewsCarousel;
