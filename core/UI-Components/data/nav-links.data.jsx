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
        title: 'Arcana Growth Services',
        subTitle: `Do your business a solid and leverage our expertise for extraordinary growth. Become the leader in your area!.`,
        subRoutes: [
          {
            path: '/services/SEO',
            name: 'Hyper SEO',
            icon: <FaBullhorn size="30px" />,
            description: "Guaranteed ranking or you don't pay. Period.",
          },
          {
            path: '/services/dbr',
            name: 'Database Reactivation',
            icon: <FaFireAlt size="30px" />,
            description:
              "Give us your stale contact list. We'll give you back fresh customers.",
          },
        ],
      },
      {
        name: 'Arcana Growth Software',
        title: "Arcana's CRM Platform",
        subTitle: `Ready to take your business's digital presence seriously? Get everything an entrepenuer needs for less than half the price of Hubspot.`,
        subRoutes: [
          {
            path: '/software/messaging',
            name: 'Messaging',
            icon: <FaMobileAlt size="20px" />,
            description:
              'Manage messages from a single inbox for text, FB messages, GMB, and more',
          },
          {
            path: '/software/automation',
            name: 'Automation',
            icon: <FaUserClock size="20px" />,
            description: `Automate entire sales processes or simple auto-responses`,
          },
          {
            path: '/software/reviews',
            name: 'Reviews',
            icon: <FaThumbsUp size="20px" />,
            description:
              'Make sure every customer is requested to leave a review',
          },
          {
            path: '/software/payments',
            name: 'Payments',
            icon: <FaDollarSign size="20px" />,
            description: 'Invoice via email or text at the click of a button',
          },
          {
            path: '/software/forms-and-websites',
            name: 'Forms and Websites',
            icon: <FaLaptopCode size="20px" />,
            description: `Design your own forms, website, surverys and more`,
          },
          {
            path: '/software/reporting',
            name: 'Reporting',
            icon: <FaSignal size="20px" />,
            description: 'Track sales, campaigns, email and call statistics',
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
    name: 'Why Arcana?',
    path: '/why-arcana',
  },
];
