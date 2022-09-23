import { FaAngellist } from 'react-icons/fa';

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
            icon: <FaAngellist />,
            description: "Guaranteed ranking or you don't pay. Period.",
          },
          {
            path: '/services/dbr',
            name: 'Database Reactivation Campaign',
            icon: <FaAngellist />,
            description:
              "Give us your stale contact list. We'll give you back fresh customers.",
          },
        ],
      },
      {
        name: 'Growth Software',
        title: "Arcana's CRM Platform",
        subTitle: `Ready to take your business's digital presence seriously? Get everything an entrepenuer needs for less than half the price of Hubspot.`,
        subRoutes: [
          {
            path: '/software/messaging',
            name: 'Messaging',
            icon: <FaAngellist />,
            description: 'Messaging from Arcana',
          },
          {
            path: '/software/automation',
            name: 'Automation',
            icon: <FaAngellist />,
            description: 'Automation from Arcana',
          },
          {
            path: '/software/reviews',
            name: 'Reviews',
            icon: <FaAngellist />,
            description: 'Reviews from Arcana',
          },
          {
            path: '/software/social-media',
            name: 'Social Media',
            icon: <FaAngellist />,
            description: 'Social Media from Arcana',
          },
          {
            path: '/software/payments',
            name: 'Payments',
            icon: <FaAngellist />,
            description: 'Payments from Arcana',
          },
          {
            path: '/software/forms-and-websites',
            name: 'Forms and Websites',
            icon: <FaAngellist />,
            description: 'Forms and Websites from Arcana',
          },
          {
            path: '/software/reporting',
            name: 'Reporting',
            icon: <FaAngellist />,
            description: 'Reporting from Arcana',
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
