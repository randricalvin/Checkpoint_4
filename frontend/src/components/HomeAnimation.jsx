/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import homeanimation from "../assets/homeanimation.svg";

function HomeAnimation() {
  return (
    <div>
      <div className="home-animation">
        <img src={homeanimation} alt="image home animation" width="450" />
      </div>
    </div>
  );
}

export default HomeAnimation;
