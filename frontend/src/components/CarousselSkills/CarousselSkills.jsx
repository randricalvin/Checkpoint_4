import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import jslogo from "../../assets/jslogo.svg";
import reactlogo from "../../assets/reactlogo.svg";
import nodelogo from "../../assets/nodelogo.svg";
import htmllogo from "../../assets/htmllogo.svg";
import csslogo from "../../assets/csslogo.svg";
import figma from "../../assets/figmalogo.svg";
import adobeillustrator from "../../assets/adobeillustrator.svg";
import adobeindesign from "../../assets/adobeindesign.svg";
import adobephotoshop from "../../assets/adobephotoshop.svg";
import adobelightroom from "../../assets/adobelightroom.svg";
import github from "../../assets/github.svg";
import adobeXd from "../../assets/adobeXd.svg";

function CarousselSkills() {
  return (
    <div className="w-3/5 m-auto">
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots
        showSides
        sidesOpacity={0.5}
        sideSize={0.2}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice
      >
        <div>
          <img
            alt="logojs"
            src={jslogo}
            style={{ width: "8rem", height: "8rem" }}
          />
        </div>
        <div>
          <img
            alt="logoreact"
            src={reactlogo}
            style={{ width: "8rem", height: "8rem" }}
          />
        </div>
        <div>
          <img
            alt="logonode"
            src={nodelogo}
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
        <div>
          <img
            alt="logohtml"
            src={htmllogo}
            style={{ width: "8rem", height: "8rem" }}
          />
        </div>
        <div>
          <img
            alt="logocss"
            src={csslogo}
            style={{ width: "7.5rem", height: "7.5rem" }}
          />
        </div>
        <div>
          <img
            alt="logogithub"
            src={github}
            style={{ width: "8rem", height: "8rem" }}
          />
        </div>
        <div>
          <img
            alt="logofigma"
            src={figma}
            style={{ width: "8rem", height: "8rem" }}
          />
        </div>
        <div>
          <img
            alt="logoadobeillustrator"
            src={adobeillustrator}
            style={{ width: "7rem", height: "7rem" }}
          />
        </div>
        <div>
          <img
            alt="logoadobeindesign"
            src={adobeindesign}
            style={{ width: "7rem", height: "7rem" }}
          />
        </div>
        <div>
          <img
            alt="logoadobephotoshop"
            src={adobephotoshop}
            style={{ width: "7rem", height: "7rem" }}
          />
        </div>
        <div>
          <img
            alt="logoaadobelightroom"
            src={adobelightroom}
            style={{ width: "7rem", height: "7rem" }}
          />
        </div>
        <div>
          <img
            alt="logoaadobeXd"
            src={adobeXd}
            style={{ width: "7rem", height: "7rem" }}
          />
        </div>
      </InfiniteCarousel>
    </div>
  );
}

export default CarousselSkills;
