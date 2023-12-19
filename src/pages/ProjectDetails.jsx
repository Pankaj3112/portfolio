import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar, ScrollToTop } from "../components";
import { useParams } from "react-router-dom";
import { projects } from "../utils";
import Transition from "../components/Transition";

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const first = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const last = {
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

const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 1.8, duration: 1.2 },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0.5, 0], [0.8, 1.1]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full py-28 pb-0 sm:pb-28 px-5 md:px-14 lg:px-40 overflow-x-hidden"
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl sm:text-8xl flex gap-4 overflow-hidden pb-1">
            <motion.span variants={first}>
              {project.title
                .split(" ")[0]
                .split("")
                .map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                ))}
            </motion.span>
            <motion.span variants={last}>
              {project.title
                .split(" ")[1]
                .split("")
                .map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                ))}
            </motion.span>
          </h1>
          <motion.p variants={opacity} className="text-2xl sm:text-3xl">
            {project.description_lg}
          </motion.p>

          <motion.p className="text-2xl sm:text-3xl flex items-center flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                initial={{
                  y: 70,
                  opacity: 0,
                }}
                animate={{
                  transition: {
                    delay: 1 + i * 0.04,
                    duration: 0.5,
                  },
                  y: 0,
                  opacity: 1,
                }}
                className="inline-block text-xl border rounded-full px-3 pb-1 bg-white bg-opacity-5 backdrop-blur-lg"
              >
                {tech}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            ref={ref}
            variants={opacity}
            className="flex gap-2 text-2xl"
          >
            <a
              href={project.links.github}
              target="_blank"
              className="border border-neutral-500 hover:border-neutral-100 rounded-full px-4 py-1 pt-0"
            >
              Github
            </a>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                className="border border-neutral-500 hover:border-neutral-100 rounded-full px-4 py-1 pt-0 "
              >
                Live
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          style={{ scale }}
          variants={opacity}
          className="overflow-hidden rounded-lg mt-10"
        >
          {project.video ? (
            <video className="w-full h-full" autoPlay muted loop>
              <source src={project.video} type="video/webm" />
            </video>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

const WithTransition = Transition(ProjectDetails);
export default WithTransition;
