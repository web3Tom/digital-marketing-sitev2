import React from 'react';
import { motion } from 'framer-motion';

import {
  ScrollUp,
  ScrollUpChild,
} from '../../core/UI-Components/motion-variants.ui';

const toolsArray = [
  {
    tool: `Reviews`,
    link: '/software/reviews',
    description: `Turn a make-or-break search into a no-brainer. Local businesses using Arcana see over double the monthly review volume in less than 60 days.`,
  },
  {
    tool: `Messaging`,
    link: '/software/messaging',
    description: `Don't miss a beat, no matter how customers reach you. Bring every conversation and touchpoint—from chat to reviews to voicemail—into a single thread, and respond instantly over text.`,
  },
  {
    tool: `Live Chat`,
    link: '/software/webchat',
    description: `With our Live Chat feature, you can generate up to 11x more inbound leads from your website. And because it's text-based, you'll stay connected long after they leave your site.`,
  },
  {
    tool: `SMS Marketing`,
    link: '/software/messaging',
    description: `Get your own digital business number and start seeing a 98% open rate with SMS campaigns that get immediate responses and measurable results.`,
  },
  {
    tool: `Website & Forms`,
    link: '/software/forms-and-websites',
    description: `Use our content management system (CMS) to build forms, landing pages, surverys, or an entire website for you business.`,
  },
  {
    tool: `Payments`,
    link: '/software/payments',
    description: `Easy text 2 pay client invoicing. Simplify your client invoicing & get paid faster.`,
  },
  {
    tool: `Automation`,
    link: '/software/automation',
    description: `Kiss manually outreach and operations goodbye. Automate your entire customer life cycle, from marketing outreach to the purchase confirmation email.`,
  },
  {
    tool: `Reporting`,
    link: '/software/reporting',
    description: `From marketing campaigns to specific landing pages to your website traffic, Arcana had detailed reports on nearly any business activity you can think of.`,
  },
];

const ArcanaTools = () => {
  return (
    <section className="bg-gray-300 text-black py-20 md:px-36">
      <div className="w-fit mx-auto text-center">
        <h1 className="text-3xl font-extrabold md:mb-2">
          Own Your Digital Presence with Tools that Work
        </h1>
        <p className="text-gray-500 text-lg">
          (and keep customers coming back)
        </p>
        <motion.div
          variants={ScrollUp}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-4 gap-8 pt-10"
          viewport={{ amount: 0.3 }}
        >
          {toolsArray.map((item, i) => (
            <motion.div
              variants={ScrollUpChild}
              whileHover={{ scale: 1.1 }}
              key={i}
              className="flex flex-col justify-start text-left border-2 border-black rounded-xl px-3 pb-3"
            >
              <h3 className="md:text-2xl md:p-2 font-black text-black">
                {item.tool}
              </h3>
              <p className="text-black md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArcanaTools;
