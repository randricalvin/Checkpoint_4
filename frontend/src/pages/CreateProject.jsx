/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateProject() {
  const [datas, setDatas] = useState({});

  const changeInfos = (event) => {
    const changeDatas = { ...datas };
    changeDatas[event.target.name] = event.target.value;
    setDatas({
      ...datas,
      ...changeDatas,
    });
  };

  const handleClickConfirm = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/createproject`, {
        name: datas.name,
        description: datas.description,
        github_link: datas.github_link,
        site_link: datas.site_link,
      })
      .then((res) => {
        toast.success(`Votre projet a bien été ajouté.`);
      })
      .catch(() => {
        toast.error(`Une erreur est survenue.`);
      });
  };

  return (
    <div>
      <form className="flex flex-col ">
        <label htmlFor="name">
          Nom du projet
          <input
            type="text"
            name="name"
            value={datas.name}
            onChange={changeInfos}
            className="flex bg-opacity-50 text-dark p-2 mt-1 mb-3 shadow-lg"
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            type="text"
            name="description"
            value={datas.description}
            onChange={changeInfos}
            className="flex bg-opacity-50 text-dark p-2 mt-1 mb-3 shadow-lg"
          />
        </label>
        <label htmlFor="github_link">
          Lien Github
          <input
            type="text"
            name="github_link"
            value={datas.github_link}
            onChange={changeInfos}
            className="flex bg-opacity-50 text-dark p-2 mt-1 mb-3 shadow-lg"
          />
        </label>
        <label htmlFor="site_link">
          Lien Site
          <input
            type="text"
            name="site_link"
            value={datas.site_link}
            onChange={changeInfos}
            className="flex bg-opacity-50 text-dark p-2 mt-1 mb-3 shadow-lg"
          />
        </label>
      </form>
      <div className="flex justify-center pb-5">
        <button
          type="button"
          onClick={() => handleClickConfirm()}
          className="bg-[#5C64CF] text-[#F5F4F2] w-40 text-darkBlue p-4 rounded-full transition duration-120 ease-out hover:bg-middleBlue my-2 active:bg-lightGreen opacity-80"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default CreateProject;
