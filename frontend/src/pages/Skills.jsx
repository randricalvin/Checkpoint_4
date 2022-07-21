import React from "react";
import HardSkillsTitle from "../components/HardSkillsTitle";
import CarousselSkills from "../components/CarousselSkills/CarousselSkills";

function Skills() {
  return (
    <div className="page-skills">
      <HardSkillsTitle />
      <div className="mt-10">
        <CarousselSkills />
      </div>
    </div>
  );
}

export default Skills;
