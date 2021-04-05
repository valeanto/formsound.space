import React from "react";
import { Link } from "react-router-dom";

function Cover() {
  return (
    <section id="coverBg">
      <div className="container">
        <h1>Form Your Sound</h1>

        <Link to="/home">
          <h2 class='coverHeader'>Click to enter</h2>
        </Link>
      </div>
    </section>
  );
}
export default Cover;
