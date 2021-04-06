import React from "react";
import { Link } from "react-router-dom";
import dataPdf from "../uploads/datenschutz-muster.pdf";
import impPdf from "../uploads/impressum-muster.pdf";
export default function Impressum() {
  return (
    <section id="coverBg">
      <div className="container impressum">
        <p className="header">
          This webspace was produced for reaching the degree of the Bachelor of
          Arts. Designed by Walesca Frank and developed by Valentina Antollini
          For further questions please send an email.
        </p>
        <div className="imp_links">
          <a href={dataPdf} target="_blank" className="caps">
            Data
          </a>
          <a href={impPdf} target="_blank" className="caps">
            Impressum
          </a>
        </div>
      </div>
    </section>
  );
}
