import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "components/LoadingScreen";
import Banner from "components/Home/Banner";
import Desc from "components/Home/Desc";
import Team from "components/Home/Team";
import ShowCase from "components/Home/Showcase";
import Roadmap from "components/Home/Roadmap";
import Project from "components/Home/Project";
import Menu from "components/Menu";
import Faq from "components/Home/Faq";
import Zoom from "react-reveal/Zoom";
import { Hooks } from "providers";
function Index() {
  const { timer, setTimer } = useContext(Hooks);

  return (
    <div>
      <div className="wrap-body">
        <Zoom top>
          <Banner />
        </Zoom>
        <div
          id="home-project"
          className=""
          style={{
            background: "#f5f5f5",
            paddingTop: "30px",
            paddingBottom: "70px",
          }}
        >
          <Project />
        </div>
        <div
          id="home-roadmap"
          className="roadmap"
          style={{
            color: "#000000",
            paddingTop: "50px",
            paddingBottom: "70px",
          }}
        >
          {/* <Faq /> */}
          <Roadmap />
        </div>
      </div>
    </div>
  );
}

export default Index;
