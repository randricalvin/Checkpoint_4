import React from "react";
import ButtonLetsTalk from "../components/ButtonLetsTalk";
import Presentation from "../components/Presentation";
import HomeAnimation from "../components/HomeAnimation";

function Home() {
  return (
    <div className="page-home flex justify-evenly">
      <div>
        <Presentation />
        <ButtonLetsTalk />
      </div>
      <div>
        <HomeAnimation />
      </div>
    </div>
  );
}

export default Home;
