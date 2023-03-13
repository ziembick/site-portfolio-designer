import React from "react";
import "../css/404page.css";
import Navbar from "./navbar";
import smile from "../img/smile2.svg";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <section className="section__container">
        <Navbar />
        <div className="smile-container">
          <img src={smile} alt="Smile" className="smile-404" />
          <div className="page-container">
            <h1 className="page">Página não encontrada!</h1>
            <Link to="/">Volte para a página principal</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
