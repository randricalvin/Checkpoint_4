import React from "react";
import { Link } from "react-router-dom";

function ProjectsAdminOne({ name, description, id }) {
  return (
    <div className="lg:flex flex-row">
      <div className="lg:flex flex-col lg:w-1/4 sm:flex p-6 m-3 bg-[#5C64CF] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="flex justify-center text-[#F5F4F2] text-2xl font-bold">
          {name}
        </h1>
        <p className="flex text-[#F5F4F2]">{description}</p>
        <Link to={`/projectsadmin/${id}`}>
          <button
            className="bg-[#F5F4F2] py-1 px-6 mt-5 rounded-lg text-[#5C64CF] font-bold text-xl"
            type="submit"
          >
            Détail
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsAdminOne;
