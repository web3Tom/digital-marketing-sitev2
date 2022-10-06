// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// const ddContainer = {
//   hidden: (i) => ({ zindex: '0', height: '0px', width: '0px' }),
//   show: (i) => ({
//     zindex: '20',
//     height: '300px',
//     width: '680px',
//     transition: {
//       type: 'tween',
//       duration: 0.3,
//       ease: 'linear',
//     },
//     exit: {
//       zindex: '0',
//       height: '0px',
//       width: '0px',
//       transition: {
//         type: 'tween',
//         duration: 0.1,
//       },
//     },
//   }),
// };

// const ddChild = {
//   hidden: (i) => ({ opacity: 0 }),
//   show: (i) => ({
//     opacity: 1,
//   }),
//   exit: (i) => ({
//     opacity: 0,
//     transition: {
//       type: 'tween',
//       duration: 0.2,
//     },
//   }),
// };

// const MenuDropDown = ({ linksArray, open }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           ref={ref}
//           className="dropdown-hover absolute left-0 tab:top-0 tab:mt-9 tab:w-[680px] bg-white rounded-lg tab:px-5 tab:pt-5 tab:pb-8 text-center"
//           key={linksArray.id}
//           variants={ddContainer}
//           initial="hidden"
//           animate="show"
//           exit="exit"
//           onHoverStart={() => setOpen(!open)}
//           onHoverEnd={() => setOpen(!open)}
//         >
//           {linksArray.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col gap-4"
//               variants={ddChild}
//               initial="hidden"
//               animate="show"
//               exit="exit"
//             >
//               <h1 className="font-bold text-black text-xl">{route.title}</h1>
//               <h3 className="font-light text-gray-700 text-md">
//                 {item.subTitle}
//               </h3>
//               <div className="grid grid-cols-3 gap-x-5 gap-y-5 justify-items-start mt-7">
//                 {item.features.map((feature) => (
//                   <span
//                     key={feature.id}
//                     className="flex justify-center gap-3 items-center"
//                   >
//                     <p className="font-light text-black text-xs">Icon</p>
//                     <Link href="/">
//                       <a className="text-black text-md font-semibold">
//                         {feature.feature}
//                       </a>
//                     </Link>
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MenuDropDown;
