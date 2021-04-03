import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section id="contactBg">
        <div className="contact-container">
          <h3 className="top-title">Talk to us</h3>
          <div className="svg-container">
            <h3 className="caps">your message</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.91 117.54">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Ebene_1" data-name="Ebene 1">
                  <path
                    class="cls-1"
                    d="M28.31,105.74C-1.38,88.73-7.92,62.89,11,35.49a52.91,52.91,0,0,1,4.52-6C38.63,3.6,53.67,6,72.68,1.43c17.09-4.22,31.94,4.23,53.8,15.3C137.11,22.63,149,28.87,160,37.36c9.18,7.12,13.58,16.88,8.47,29.25A73.18,73.18,0,0,1,156.11,86C144.9,99.25,123,111.15,98.23,115.31,73.68,119.74,46.37,116.43,28.31,105.74Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="send-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.84 118.25">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Ebene_1" data-name="Ebene 1">
                  <path
                    class="cls-3"
                    d="M.49,39.43c0-5.18-.65-9.7.64-14.88a9.11,9.11,0,0,0,1.3-3.88L3.72,20C10.19,9.68,21.18,3.86,32.82,1.27,50.93-2,67.1,3.21,80.68,14.85l5.82,5.82c7.76,8.41,11.64,18.11,18.75,27.16,5.83,6.47,12.29,11,20,15.53,6.47,3.23,5.82,11,3.88,17.46-1.94,4.52-4.52,9.05-8.4,12.29-12.29,9-26.52,12.93-40.75,13.58C64.51,108,49.64,106,34.11,109.27c-4.52,1.3-7.11,3.88-10.34,7.12-5.18,4.52-9.7-1.94-12.29-6.47-12.29-22-9.7-46.56-11-70.49Z"
                  />
                </g>
              </g>
            </svg>
            <h3 className="caps">send</h3>
          </div>
        </div>
        <div className="options">
          <Link to="/" className='caps'>
          EXIT</Link>
        </div>
      </section>
    </>
  );
}

export default Contact;
