import React from "react";
import "../css/404page.css";
import Navbar from "./navbar";
import smile from "../img/smile2.svg";

function PageNotFound() {
  return (
    <>
      <section className="section__container">
        <Navbar />
        <div className="smile-container">
          <img src={smile} alt="Smile" className="smile-404" />
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
