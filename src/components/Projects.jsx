import { Link } from "react-router-dom";
import { projects } from "../utils";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div className="grid lg:auto-rows-[250px] grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 px-5 sm:px-32 lg:px-60 py-5">
      {projects.map((project, index) => (
        <>
          <div
            className={
              "group rounded-md lg:rounded-xl border border-neutral-700 hover:border-neutral-500 bg-neutral-900 cursor-pointer overflow-hidden relative" +
              (index === 0 ? " lg:row-span-2 lg:col-span-2" : "") +
              (index === 4 ? " lg:col-span-2" : "")
            }
            key={project.id}
          >
            <div className="hidden lg:flex p-4 text-center flex-col w-full h-full absolute justify-center items-center rounded-md lg:rounded-xl bg-black bg-opacity-40 backdrop-blur-md transition-all duration-500 opacity-0 group-hover:opacity-100">
              <h1 className={index == 0 ? "text-4xl" : "text-2xl"}>
                {project.title}
              </h1>
              <p
                className={
                  "leading-5 " + (index == 0 ? "text-xl mt-2" : "text-md mt-1")
                }
              >
                {project.description}
              </p>

              <div className="flex gap-2 absolute right-5 top-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  className="border border-neutral-500 hover:border-neutral-100 rounded-full px-3 py-1 pt-0"
                >
                  Github
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="border border-neutral-500 hover:border-neutral-100 rounded-full px-3 py-1 pt-0"
                  >
                    Live
                  </a>
                )}
              </div>

              <Link to={`/project/${project.id}`}>
                <div className="absolute left-5 bottom-4 flex gap-1 items-center border-b px-1 text-lg hover:gap-5 transition-all">
                  Details
                  <span>
                    <MoveRight size={28} />
                  </span>
                </div>
              </Link>
            </div>

            <div className="w-full h-full rounded-md lg:rounded-xl overflow-hidden">
              <img
                className={
                  "w-full h-full object-cover" +
                  (index === 1 || index == 4 || index == 2
                    ? " lg:object-left-top"
                    : "")
                }
                src={project.image}
                alt=""
              />
            </div>
          </div>

          <div
            key={`${index}-bottom`}
            className="lg:hidden pl-2 pt-2 mb-16 flex-col relative"
          >
            <h1 className="text-2xl">{project.title}</h1>
            <p className="text-md">{project.description}</p>

            <div className="flex gap-2 absolute right-1 bottom-0 text-sm">
              <a
                href={project.links.github}
                target="_blank"
                className="border border-neutral-500 hover:border-neutral-100 rounded-full px-3 pb-1"
              >
                Github
              </a>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  className="border border-neutral-500 hover:border-neutral-100 rounded-full px-3 pb-1"
                >
                  Live
                </a>
              )}
            </div>

            <Link to={`/project/${project.id}`}>
              <div className="w-fit flex gap-1 items-center border-b text-lg hover:gap-5 transition-all mt-3">
                Details
                <span>
                  <MoveRight size={28} />
                </span>
              </div>
            </Link>
          </div>
        </>
      ))}
    </motion.div>
  );
};

export default Projects;
