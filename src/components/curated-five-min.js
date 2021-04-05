import React, { useRef, useEffect, useState } from "react";
import CuratedBar from "./curatedBar";
import WelcomeTextAudio from "../../src/sounds/B_Curated/headache.mp3";

export default function FiveMin() {
  let audio = useRef();
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.current = new Audio(WelcomeTextAudio);
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
    <section id="fiveMinBg">
      <div className="container">
        <h1 className="header">Five Min Pick Me Up</h1>
        <div className="content"></div>
      </div>
      <CuratedBar />
      <div className="soundToggle">
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      </div>
    </section>
  );
}
