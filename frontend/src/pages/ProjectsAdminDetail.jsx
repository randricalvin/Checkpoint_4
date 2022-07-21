/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProjectsAdminDetail() {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState([{}]);
  const [newDatas, setNewDatas] = useState();
  console.log(projectDetail);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projectsadmin/${id}`)
      .then((res) => {
        setProjectDetail(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const updateProject = (id) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/projectsadmin/${id}`, newDatas)
      .then((res) => {
        toast.success(`Votre projet a été modifié.`);
        console.log(res);
      })
      .catch(() => {
        toast.error("Un problème est survenue, veuillez réessayer.");
      });
  };

  const changeInfos = (event) => {
    const changeDatas = { ...newDatas };
    changeDatas[event.target.name] = event.target.value;
    setNewDatas(changeDatas);
    setProjectDetail({ ...projectDetail, ...changeDatas });
  };

  return (
    <div className="h-screen">
      <h1 className="flex justify-center font-bold text-2xl">
        {projectDetail.name}
      </h1>
      <form>
        <textarea
          label="Description"
          name="description"
          cols="10"
          rows="5"
          value={projectDetail.description}
          onChange={changeInfos}
          className="w-screen"
        >
          {projectDetail.description}
        </textarea>
        <textarea
          label="Lien Github"
          type="text"
          name="github_link"
          value={projectDetail.github_link}
          onChange={changeInfos}
          className="w-screen"
        />
        <textarea
          label="Lien du site"
          type="text"
          name="site_link"
          value={projectDetail.site_link}
          onChange={changeInfos}
          className="w-screen"
        />
      </form>
      <button
        type="button"
        className="bg-[#F5F4F2] py-1 px-6 mt-5 rounded-lg text-[#5C64CF] font-bold text-xl"
        onClick={() => updateProject(id)}
      >
        Sauvegarder
      </button>
    </div>
  );
}

export default ProjectsAdminDetail;
