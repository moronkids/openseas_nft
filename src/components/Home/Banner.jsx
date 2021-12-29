import React, { useContext, useEffect } from "react";
import Connect from "components/Transactions";
import { Hooks } from "providers";
import ReactPlayer from "react-player/youtube";
function Banner() {
  const {
    setScroll,
    scroll,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    datas,
  } = useContext(Hooks);
  useEffect(() => {}, [datas, wallet_]);
  return (
    <>
      <div id="banner" className="home-banner ">
        <div className="home-banner-wrapping justify-content-center align-items-center">
          {/* <div className="img">
            <img src={Icon} alt="" srcset="" />
          </div> */}
          <div className="desc">
            <h1>
              <b>Sol Hippies</b>
            </h1>
            <h2>
              <i>
                "Each month every Tribe member receives an airdrop of a unique
                piece created by a blossoming author."
              </i>
            </h2>
            <h4>New Stories Each Month.</h4>
            <h2>Stealth Minting Right Now. </h2>
          </div>
          <div className="box">
            {/* <div className="text">LAUNCHED ON : 1st January 2022 UTC</div> */}
            {wallet_ && (
              <div className="text">{datas?.[0] + "/" + datas?.[1]}</div>
            )}
            <div className="">
              {!wallet_ && <Connect />}
              {wallet_ && <Connect />}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto d-flex py-3 justify-content-center align-items-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KT_9aMPMMfU"
          // playing={true}
          controls={true}
        />
      </div> */}
      {/* <Connect /> */}
      {/* <Menu /> */}
      {/* <Menu /> */}
    </>
  );
}

export default Banner;
