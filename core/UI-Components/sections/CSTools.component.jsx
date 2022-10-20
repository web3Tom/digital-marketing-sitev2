import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import CRMIntegrations from './crm-integrations';

import { ScrollUp, ScrollUpChild } from '../../Animation/motion-variants';
import { MediaQuery } from '../../utils/use-media-query';
import { myLoader } from '../../utils/image-loader';

const toolsArray = [
  {
    tool: `Get Reviews`,
    icon: '63502948d6cdf7059870c66b',
    link: '/software/reviews',
    description: `Make every customer give you a review. Local businesses using Countryside see over double the monthly review volume in less than 60 days.`,
    shortDescription: `Make every customer give you a review.`,
  },
  {
    tool: `Messaging`,
    icon: '63502948d6cdf765f370c66a',
    link: '/software/messaging',
    description: `Receive messages from leads and customers through texting, live chat, bulk messaging, Google and Facebook,
    all on desktop or your very own mobile app.`,
    shortDescription: `Message customers via text, email, live chat, and more - all in one place.`,
  },
  {
    tool: `Automate Anything`,
    icon: '63502aa7ac2b4c207c0aca9b',
    link: '/software/automation',
    description: `Kiss manually outreach and processes goodbye. Automate your entire customer life cycle, from marketing outreach to the purchase confirmation email.`,
    shortDescription: `Automate virtually anything.`,
  },
  {
    tool: `Live Chat`,
    icon: '63502bb454ae3b470ce43e42',
    link: '/software/webchat',
    description: `With our Live Chat feature, you can generate up to 11x more inbound leads from your website. And because it's text-based, you'll stay connected long after they leave your site.`,
    shortDescription: `Generate up to 11x more inbound leads from your website.`,
  },
  {
    tool: `SMS Marketing`,
    icon: '63502bfbd6cdf7c3c270c870',
    link: '/software/messaging',
    description: `Get your own digital business number and start seeing a 98% open rate with SMS campaigns that get immediate responses and measurable results.`,
    shortDescription: `Blow email open rates out of the water with automated SMS campaigns.`,
  },
  {
    tool: `Website & Forms`,
    icon: '63502ca6ac2b4c38f00acced',
    link: '/software/forms-and-websites',
    description: `Use our content management system (CMS) to build forms, landing pages, surverys, or an entire website for you business.`,
    shortDescription: `Build your own website, landing page, and forms on your own.`,
  },
  {
    tool: `Send Invoices`,
    icon: '63502948d6cdf7af3770c669',
    link: '/software/payments',
    description: `Easy text 2 pay client invoicing. Simplify your client invoicing & get paid faster.`,
    shortDescription: `Easy text 2 pay client invoicing.`,
  },
  {
    tool: `Reporting`,
    icon: '6350294854ae3b2b45e43c18',
    link: '/software/reporting',
    description: `From marketing campaigns to specific landing pages to your website traffic, Countryside has detailed reports on nearly any business activity you can think of.`,
    shortDescription: `Visualized sales pipelines and campaign statitics.`,
  },
];

const CSTools = () => {
  const isMobile = MediaQuery(480);

  return (
    <section className="bg-gradient-to-b from-[#2e769e] to-darkBlue-900 text-white py-20">
      <motion.div
        className="w-fit mx-auto text-center"
        layout
        variants={ScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
      >
        <article className="tab:max-w-[485px] xl:max-w-[600px] mx-auto text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
          <h1 className="mb-2 font-extrabold text-2xl sm:text-3xl xl:text-4xl">
            Boost Your{' '}
            <b className="block xl:pb-2 tab:inline-block text-primary text-4xl xl:text-5xl">
              Digital Presence
            </b>{' '}
            With Tools That Work
          </h1>
          <p className="text-lg font-semibold">
            (and keep customers coming back)
          </p>
        </article>
        <motion.div className="tab:max-w-[90%] mt-12 xl:mt-16 mx-2 tab:mx-auto grid grid-cols-2 tab:grid-cols-4 gap-x-2 gap-y-6 sm:gap-8 tab:gap-y-6 tab:gap-x-4 xl:gap-y-12">
          {toolsArray.map((item, i) => (
            <motion.div
              layout
              variants={ScrollUpChild}
              whileHover={{
                scale: 1.05,
              }}
              key={i}
              className="flex flex-col justify-start text-left "
            >
              <motion.span className="w-full flex flex-col justify-start items-center gap-2 text-darkBlue-100">
                <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                  <Image
                    src={item.icon}
                    loader={myLoader}
                    alt={item.tool}
                    layout="fill"
                    objectFit
                  />
                </div>
                <h3 className="text-sm sm:text-lg xl:text-xl font-bold sm:font-semibold">
                  {item.tool}
                </h3>
                <p className="sm:w-5/6 text-center text-white text-xs md:text-sm">
                  {isMobile ? item.shortDescription : item.description}
                </p>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
        <article className="mt-20 w-full h-auto flex flex-col gap-3 text-white">
          <CRMIntegrations />
        </article>
      </motion.div>
    </section>
  );
};

export default CSTools;
