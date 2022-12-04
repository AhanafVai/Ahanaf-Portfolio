import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Projects</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Ahanaf" />
        <meta
          name="description"
          content="Here are a few projects I've worked on recently. Want to see more? Email me."
        />
        <meta
          name="keywords"
          content="Design,Programmer, Codder, Frontend Development,React,Backend Development,github,firebase"
        />
        <meta />
        <link
          rel="canonical"
          href="https://ahanafabdullah.netlify.app/project"
        />
      </Helmet>
      <Navbar />
      <ProjectsHeader />
      <ProjectsCard />
    </div>
  );
};

export default Projects;
