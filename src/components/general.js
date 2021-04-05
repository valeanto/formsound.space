import { Link } from "react-router-dom";
import React, { useState } from "react";
// Import all audios
import Fingernails from "../../src/sounds/B_Generator/fingernails.mp3";
import Tapping from "../../src/sounds/B_Generator/tapping.mp3";
import PageTurning from "../../src/sounds/B_Generator/pageTurning.mp3";
import Humming from "../../src/sounds/B_Generator/humming.mp3";
import Buzzing from "../../src/sounds/B_Generator/buzzing.mp3";
import Breathing from "../../src/sounds/B_Generator/breathing.mp3";
import Crinkling from "../../src/sounds/B_Generator/cricklingPaper.mp3";
import MouseOnTable from "../../src/sounds/B_Generator/mouseOnTable.mp3";
import StickyFingers from "../../src/sounds/B_Generator/stickyFingers.mp3";
import CatPurring from "../../src/sounds/B_Generator/catPurr.mp3";
import WaterDrops from "../../src/sounds/B_Generator/waterDrops.mp3";
import EarBruising from "../../src/sounds/B_Generator/earBruising.mp3";
import PersonalAttention from "../../src/sounds/B_Generator/personalAttention.mp3";
import Scratching from "../../src/sounds/B_Generator/scratching.mp3";
// import Whispering from "../../src/sounds/B_Generator/whispering.mp3";
import Pouring from "../../src/sounds/B_Generator/pouring.mp3";
import StickyNotes from "../../src/sounds/B_Generator/stickyNotes.mp3";

