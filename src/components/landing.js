import landingBg from "../images/bg2.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Landing() {
  return (
    <>
      {/* <img src={landingBg} alt=""/> */}
      <section id="landingBg">
        <div className="container">
          <div className="item">
            <Link to="/randomize" className="svg-container">
              <svg viewBox="0 0 115.87 141.24" id="random">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M8.15,54.79c10-6.9,32.81-40.71,60-50.18,2-.72,4-1.41,6-2,26.9-9.8,30.61,14,38.94,32.76,7.44,16.66-2.9,66.51-18.36,87.28-8,10.46-18.78,17.74-32.58,18.24-11.65.48-23.84-6.3-33.63-16.62a145.09,145.09,0,0,1-13.9-17.09C-2,81.46-4.1,62,8.15,54.79Z"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">random</h3>
            </Link>
          </div>
          <div className="item">
            <Link to="/generator" className="svg-container">
              <svg viewBox="0 0 110.57 105.08" id="generate">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M101.62,77.78c-10.94,15.13-26.91,25.42-52.34,26.9a42.75,42.75,0,0,1-5.66,0c-25.7-1.9-30.23-15.12-39.18-34.82A45.68,45.68,0,0,1,17.09,15.48,71.13,71.13,0,0,1,48.85,1.16a45.42,45.42,0,0,1,32,5.61,97.86,97.86,0,0,1,14,10.16A45.57,45.57,0,0,1,101.62,77.78Z"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">generate</h3>
            </Link>
          </div>

          <div className="item">
            <Link to="/curated" className="svg-container">
              <svg viewBox="0 0 129.84 118.59" id="curated">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M58,115.74c-7.59,3.72-12.54,3.29-15.69-1a10,10,0,0,0-8.75-4.15c-5.36.38-9.12-2.47-10.55-8a9.84,9.84,0,0,0-5.83-6.79C1.61,89.48-5.89,76.39,6.61,61.81A9.9,9.9,0,0,0,9,56c.84-13.83,6-26.18,16.07-32.41a9.72,9.72,0,0,0,4.5-6.93c.83-5.9,4.26-8.86,9.71-8.33A9.86,9.86,0,0,0,47.9,4.71c3-3.75,6.75-5,10.05-3.55,2.9,1.26,3.55,1,6.3-.58,1.32-.75,4.88.2,5.7,2.2a10.2,10.2,0,0,0,6.27,5.69c2.35.81,4.73,3.91,6.8,9a9.9,9.9,0,0,0,5.33,5.4c14.33,6,28.62,19,28.29,33.58a9.54,9.54,0,0,0,1.8,5.79c10,13.9,15.77,26.38,6.19,32.78a9.68,9.68,0,0,0-4.46,7.5c-.31,6.6-7.06,9.36-18.58,7.47a9.93,9.93,0,0,0-8.16,2.52c-7.09,6.31-18,7.51-26.83,3.16A9.71,9.71,0,0,0,58,115.74Z"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="title">curated</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
