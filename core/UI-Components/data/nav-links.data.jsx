import {
  FaBullhorn,
  FaFireAlt,
  FaMobileAlt,
  FaUserClock,
  FaThumbsUp,
  FaDollarSign,
  FaLaptopCode,
  FaSignal,
} from 'react-icons/fa';

export const Routes = [
  {
    name: 'What We Do',
    subRoutes: [
      {
        name: 'Digital Marketing Services',
        title: 'Digital Marketing Services',
        subTitle: `Do your business a solid and leverage our expertise for extraordinary growth. Become the leader in your area!`,
        subRoutes: [
          {
            path: '/services/social-media-marketing',
            name: 'Social Media Marketing',
            icon: <FaBullhorn size="25px" />,
            description:
              'Grow your customer base. Get Leads. Increase Your Bottom Line.',
          },
          {
            path: '/services/SEO',
            name: 'Hyper SEO',
            icon: <FaBullhorn size="25px" />,
            description: "Guaranteed ranking or you don't pay. Period.",
          },
          {
            path: '/services/dbr',
            name: 'Database Reactivation',
            icon: <FaFireAlt size="25px" />,
            description:
              "Give us your stale contact list. We'll give you back fresh customers.",
          },
        ],
      },
      {
        name: 'Business Software',
        title: 'All-in-one CRM Platform',
        subTitle: `Ready to take your business's digital presence seriously? Get everything an entrepenuer needs for less than half the price of Hubspot.`,
        subRoutes: [
          {
            path: '/software/messaging',
            name: 'Messaging',
            icon: <FaMobileAlt size="15px" />,
            description: 'Manage messages from a single inbox',
          },
          {
            path: '/software/automation',
            name: 'Automation',
            icon: <FaUserClock size="15px" />,
            description: `Automate sales & marketing`,
          },
          {
            path: '/software/reviews',
            name: 'Reviews',
            icon: <FaThumbsUp size="15px" />,
            description: 'Get reviews on autopilot',
          },
          {
            path: '/software/livechat',
            name: 'Live Chat',
            icon: <FaThumbsUp size="15px" />,
            description: 'Generate 11x more inbound leads from your website',
          },
          {
            path: '/software/payments',
            name: 'Payments',
            icon: <FaDollarSign size="15px" />,
            description: 'Invoice via email or text at the click of a button',
          },
          {
            path: '/software/forms-and-websites',
            name: 'Forms & Sites',
            icon: <FaLaptopCode size="15px" />,
            description: `Design forms, website, surverys & more`,
          },
        ],
      },
      {
        name: 'Web Development',
        title: 'Web Development Services',
        subTitle: `Do your business a solid and leverage our expertise for extraordinary growth. Become the leader in your area!`,
        subRoutes: [
          {
            path: '/services/web-development',
            name: 'Get a Professional Website',
            icon: <FaBullhorn size="25px" />,
            description:
              'Get an affordable, high-converting website with the help of our experts.',
          },
          {
            path: '/services/livechat',
            name: 'Live Chat Widget',
            icon: <FaThumbsUp size="25px" />,
            description:
              "Give us your stale contact list. We'll give you back fresh customers.",
          },
        ],
      },
    ],
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'Why Us?',
    path: '/why-us',
  },
  {
    name: 'Login',
    path: 'https://app.countrysidemedia.io',
  },
];
