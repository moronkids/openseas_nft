import React, { useState } from "react";
import Hero from "assets/img/bg_hero.png";
import Icon1 from "assets/img/icons/dollar.png";
import Icon2 from "assets/img/icons/gift.png";
import Icon3 from "assets/img/icons/humidity.png";
import Icon4 from "assets/img/icons/rainbow.png";
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
            <div className="col d-flex">
              <div className="col-1">
                <img src={Icon1} alt="" />
              </div>
              <div className="col">
                <h3 className="p-0 m-0">Hunters:</h3>
                <p>
                  Adventurous and brave. Minting every low effort derivative
                  eventually rewarded with a massive return when a recently
                  rugged project they swept is revived and the floor 100x.{" "}
                </p>
              </div>
            </div>
            <div className="col d-flex">
              <div className="col-1">
                <img src={Icon2} alt="" />
              </div>
              <div className="col">
                <h3 className="p-0 m-0">Gatherers: </h3>
                <p>
                  Persistent and cunning. Their eye for rarity allows sniping
                  undervalued floor pieces and flipping their way to an
                  overflowing bag.{" "}
                </p>
              </div>
            </div>
            <div className="col d-flex">
              <div className="col-1">
                <img src={Icon3} alt="" />
              </div>
              <div className="col">
                <h3 className="p-0 m-0">Shamen: </h3>
                <p>
                  Curators of the truth. Always searching, never settling.
                  Fairly rare - Shaman always seem to mint rares, sell the top
                  and buy the bottom. They time the market because they can.
                </p>
              </div>
            </div>
            <div className="col d-flex">
              <div className="col-1">
                <img src={Icon4} alt="" />
              </div>
              <div className="col">
                <h3 className="p-0 m-0">Elders: </h3>
                <p>
                  Learned and wise. Elders have been trading NFTs since 2020 and
                  have the battle scars to prove it. Extremely rare - Elders
                  have the Alpha on all stealth drops and whitelist to the most
                  hyped. Bags secured ages ago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
