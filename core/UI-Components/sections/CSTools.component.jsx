import React from 'react';
import { motion } from 'framer-motion';
git;
import { ScrollUp, ScrollUpChild } from '../../Animation/motion-variants';

import {
  FaStar,
  FaFireAlt,
  FaMobileAlt,
  FaUserClock,
  FaDollarSign,
  FaLaptopCode,
  FaSignal,
} from 'react-icons/fa';

const toolsArray = [
  {
    tool: `Get Reviews`,
    icon: <FaStar size="20px" />,
    link: '/software/reviews',
    description: `Make every customer give you a review. Local businesses using Countryside see over double the monthly review volume in less than 60 days.`,
  },
  {
    tool: `Central Messaging`,
    icon: <FaMobileAlt size="20px" />,
    link: '/software/messaging',
    description: `Receive messages from leads and customers through texting, live chat, bulk messaging, Google and Facebook,
    all on desktop or your very own mobile app.`,
  },
  {
    tool: `Live Chat`,
    icon: <FaFireAlt size="20px" />,
    link: '/software/webchat',
    description: `With our Live Chat feature, you can generate up to 11x more inbound leads from your website. And because it's text-based, you'll stay connected long after they leave your site.`,
  },
  {
    tool: `SMS Marketing`,
    icon: <FaMobileAlt size="20px" />,
    link: '/software/messaging',
    description: `Get your own digital business number and start seeing a 98% open rate with SMS campaigns that get immediate responses and measurable results.`,
  },
  {
    tool: `Website & Forms`,
    icon: <FaLaptopCode size="20px" />,
    link: '/software/forms-and-websites',
    description: `Use our content management system (CMS) to build forms, landing pages, surverys, or an entire website for you business.`,
  },
  {
    tool: `Send Invoices`,
    icon: <FaDollarSign size="20px" />,
    link: '/software/payments',
    description: `Easy text 2 pay client invoicing. Simplify your client invoicing & get paid faster.`,
  },
  {
    tool: `Automate Anything`,
    icon: <FaUserClock size="20px" />,
    link: '/software/automation',
    description: `Kiss manually outreach and operations goodbye. Automate your entire customer life cycle, from marketing outreach to the purchase confirmation email.`,
  },
  {
    tool: `Reporting`,
    icon: <FaSignal size="20px" />,
    link: '/software/reporting',
    description: `From marketing campaigns to specific landing pages to your website traffic, Arcana had detailed reports on nearly any business activity you can think of.`,
  },
];

const CSTools = () => {
  return (
    <section className="bg-gradient-to-b from-[#2e769e] to-darkBlue-900 text-white py-20 tab:px-36">
      <motion.div
        className="w-fit mx-auto text-center"
        layout
        variants={ScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >
        <article className="w-fit mx-auto text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
          <h1 className="text-4xl font-extrabold tab:mb-2">
            Boost Your{' '}
            <b className="text-primary text-[40px]">Digital Presence</b> with
            Tools that Work
          </h1>
          <p className="text-lg font-semibold">
            (and keep customers coming back)
          </p>
        </article>
        <motion.div className="mt-12 grid tab:grid-cols-4 gap-8">
          {toolsArray.map((item, i) => (
            <motion.div
              layout
              variants={ScrollUpChild}
              whileHover={{
                scale: 1.05,
              }}
              key={i}
              className="flex flex-col justify-start text-left outline-2 outline-white outline rounded-xl overflow-hidden bg-darkBlue-100"
            >
              <motion.span
                className="flex w-full justify-start items-center bg-white bg-size-200 text-darkBlue-100"
                whileHover={{
                  backgroundColor: '#7ed957',
                  transition: { backgroundColor: { duration: 0.2 } },
                }}
              >
                <h3 className="tab:text-xl tab:p-2 font-bold lg:pr-3">
                  {item.tool}
                </h3>
                {item.icon}
              </motion.span>
              <p className="text-white tab:text-sm p-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CSTools;
