import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectsTitle from "@components/ProjectsTitle";
import ProjectsAdmin from "@components/ProjectsAdmin";

function Projects() {
  const [projects, setProjects] = useState([]);
  console.warn(projects);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}projectsadmin`, {
        withCredentials: true,
      })
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen">
      <ProjectsTitle />
      {projects.map((project) => (
        <ProjectsAdmin
          key={project.id}
          name={project.name}
          description={project.description}
          github={project.github_link}
          site={project.site_link}
        />
      ))}
    </div>
  );
}

export default Projects;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProjectsAdminDetailProject from "@components/ProjectsAdminDetailProject";

function ProjectsAdminDetail() {
  const [projectDetail, setProjectDetail] = useState([]);
  const { id } = useParams();

  console.log (projectDetail);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}projectsadmin/${id}`)
      .then((res) => {
        setProjectDetail(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>
        <h1>{projectDetail[0].name}</h1>
      </div>
      <div>
        <ProjectsAdminDetailProject
          description={projectDetail[0].description}
          github={projectDetail[0].github_link}
          site={projectDetail[0].site_link}
        />
      </div>
    </div>
  );
}

export default ProjectsAdminDetail;
