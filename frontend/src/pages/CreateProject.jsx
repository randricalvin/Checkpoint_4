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
        <label htmlFor="name" className="m-auto text-xl font-bold mt-5">
          Nom du projet
          <input
            type="text"
            name="name"
            value={datas.name}
            onChange={changeInfos}
            className="flex w-80 m-auto mt-2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
          />
        </label>
        <label htmlFor="description" className="m-auto text-xl font-bold mt-5">
          Description
          <textarea
            type="text"
            name="description"
            value={datas.description}
            onChange={changeInfos}
            className="flex  w-80 m-auto mt-2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
          />
        </label>
        <label htmlFor="github_link" className="m-auto text-xl font-bold mt-5">
          Lien Github
          <input
            type="text"
            name="github_link"
            value={datas.github_link}
            onChange={changeInfos}
            className="flex  w-80 mt-2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
          />
        </label>
        <label htmlFor="site_link" className="m-auto text-xl font-bold mt-5">
          Lien Site
          <input
            type="text"
            name="site_link"
            value={datas.site_link}
            onChange={changeInfos}
            className="flex  w-80 mt-2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg"
          />
        </label>
      </form>
      <div className="flex justify-center pb-5">
        <button
          type="button"
          onClick={() => handleClickConfirm()}
          className="text-xl font-bold mt-10 bg-[#5C64CF] text-[#F5F4F2] w-40 text-darkBlue p-3 rounded-lg transition duration-120 ease-out hover:bg-middleBlue my-2 active:bg-lightGreen opacity-80"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default CreateProject;
