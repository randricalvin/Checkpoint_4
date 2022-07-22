/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProjectsAdminOne({ name, description, id }) {
  // faire un useEffect pour supprimer un projet

  const deleteProject = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/projectsadmin/${id}`)
      .then((res) => {
        toast.success(`Votre projet a été supprimé.`);
        console.log(res);
      })
      .catch(() => {
        toast.error("Un problème est survenue, veuillez réessayer.");
      });
  };
  return (
    <div>
      <div className="lg:flex flex-col lg:w-1/4 sm:flex p-6 m-3 bg-[#5C64CF] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="flex justify-center text-[#F5F4F2] text-2xl font-bold">
          {name}
        </h1>
        <p className="flex text-[#F5F4F2]">{description}</p>
        <div className="flex justify-between">
          <Link to={`/projectsadmin/${id}`}>
            <button
              className="bg-[#F5F4F2] py-1 px-6 mt-5 rounded-lg text-[#5C64CF] font-bold text-xl"
              type="submit"
            >
              Détail
            </button>
          </Link>
          <button
            type="button"
            className="bg-[#F5F4F2] py-1 px-6 mt-5 rounded-lg text-[#5C64CF] font-bold text-xl"
            onClick={() => deleteProject(id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsAdminOne;
