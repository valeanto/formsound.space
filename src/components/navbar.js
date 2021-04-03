import React, { useState } from "react";
import logo from "../images/logo_white.png";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };


  return (
    <div className="nav">
      <Link to="/">
        <div className="logo">
          <img src={logo} className="logo" />
        </div>
      </Link>
      <div
        className={`settings ${navbarOpen ? " showMenu" : ""}`}
        onClick={handleToggle}
      >
        <Login />
        {/* <Logout /> */}
        {/* <Link to="/">login</Link> */}
        <Link to="/members-place" className="login-button">
          <div className="icon-con">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.87 141.24">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Ebene_1" data-name="Ebene 1">
                  <path
                    class="cls-2"
                    d="M8.15,54.79c10-6.9,32.81-40.71,60-50.18,2-.72,4-1.41,6-2,26.9-9.8,30.61,14,38.94,32.76,7.44,16.66-2.9,66.51-18.36,87.28-8,10.46-18.78,17.74-32.58,18.24-11.65.48-23.84-6.3-33.63-16.62a145.09,145.09,0,0,1-13.9-17.09C-2,81.46-4.1,62,8.15,54.79Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <h3 className="buttonText ">Members place</h3>
        </Link>
        <Link to="/contact" className="login-button">
          <div className="icon-con">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.87 141.24">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Ebene_1" data-name="Ebene 1">
                  <path
                    class="cls-2"
                    d="M8.15,54.79c10-6.9,32.81-40.71,60-50.18,2-.72,4-1.41,6-2,26.9-9.8,30.61,14,38.94,32.76,7.44,16.66-2.9,66.51-18.36,87.28-8,10.46-18.78,17.74-32.58,18.24-11.65.48-23.84-6.3-33.63-16.62a145.09,145.09,0,0,1-13.9-17.09C-2,81.46-4.1,62,8.15,54.79Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <h3 className="buttonText"> Talk to us</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
