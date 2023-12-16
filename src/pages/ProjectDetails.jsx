import React from "react";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";
import {projects} from "../utils";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] flex items-center justify-center text-5xl">
        {project.title}
      </div>
    </>
  );
};

export default ProjectDetails;
