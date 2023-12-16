import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveDown } from "lucide-react";

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const page = {
  exit: {
    transition: { duration: 0.7 },
    opacity: 0,
  },
};

const firstName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition, duration: 0.8 },
  },
};

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const opacity = useTransform(scrollYProgress, [0.9, 0.6], [1, 0]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center  h-[90vh] sm:h-[100vh] text-[2.7rem] sm:text-6xl lg:text-8xl"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex gap-4 sm:gap-6 lg:gap-8">
        <motion.span className="overflow-hidden" variants={firstName}>
          {["P", "A", "N", "K", "A", "J"].map((char, index) => (
            <motion.span key={index} className="inline-block" variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.span>
        <motion.span className="overflow-hidden" variants={lastName}>
          {["B", "E", "N", "I", "W", "A", "L"].map((char, index) => (
            <motion.span key={index} className="inline-block" variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 1.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl py-7"
      >
        👋 Web Developer Based in India
      </motion.p>

      <motion.p
        ref={ref}
        style={{ opacity }}
        className="flex items-center gap-1 text-xl sm:text-2xl  text-[#ffffff5b] absolute bottom-14 sm:bottom-10"
      >
        Scroll for projects
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            delay: 1.5,
          }}
        >
          <MoveDown />
        </motion.span>
      </motion.p>
    </motion.div>
  );
};

export default Hero;
