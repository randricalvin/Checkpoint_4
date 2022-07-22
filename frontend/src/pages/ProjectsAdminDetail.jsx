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
        <label className="flex flex-col items-center text-xl font-bold mt-5">
          Description
          <textarea
            name="description"
            cols="10"
            rows="5"
            value={projectDetail.description}
            onChange={changeInfos}
            className="flex  w-80 m-auto mt-2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#5C64CF] focus:shadow-lg"
          >
            {projectDetail.description}
          </textarea>
        </label>
        <label
          htmlFor="github"
          className="flex flex-col items-center text-xl font-bold mt-5"
        >
          Lien Github
          <textarea
            label="Lien Github"
            type="text"
            name="github_link"
            value={projectDetail.github_link}
            onChange={changeInfos}
            className="flex m-auto w-80 mt-2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#5C64CF] focus:shadow-lg"
          />
        </label>
        <label
          htmlFor="site"
          className="flex flex-col items-center text-xl font-bold mt-5"
        >
          Lien du site
          <textarea
            label="Lien du site"
            type="text"
            name="site_link"
            value={projectDetail.site_link}
            onChange={changeInfos}
            className="flex m-auto w-80 mt-2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#5C64CF] focus:shadow-lg"
          />
        </label>
      </form>
      <button
        type="button"
        className="flex m-auto justify-center text-xl font-bold mt-10 bg-[#5C64CF] text-[#F5F4F2] w-40 text-darkBlue p-3 rounded-lg transition duration-120 ease-out hover:bg-middleBlue active:bg-lightGreen opacity-80"
        onClick={() => updateProject(id)}
      >
        Sauvegarder
      </button>
    </div>
  );
}

export default ProjectsAdminDetail;
