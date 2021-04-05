import React, { useRef, useEffect, useState } from "react";
import Fluffy from "../../src/sounds/B_Curated/fluffy.mp3";

import CuratedBar from './curatedBar';

export default function Relax() {
  let audio = useRef();
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.current = new Audio(Fluffy);
    audio.current.play();
  }, []);
  useEffect(() => {
    return () => {
      audio.current.pause();
      console.log("in cleanup");
    };
  }, []);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);
    return (
        <section id="relaxBg">
        <div className="container">
          <h1 className="header">Relax</h1>
          <div className="content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.65 138.03">
              
              <g id="Layer_2" data-name="Layer 2"><g id="Ebene_1" data-name="Ebene 1"><path className="cls-1 lineOne" d="M98.12,137.47c-4.27.37-6.6-1-9.86-3.31s-7.21-5.84-13.32-10A159.77,159.77,0,0,0,50,110.6c-10-4.66-21.74-9-28.5-14.57C9.17,84.33-3.08,71.31,1.47,51.65c3.09-9.86,13-22.75,33.58-34C54.54,6.14,85.39-.21,100.6.56c21,.65,25,5.27,33.68,12.21,7.65,7,19.1,17.35,28.64,28.94,10,12,16.59,23.76,17.89,33.22,1.52,9.53-2.29,16.8-8.36,21.88-12.72,11-21.75,17.82-36.64,24.5-7.22,3.36-15.25,7.07-22,10.34S101.73,137.2,98.12,137.47Z"/></g></g>
              <g id="Layer_3" data-name="Layer 2"><g id="Ebene_1" data-name="Ebene 1"><path className="cls-1" d="M98.12,137.47c-4.27.37-6.6-1-9.86-3.31s-7.21-5.84-13.32-10A159.77,159.77,0,0,0,50,110.6c-10-4.66-21.74-9-28.5-14.57C9.17,84.33-3.08,71.31,1.47,51.65c3.09-9.86,13-22.75,33.58-34C54.54,6.14,85.39-.21,100.6.56c21,.65,25,5.27,33.68,12.21,7.65,7,19.1,17.35,28.64,28.94,10,12,16.59,23.76,17.89,33.22,1.52,9.53-2.29,16.8-8.36,21.88-12.72,11-21.75,17.82-36.64,24.5-7.22,3.36-15.25,7.07-22,10.34S101.73,137.2,98.12,137.47Z"/></g></g>
              <g id="Layer_4" data-name="Layer 2"><g id="Ebene_1" data-name="Ebene 1"><path className="cls-1" d="M98.12,137.47c-4.27.37-6.6-1-9.86-3.31s-7.21-5.84-13.32-10A159.77,159.77,0,0,0,50,110.6c-10-4.66-21.74-9-28.5-14.57C9.17,84.33-3.08,71.31,1.47,51.65c3.09-9.86,13-22.75,33.58-34C54.54,6.14,85.39-.21,100.6.56c21,.65,25,5.27,33.68,12.21,7.65,7,19.1,17.35,28.64,28.94,10,12,16.59,23.76,17.89,33.22,1.52,9.53-2.29,16.8-8.36,21.88-12.72,11-21.75,17.82-36.64,24.5-7.22,3.36-15.25,7.07-22,10.34S101.73,137.2,98.12,137.47Z"/></g></g>
              
              
              
              
              </svg>

          </div>
        </div>
        <CuratedBar />
        <div className="soundToggle">
          <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
      </section>
    )
}
