import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { skills } from "../utils";

// const Skills = () => {
//   return <div className="w-full h-[100vh] px-5 lg:px-60 py-5 flex items-center">
// 	<div className="w-1/2 text-6xl text-center">
// 		SKILLS
// 	</div>

// 	<div className="w-1/2 flex flex-wrap gap-3 gap-y-6 text-xl">
// 		{skills.map((skill) => (
// 			<div className="border p-1 px-4 pb-2 rounded-full bg-white bg-opacity-10 backdrop-blur-lg">{skill}</div>
// 		))}
// 	</div>
//   </div>;
// };

const MovingDiv = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [1, 0.2], [-100, 70]);

  return (
    <motion.div
      ref={ref}
      style={{
        left: x,
      }}
      className="text-9xl w-fit text-[#e2e0e052] text-center absolute top-0 sm:top-16 left-0 font-bold"
    >
      SKILLS
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.div className="overflow-hidden">
      <div className="w-full h-[60vh] sm:h-[100vh] px-7 max-w-xl m-auto py-5 flex items-center relative">
        <MovingDiv />

        <motion.div className="w-full flex flex-wrap gap-3 gap-y-6 text-xl">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="border p-1 px-4 pb-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm"
              initial={{
                y: 70,
                opacity: 0,
              }}
              viewport={{ once: true }}
              whileInView={{
                transition: {
                  delay: i * 0.04,
                  duration: 0.5,
                },
                y: 0,
                opacity: 1,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
