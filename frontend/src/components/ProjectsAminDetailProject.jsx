/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProjectsAdminDetailProject({ name, description, github, site }) {
  const [updateDatas, setUpdateDatas] = useState();
  const [datas, setDatas] = useState({});

  const updateProject = (id) => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/projectsadmin/${id}`,
        updateDatas
      )
      .then((res) => {
        toast.success(`Votre projet a été modifié.`);
        console.log(res);
      })
      .catch(() => {
        toast.error("Un problème est survenue, veuillez réessayer.");
      });
  };

  const changeInfos = (event) => {
    const changeDatas = { ...updateDatas };
    changeDatas[event.target.name] = event.target.value;
    setUpdateDatas(changeDatas);
    setDatas({ ...datas, ...changeDatas });
  };

  return (
    <div>
      <h4>{name}</h4>
      <textarea
        name="description"
        id="description"
        cols="40"
        rows="5"
        value={description}
        changeInfos={changeInfos}
      />
      <input
        type="text"
        name="github"
        id="github"
        className="w-screen"
        value={github}
        changeInfos={changeInfos}
      />
      <input
        type="text"
        name="site"
        id="site"
        className="w-screen"
        value={site}
        changeInfos={changeInfos}
      />
      <button
        type="button"
        className="bg-[#F5F4F2] py-1 px-6 mt-5 rounded-lg text-[#5C64CF] font-bold text-xl"
        onClick={() => updateProject()}
      >
        Sauvegarder
      </button>
    </div>
  );
}

export default ProjectsAdminDetailProject;
