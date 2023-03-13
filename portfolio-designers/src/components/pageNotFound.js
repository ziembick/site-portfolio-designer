import React from "react";
import "../css/404page.css";
import Navbar from "./navbar";
import smile from "../img/sadsmile.svg";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <section className="section__container">
        <Navbar />
        <div className="smile-container">
          <img src={smile} alt="Smile" className="smile-404" />
          <div className="page-container">
            <h1 className="page">Não tem nada aqui!</h1>
            <Link to="/">Voltar</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
