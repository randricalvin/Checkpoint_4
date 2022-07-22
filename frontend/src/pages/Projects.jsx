/* eslint-disable import/no-unresolved */
import React from "react";
import ProjectsAdminCards from "@components/ProjectsAdminCards";
import ProjectsTitle from "../components/ProjectsTitle";

function Projects() {
  return (
    <div className="sm:h-screen">
      <ProjectsTitle />
      <div className="project-card">
        <div>
          <ProjectsAdminCards />
        </div>
      </div>
    </div>
  );
}

export default Projects;
