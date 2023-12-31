import React from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import projectList from "./ProjectList";

function Project() {
  return (
    <div id="projects" className="project-section">
      <h1>PROJECTS</h1>
      <div className="project-container">
        <ProjectCard project={projectList.Starpath} />
        <ProjectCard project={projectList.InfoDrill} />
        <ProjectCard project={projectList.Portfolio} />
      </div>
    </div>
  );
}

export default Project;
