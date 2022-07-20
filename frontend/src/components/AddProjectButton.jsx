/* eslint-disable react/prop-types */
import addproject from "../assets/projects/addproject.svg";

function AddProjectButton({ action }) {
  return (
    <div className="flex lg:flex mt-5 items-center  sm:flex justify-center">
      <h2 className="font-bold text-xl text-[#5C64CF] sm:flex hidden">
        Add project
      </h2>
      <button type="button" onClick={action}>
        <img
          src={addproject}
          alt="plus icon for illustration"
          className="w-9 m-2 transition duration-120 ease-out hover:scale-110"
        />
      </button>
    </div>
  );
}

export default AddProjectButton;