function General() {
  
  const [rangeval, setRangeval] = useState(null);
  // ALL AUDIOS
  let audioFingernails = new Audio(Fingernails);
  let audioTapping = new Audio(Tapping);
  let audioPageTurning = new Audio(PageTurning);
  let audioHumming = new Audio(Humming);
  let audioBuzzing = new Audio(Buzzing);
  let audioStickyFingers = new Audio(StickyFingers);
  let audioBreathing = new Audio(Breathing);
  let audioCatPurring = new Audio(CatPurring);
  let audioEarBruising = new Audio(EarBruising);
  let audioPersonalAttention = new Audio(PersonalAttention);
  let audioScratching = new Audio(Scratching);
  let audioCrinkling = new Audio(Crinkling);
  // let audioWhispering = new Audio(Whispering);
  let audioPouring = new Audio(Pouring);
  let audioMouseOnTable = new Audio(MouseOnTable);
  let audioStickyNotes = new Audio(StickyNotes);
  let audioWaterDrops = new Audio(WaterDrops);

  return (
    <>
      <section id="generateBg">
        <div className="slidecontainer">
          <div className="slidecontainer-units">
            <p>5 MIN</p>
            <p>15 MIN</p>
            <p>30 MIN</p>
            <p>1 HR</p>
            <p>1 1/2</p>
          </div>
          <div>
            <div>
              <input
                type="range"
                className="custom-range"
                min="199"
                max="3999"
                className="slider"
                id="myRange"
                onChange={(event) => setRangeval(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="generate-container">
          <div className="content">
            <div id="relax" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151.45 167.37"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M72.43,158.73c-7.9,8.81-13.16,10.79-17.54,5.14-2.79-3.58-6.74-4.88-10.55-3.22-5.84,2.63-10.86-.87-13.7-9.58-1.53-4.75-4.4-8.29-8.1-9.44-20-5.89-31.87-27.82-12-52.47a24.57,24.57,0,0,0,4.42-9.33C20,58.18,33.34,40.19,45.29,31.75c3-2.07,5.53-5.64,7.31-9.76C56.37,13.5,60.52,9.31,64,10.5c2.16.72,5-.94,7.34-4.63,3.44-5.34,6-6.88,7.44-4.38,1.31,2.18,1.84,1.82,3.83-.25,1-1,2.72.79,2.84,3.83.12,4.19,1.31,7.23,3,8.84,1.41,1.33,2.64,6,4,13.13.65,3.42,2.09,6.14,4,7.6,10.46,8.6,25.8,25.48,30.32,43.49a16.89,16.89,0,0,0,3.54,7.09c14.31,17.11,27.3,32.55,17.38,37.85a6.67,6.67,0,0,0-3.35,7.37c1.54,6.83-7,8.49-21.58,7.94a12.1,12.1,0,0,0-9.57,4.09c-7.8,8.28-20.58,14.78-31,12.55C78.85,154.3,75.27,155.63,72.43,158.73Z"
                      onMouseEnter={() => {
                        audioFingernails.play();
                      }}
                      onMouseLeave={() => audioFingernails.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">Fingernails</h3>
            </div>
            <div id="tapping" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 115.87 141.24"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M107.72,86.46c-10,6.89-32.82,40.7-60,50.17-2,.72-4,1.41-6,2-26.9,9.79-30.61-14-38.94-32.77-7.44-16.65,2.9-66.5,18.36-87.28C29.13,8.13,39.93.85,53.73.35,65.38-.13,77.57,6.65,87.35,17a145,145,0,0,1,13.91,17.09C117.85,59.78,120,79.27,107.72,86.46Z"
                      onMouseEnter={() => audioTapping.play()}
                      onMouseLeave={() => audioTapping.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">tapping</h3>
            </div>

            <div id="pageTurning" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 231.09 132.14"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M227.76,31c4.13,4.35,4,5.93-.14,5.86-2.76,0-4.26,1.24-3.84,2.83.66,2.59-2.28,3.68-8.5,4.64-3.56.56-6.67,2.23-8.18,4.25-9,11.39-49.48,66.72-78.61,69.92-3.51.25-8.59,1.84-14.58,4.59C65.61,145.87,35.38,119.41,33.54,99c-.66-4.34-7-6.2-17-5.86-21.66.69-20.34-9-3.61-20.62,9.15-6.39,12.86-12.55,11.23-17.4C22,48.26,28.35,41.31,37.56,37.83c7.68-3,8.26-3.91,10.37-8.34,1-2.08,8.19-5.32,12.64-4.92a38.28,38.28,0,0,0,17.8-3.27c4.1-1.83,11.54-2.47,22.29-2.85a35.62,35.62,0,0,0,13.23-3c18-8.38,40.52-13.89,57.38-13a27.49,27.49,0,0,0,6.51-.39c14.7-2.91,25.39-2.4,30.38,1.68a21.52,21.52,0,0,0,6.07,3c5.31,1.92,7.76,4.95,6.53,7.58-.33.74.62,2,2.43,3.33,5.89,4.69,7.63,8.75,4.05,10.06C226.11,28.3,226.34,29.51,227.76,31Z"
                      onMouseEnter={() => audioPageTurning.play()}
                      onMouseLeave={() => audioPageTurning.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">page turning</h3>
            </div>
            <div id="humming" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 157.32 143.64"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M121.65,78.9c-14.26,12.27-29.22,22.77-33.81,27.81C77.24,118,74.69,127,74.9,127.71,73.72,138,79.68,142.52,78,143.22c-.86.69-9.39-2.46-20-7.84-14.8-5.28-37.13-16.65-46.42-26.72C7.2,104.47,3.51,102,3,91.84c-3.3-2.26-4.35-6.8,1.23-9-1.62-3.08,2.47-4.36,8.64-11.56,1.14.9,12-5.52,16.4-5.88,9-5.94,18.54-12.86,25.76-19.78,7.49-6.87,12.71-13.74,19.19-18.51C92.92,15.73,98-1.25,119.32.44c15.85,9,33.57,18.78,37.65,27.34C151.57,47.05,136,64.84,121.65,78.9Z"
                      onMouseEnter={() => audioHumming.play()}
                      onMouseLeave={() => audioHumming.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">humming</h3>
            </div>
            <div id="buzzing" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 116.48 132.94"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M111.72,94.49c-4.23,3.76-9.64,16.19-18.63,25.26-8.92,9.33-21.43,15.3-38.33,11.89-2.44-.42-4.93-.92-7.42-1.51-34.78-8.52-40.56-26.66-46.15-39.6C-1.68,84.5,2.9,75.74,10.51,64,18.1,52.51,28.71,38,37.56,27.38,46.72,16.83,56.38,6.81,66,2.08c8.15-4,14.85-1.07,21.31,8.2A174,174,0,0,1,97.59,27.43C112,56.27,122.53,87.14,111.72,94.49Z"
                      onMouseEnter={() => audioBuzzing.play()}
                      onMouseLeave={() => audioBuzzing.pause()}
                    />
                  </g>
                </g>
              </svg>

              <h3 className="title">buzzing</h3>
            </div>
            <div id="stickyFingers" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127.27 117.05"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M61.46,116.73c-12.11,0-18.33-1.63-24.77-4.57A88,88,0,0,1,17.94,99.68C5.19,89.15-4.89,74.6,3.26,58.53S17.42,27.9,25.52,17.37A42.93,42.93,0,0,1,42.41,4.9C49.17,2,57.35.32,61.46.32c5.69,0,6.9,1.63,10,4.58,2.8,2.94,7.46,7.2,13.66,12.47,12.69,10.53,29.82,25.08,34.57,41.16s11.89,30.62,3.24,41.15c-4.28,5.27-12.74,9.53-24.63,12.48A167.1,167.1,0,0,1,61.46,116.73Z"
                      onMouseEnter={() => audioStickyFingers.play()}
                      onMouseLeave={() => audioStickyFingers.pause()}
                    />
                  </g>
                </g>
              </svg>

              <h3 className="title">sticky fingers</h3>
            </div>
            <div id="breathing" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 137.73 122.02"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M135.24,68.78c3.37,14.6,2.44,22-.29,28.66a40.07,40.07,0,0,1-14.31,16.76c-13.2,9.85-33,10.43-53.93-.84-21-10.93-39.67-16-52.06-22.08C8.49,88.05,4,84,1.92,78.69a22.58,22.58,0,0,1-.64-14.84c1.65-4.54,3.87-5.55,7.93-8a179.63,179.63,0,0,0,16.71-11C40.12,34.63,55.51,20,66.81,13.42,79.24,7.4,85.49-3.94,96.32,2c5.5,3,13,11,20.87,24C125,38.57,132.46,56.43,135.24,68.78Z"
                      onMouseEnter={() => audioBreathing.play()}
                      onMouseLeave={() => audioBreathing.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">breathing</h3>
            </div>
            <div id="catPurring" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 117.54 170.91"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M105.74,142.59c-17,29.69-42.85,36.24-70.25,17.35a54,54,0,0,1-6-4.51C3.6,132.27,6,117.23,1.43,98.23c-4.22-17.09,4.23-31.94,15.3-53.8C22.63,33.8,28.87,21.86,37.36,11,44.48,1.78,54.24-2.63,66.61,2.49A73.18,73.18,0,0,1,86,14.8C99.25,26,111.15,48,115.31,72.67,119.74,97.22,116.43,124.54,105.74,142.59Z"
                      onMouseEnter={() => audioCatPurring.play()}
                      onMouseLeave={() => audioCatPurring.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">cat purring</h3>
            </div>
            <div id="waterDrops" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 134.57 136.54"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M131.57,106.21c-7.68,21.28-30.07,32.68-73.63,29.47a95.53,95.53,0,0,1-9.51-1.12C5,127.16,3.91,111.31.57,88.08c-2.34-22,12.47-47.3,29.75-64.75C39.53,14.54,49.86,7.08,62.05,2.5,72.36-1.36,82.64-.15,92,6.68a112,112,0,0,1,14.41,12.67C124.65,39,140.78,79.48,131.57,106.21Z"
                      onMouseEnter={() => audioWaterDrops.play()}
                      onMouseLeave={() => audioWaterDrops.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">water drops</h3>
            </div>
            <div id="earBrushing" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.84 118.25"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M130.36,78.82c0,5.18.64,9.7-.65,14.88a9.09,9.09,0,0,0-1.29,3.88l-1.3.64C120.66,108.57,109.66,114.39,98,117,79.91,120.21,63.74,115,50.16,103.4l-5.82-5.82C36.58,89.17,32.7,79.47,25.59,70.41c-5.82-6.46-12.29-11-20-15.52-6.47-3.23-5.82-11-3.88-17.46,1.94-4.53,4.53-9,8.41-12.29,12.28-9,26.51-12.93,40.74-13.58,15.52-1.29,30.4.65,45.92-2.58,4.52-1.3,7.11-3.88,10.34-7.12,5.18-4.53,9.71,1.94,12.29,6.47,12.29,22,9.7,46.56,11,70.49Z"
                      onMouseEnter={() => audioEarBruising.play()}
                      onMouseLeave={() => audioEarBruising.pause()}
                    />
                  </g>
                </g>
              </svg>

              <h3 className="title">ear bruising</h3>
            </div>
            <div id="personalAttention" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 132.41 128.08"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M34.36,117.76C15.27,105.08,2.29,86.57.42,57.08a46.32,46.32,0,0,1,0-6.56C2.85,20.73,19.53,15.47,44.39,5.09c23.84-9.94,52.08-4,68.57,14.68A79.51,79.51,0,0,1,131,56.58,49,49,0,0,1,124,93.68a113.56,113.56,0,0,1-12.81,16.19C91.67,130.28,58.29,133.66,34.36,117.76Z"
                      onMouseEnter={() => audioPersonalAttention.play()}
                      onMouseLeave={() => audioPersonalAttention.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">personal attention</h3>
            </div>
            <div id="scratching" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 132.41 128.08"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M34.36,117.76C15.27,105.08,2.29,86.57.42,57.08a46.32,46.32,0,0,1,0-6.56C2.85,20.73,19.53,15.47,44.39,5.09c23.84-9.94,52.08-4,68.57,14.68A79.51,79.51,0,0,1,131,56.58,49,49,0,0,1,124,93.68a113.56,113.56,0,0,1-12.81,16.19C91.67,130.28,58.29,133.66,34.36,117.76Z"
                      onMouseEnter={() => audioScratching.play()}
                      onMouseLeave={() => audioScratching.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">scratching</h3>
            </div>
            <div id="crinkling" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.78 153.95"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M127.59,79.43c3.44,14.52,3.46,21.76,1.75,29-1.76,6.92-5.3,13.75-10.46,20.58-10.3,13.34-27.31,28.84-46.73,23.6-19.54-5.88-37.6-11.07-51.73-20.85A48.11,48.11,0,0,1,3.9,109.2C.28,99.72-.3,87.79.87,81.77,2.4,73.45,5,71.64,9.6,67.23c4.51-4,11.17-10.57,18.88-18.79,16-16.9,33.05-37.85,43.75-41.88,11.62-4,19-11.33,27.17-.84,4.12,5.21,8.82,15.19,14.18,29.44C118.79,49,124.68,67.16,127.59,79.43Z"
                      onMouseEnter={() => audioCrinkling.play()}
                      onMouseLeave={() => audioCrinkling.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">crinkling</h3>
            </div>
            <div id="whispering" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 121.6 108.66"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M87.85,83.38c-9.77,6.74-14.23,11.44-17.79,16.27-3.52,4.53-6.13,9.19-11.2,8.64a4.39,4.39,0,0,1-2.15-.82C51.8,103.84,49,97.12,44.79,91,40.56,84.69,35,79,23.57,72.48,11.7,66.37,2.42,58.89.78,54.39c-2.11-5,3.41-7,10.33-12.85,7.68-5.59,18.82-18,39.66-31.15C68.55-1.08,87.8-2.17,96.84,4.21c4.65,2.85,8.82,5.89,13.16,8.85,7.75,4.9,14.55,16.23,9.58,31C115.7,58.32,100,76,87.85,83.38Z"
                      // onMouseEnter={()=> audioWhispering.play()}
                      // onMouseLeave={()=> audioWhispering.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">whispering</h3>
            </div>
            <div id="pouring" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144.11 153.12"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M88.77,4.57c10.35-5.73,16-5.88,18.26.89,1.46,4.3,4.77,6.82,8.91,6.51,6.38-.57,10,4.38,9.8,13.54-.12,5,1.43,9.27,4.55,11.58,16.93,12.11,21,36.73-5.85,53.51A24.63,24.63,0,0,0,117.21,98c-11.93,18.77-30.39,31.41-44.45,35.46a23.18,23.18,0,0,0-10.11,6.83c-6.34,6.78-11.64,9.37-14.5,7.12-1.8-1.38-5-.75-8.45,2-5,3.92-7.9,4.54-8.46,1.7-.53-2.49-1.15-2.32-3.71-1-1.23.63-2.31-1.64-1.42-4.55,1.26-4,1.14-7.27.06-9.34-.9-1.72-.54-6.51.5-13.72.5-3.45,0-6.49-1.25-8.48-7.06-11.56-16-32.54-14.37-51A16.91,16.91,0,0,0,10,55C2.12,34.18-5.09,15.34,6,13.59a6.69,6.69,0,0,0,5.58-5.87C12.4.76,21,2,34.6,7.3A12.11,12.11,0,0,0,45,6.57C55.06,1.31,69.27-.63,78.42,4.9,81.25,6.64,85.07,6.56,88.77,4.57Z"
                      onMouseEnter={() => audioPouring.play()}
                      onMouseLeave={() => audioPouring.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">pouring</h3>
            </div>
            <div id="mouseOnTable" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 137.5 182.61"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M136.9,75.31c.91,4.19-.11,6.67-2,10.2S130,93.42,126.66,100a159.34,159.34,0,0,0-10.26,26.44c-3.34,10.56-6.11,22.71-10.8,30.13-10,13.75-21.36,27.57-41.44,25.58-10.18-1.8-24.24-10-38.08-28.94C12.23,135.35,2,105.57.8,90.39c-2-20.93,2-25.48,7.79-35,5.93-8.48,14.76-21.17,25-32.11C44.3,11.89,55.07,3.82,64.28,1.31c9.26-2.72,17,.12,22.77,5.49C99.59,18,107.51,26.09,116,40c4.26,6.73,9,14.22,13.07,20.5S136.17,71.77,136.9,75.31Z"
                      onMouseEnter={() => audioMouseOnTable.play()}
                      onMouseLeave={() => audioMouseOnTable.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">mouse on table</h3>
            </div>
            <div id="tapping" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 115.87 141.24"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M107.72,86.46c-10,6.89-32.82,40.7-60,50.17-2,.72-4,1.41-6,2-26.9,9.79-30.61-14-38.94-32.77-7.44-16.65,2.9-66.5,18.36-87.28C29.13,8.13,39.93.85,53.73.35,65.38-.13,77.57,6.65,87.35,17a145,145,0,0,1,13.91,17.09C117.85,59.78,120,79.27,107.72,86.46Z"
                      onMouseEnter={() => audioTapping.play()}
                      onMouseLeave={() => audioTapping.pause()}
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">tapping</h3>
            </div>
            <div id="stickyNotes" className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129.84 118.59"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M58,115.74c-7.59,3.72-12.54,3.29-15.69-1a10,10,0,0,0-8.75-4.15c-5.36.38-9.12-2.47-10.55-8a9.84,9.84,0,0,0-5.83-6.79C1.61,89.48-5.89,76.39,6.61,61.81A9.9,9.9,0,0,0,9,56c.84-13.83,6-26.18,16.07-32.41a9.72,9.72,0,0,0,4.5-6.93c.83-5.9,4.26-8.86,9.71-8.33A9.86,9.86,0,0,0,47.9,4.71c3-3.75,6.75-5,10.05-3.55,2.9,1.26,3.55,1,6.3-.58,1.32-.75,4.88.2,5.7,2.2a10.2,10.2,0,0,0,6.27,5.69c2.35.81,4.73,3.91,6.8,9a9.9,9.9,0,0,0,5.33,5.4c14.33,6,28.62,19,28.29,33.58a9.54,9.54,0,0,0,1.8,5.79c10,13.9,15.77,26.38,6.19,32.78a9.68,9.68,0,0,0-4.46,7.5c-.31,6.6-7.06,9.36-18.58,7.47a9.93,9.93,0,0,0-8.16,2.52c-7.09,6.31-18,7.51-26.83,3.16A9.71,9.71,0,0,0,58,115.74Z"
                      onMouseEnter={() => audioStickyNotes.play()}
                      onMouseLeave={() => audioStickyNotes.pause()}
                    />
                  </g>
                </g>
              </svg>

              <h3 className="title">sticky notes</h3>
            </div>
          </div>
          <Link to="generate-sound" className="generateSoundButton">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.19 37.33">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                  <path
                    className="cls-1"
                    d="M27.66,4.2S9.6,14,2.93,21.47,4.5,33.64,4.5,33.64a51.62,51.62,0,0,0,26.69,2.74L120.3,30.5l60.44-2.75s11-1.18.79-5.89c0,0-32.58-12.56-52.6-13.74S66.52.66,66.52.66,39.83-1.3,27.66,4.2Z"
                  />
                </g>
              </g>
            </svg>
            <h3 className="title"> Generate Art Sound</h3>
          </Link>
        </div>
        <div className="soundToggle">
          {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
        </div>
      </section>
    </>
  );
}

export default General;
