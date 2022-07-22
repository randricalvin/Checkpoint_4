/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from "react";
import AddProjectButton from "@components/AddProjectButton";
import ProjectsAdminCards from "@components/ProjectsAdminCards";

function ProjectsAdmin() {
  return (
    <div className="sm:h-screen">
      <AddProjectButton />
      <ProjectsAdminCards />
    </div>
  );
}

export default ProjectsAdmin;
