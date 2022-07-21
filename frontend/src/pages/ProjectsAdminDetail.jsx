/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProjectsAdminDetailProject from "../components/ProjectsAminDetailProject";

function ProjectsAdminDetail() {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState([{}]);
  console.log(projectDetail);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projectsadmin/${id}`)
      .then((res) => {
        setProjectDetail(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>{projectDetail[0].name}</h1>
      <ProjectsAdminDetailProject description={projectDetail[0].description} />
    </div>
  );
}

export default ProjectsAdminDetail;
