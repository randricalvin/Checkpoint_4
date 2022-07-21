/* eslint-disable import/no-unresolved */
import React from "react";
import ProjectsAdminCards from "@components/ProjectsAdminCards";
import ProjectsTitle from "../components/ProjectsTitle";

function Projects() {
  return (
    <div className="page-project">
      <ProjectsTitle />
      <ProjectsAdminCards />
    </div>
  );
}

export default Projects;
