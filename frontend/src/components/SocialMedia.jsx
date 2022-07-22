import React from "react";
import linkedin from "../assets/contact/linkedin.svg";
import github from "../assets/contact/github.svg";
import linktree from "../assets/contact/linktree.svg";

function SocialMedia() {
  return (
    <div className="social-media flex justify-center items-center">
      <h1 className="text-xl font-bold text-[#F5F4F2]">Check out our</h1>
      <div>
        <a href="https://www.linkedin.com/in/calvin-randrianantenaina-26986a118/">
          <img
            className="mx-5 w-10 transition duration-300 ease-in-out"
            src={linkedin}
            alt="logo linkedin"
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/randricalvin">
          <img
            className="w-10 transition duration-300 ease-in-out"
            src={github}
            alt="logo github"
          />
        </a>
      </div>
      <div>
        <a href="https://linktr.ee/randrianantenaina">
          <img
            className="mx-5 w-10 transition duration-300 ease-in-out"
            src={linktree}
            alt="logo linktree"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
