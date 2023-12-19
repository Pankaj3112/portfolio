import { motion } from "framer-motion";

const Transition = (Component) => {
  return function Transitioned() {
    return (
      <div>
		<Component/>
		
        <motion.div
          className="fixed z-45 top-0 left-0 w-[100%] h-[100%] bg-black origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>

        <motion.div
          className="fixed z-45 top-0 left-0 w-[100%] h-[100%] bg-black origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </div>
    );
  };
};

export default Transition;

// const parentVariant = {
//   exit: {
//     height: "100%",
//     transition: {
//       duration: 1.9,
//       ease: [0.22, 1, 0.36, 1],
//       delayChildren: 0.4,
//       staggerChildren: 0.1,
//       staggerDirection: 1,
//     },
//   },
// };

// const parentVariant2 = {
// 	animate: {
// 	  transition: {
// 		duration: 1.9,
// 		ease: [0.22, 1, 0.36, 1],
// 		delayChildren: 0.4,
// 		staggerChildren: 0.1,
// 		staggerDirection: -1,
// 	  },
// 	},
// };

// const exitVariant = {
//   initial: { scaleY: 0 },
//   animate: { scaleY: 0 },
//   exit: { scaleY: 1 },
// };

// const enterVariant = {
//   initial: { scaleY: 1 },
//   animate: { scaleY: 0 },
//   exit: { scaleY: 0 },
// };

// const Transition = () => {
//   return (
//     <div>
//       <motion.div
//         className="z-45 pointer-events-none fixed flex bottom-0 left-0 w-[100%] "
//         variants={parentVariant}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//       >
//         {Array(6)
//           .fill()
//           .map((_, i) => (
//             <motion.div
//               key={i}
//               className={`w-1/6 h-[100%] bg-black origin-bottom`}
//               variants={exitVariant}
//             ></motion.div>
//           ))}
//       </motion.div>

//       <motion.div
//         className="z-45 pointer-events-none fixed flex top-0 left-0 w-[100%] h-[100%]"
//         variants={parentVariant2}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//       >
//         {Array(6)
//           .fill()
//           .map((_, i) => (
//             <motion.div
//               key={i}
//               className="w-1/6 h-[100%] bg-black origin-bottom"
//               variants={enterVariant}
//             ></motion.div>
//           ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Transition;
