import React, { useState } from "react";
import Hero from "assets/img/bg_hero.png";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-about d-flex flex-column m-auto justify-content-center align-items-center">
        {/* <hr /> */}
        <div className="text-center">
          <h2>About the Hippies</h2>
        </div>
        <div className="wrap w-100 d-sm-flex d-block flex-row mx-auto">
          <div className="w-auto mr-sm-3 p-sm-0 p-4">
            <h3>Hunters:</h3>
            <p>
              Adventurous and brave. Minting every low effort derivative
              eventually rewarded with a massive return when a recently rugged
              project they swept is revived and the floor 100x.{" "}
            </p>
            <h3>Gatherers: </h3>
            <p>
              Persistent and cunning. Their eye for rarity allows sniping
              undervalued floor pieces and flipping their way to an overflowing
              bag.{" "}
            </p>
            <h3>Shamen: </h3>
            <p>
              Curators of the truth. Always searching, never settling. Fairly
              rare - Shaman always seem to mint rares, sell the top and buy the
              bottom. They time the market because they can.
            </p>
            <h3>Elders: </h3>
            <p>
              Learned and wise. Elders have been trading NFTs since 2020 and
              have the battle scars to prove it. Extremely rare - Elders have
              the Alpha on all stealth drops and whitelist to the most hyped.
              Bags secured ages ago.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
