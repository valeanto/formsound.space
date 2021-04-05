import React, { useRef, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import MouseOnTable from "../../src/sounds/B_Generator/mouseOnTable.mp3";

function Randomize() {
  let randomizeAudio = new Audio(MouseOnTable);

  const playAudioRandomizer = () => {
    randomizeAudio.currentTime = 0;
    randomizeAudio.play();
  };

  useEffect(() => {
    return () => {
      randomizeAudio.pause();
      console.log("in cleanup");
    };
  }, []);

  return (
    <>
      <section id="randomizeBg">
        <div className="container">
          <div className="item">
            <div className="svg-container randomizeItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 117.54 170.91"
                onClick={playAudioRandomizer}

              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M107.72,86.46c-10,6.89-32.82,40.7-60,50.17-2,.72-4,1.41-6,2-26.9,9.79-30.61-14-38.94-32.77-7.44-16.65,2.9-66.5,18.36-87.28C29.13,8.13,39.93.85,53.73.35,65.38-.13,77.57,6.65,87.35,17a145,145,0,0,1,13.91,17.09C117.85,59.78,120,79.27,107.72,86.46Z"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">Start randomizer</h3>
            </div>
          </div>
        </div>
        <Link to='/' className="options">
          <h3 className='caps'>Back</h3>
        </Link>
      </section>
    </>
  );
}

export default Randomize;
