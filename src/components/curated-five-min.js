import React from "react";
import CuratedBar from './curatedBar'

export default function FiveMin() {
  return (
    <section id="fiveMinBg">
      <div className="container">
        <h1 className="header">I want to sleep</h1>
        <div className="content"></div>
      </div>
      <CuratedBar />
    </section>
  );
}
