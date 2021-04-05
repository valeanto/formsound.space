import React, { useRef, useEffect, useState } from "react";
import Janina from "../../src/sounds/B_Curated/janina.mp3";
import CuratedBar from "./curatedBar";
import { Link } from "react-router-dom";


export default function Sleep() {
  let audio = useRef();
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.current = new Audio(Janina);
    audio.current.play();
  }, []);
  useEffect(() => {
    return () => {
      audio.current.pause();
      console.log("in cleanup");
    };
  }, []);
  return (
    <section id="sleepBg">
      <div className="container">
        <h1 className="header">I want to sleep</h1>
        <div className="content">
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.72 185.83">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Ebene_1" data-name="Ebene 1">
                  <path
                    className="cls-1"
                    d="M43.43,57.58c8.06,22.4,17,36.53,27.76,49.62,13.08,16.45,30.73,29.78,40.14,52.44a21.51,21.51,0,0,1,2,9.87c-2.46,20.69-22.51,17-37.64,12.44-13.29-4.34-22.94-5.24-35.3-.33-9.81,7.55-23-10-28.73-25.9-5.11-13.51-5.62-26.94-7.79-46.37C2.64,93.18-1.2,71.41,1,56.94,2.77,45.79,13.27,29.46,18.56,20.66c3-4.74,5.55-8.67,7.93-12.62C31.43.29,33-3.29,32.29,5.31,31.46,13.09,35.66,37.11,43.43,57.58Z"
                  />
                </g>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.87 179.49">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Ebene_1" data-name="Ebene 1">
                  <path
                    className="cls-1"
                    d="M79.66,123.86c-9.14-21.63-19.3-35.27-31.48-47.92C33.35,60.06,13.34,47.19,2.66,25.31A18.2,18.2,0,0,1,.37,15.77c2.8-20,25.53-16.43,42.69-12,15.07,4.19,26,5.05,40,.31,11.12-7.29,26.1,9.64,32.58,25,5.79,13,6.37,26,8.83,44.78,1.42,15.61,5.77,36.64,3.3,50.62-2,10.77-13.93,26.53-19.93,35-3.42,4.58-6.3,8.38-9,12.19-5.6,7.48-7.34,10.94-6.58,2.64C93.24,166.83,88.47,143.64,79.66,123.86Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <CuratedBar />
      <div className="soundToggle">
          <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    </section>
  );
}
