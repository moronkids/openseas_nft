import React, { useState } from "react";
import Hero from "assets/img/bg_hero.png";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-project d-flex flex-column m-auto justify-content-center align-items-center">
        {/* <hr /> */}
        <div className="text-center">
          <h2>SOL Hippies Lore</h2>
        </div>
        <div className="wrap w-100 d-sm-flex d-block flex-row mx-auto">
          <div className="w-auto mr-sm-3 p-sm-0 p-4">
            <p>
              Once upon a time, mighty people ruled the world. The Solean empire
              was formed from the power of words and songs, creating art,
              wonders and powerful artifacts through the sheer power of their
              stories. Myth and legends were intertwined by reality, as the Sol
              people told it into existence. It was a period of prosperity and
              happiness all across the empire. <br />
              <br /> But then the people of the empire got lazy. Technology made
              many of their earlier tasks redundant, and instead of focussing on
              the creation of new stories, they began to reusing the old ones.
              Songs faded away, and stories became legends, and became myth. For
              years, the wonders of the Solean culture were in decline, their
              buildings being repurposed for factories, storage and housing
              units. The people lost their spark until the Solean culture was
              wiped from the face of the land. <br />
              <br /> Some still remember the old days and still talk in
              whispered tones about the once great empire, built on story and
              song. They are called the Tribe of the Sol Hippies. Left their
              lives in the uncreative harsh environment and traded it for a life
              of community and peace far away. They are now starting to learn
              about the old ways once again. Campfire nights are filled with
              stories and songs of old and sometimes sparks of the ancient story
              magic returns in their midst. It will take time but the Hunters,
              Gatherers, Shaman, and Elders who make up the tribe believe that
              one day, their full power will return and stories and songs will
              rule the world once more.{" "}
            </p>
          </div>
          <div className="img"></div>
        </div>
      </div>
    </>
  );
}

export default Faq;
