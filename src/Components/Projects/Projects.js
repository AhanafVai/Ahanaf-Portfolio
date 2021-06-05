import React from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import Navbar from "../Navbar/Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHeader />
      <ProjectsCard />
    </div>
  );
};

export default Projects;
