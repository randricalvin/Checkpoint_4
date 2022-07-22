/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectsAdminOne from "./ProjectsAdminOne";

function ProjectsAdminCards() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projectsadmin`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectsAdminOne
          key={index}
          id={project.id}
          name={project.name}
          description={project.description}
          github={project.github_link}
          site={project.site_link}
        />
      ))}
    </div>
  );
}

export default ProjectsAdminCards;
