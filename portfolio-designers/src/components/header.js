import React, { useState } from "react";
import igLogo from "../img/ig.png";
import behance from "../img/behance.png";
import linkedin from "../img/linkedin.png"
import '@fontsource/roboto'
import tucafe1 from "../img/tucacafe1.png";
import tucafe2 from "../img/tuca-cafe-2.gif";
import ponto1 from "../img/ponto-bank-1.gif";
import ponto2 from "../img/ponto-bank-7.png";
import "../css/header.css"
import Navbar from "./navbar";

function Header() {
  const [hoveringTucafe, setHoveringTucafe] = useState(false);
  const [hoveringPonto, setHoveringPonto] = useState(false);

  return (
    <>
      <section className="section__container">
        <Navbar />
        <h1 className="section__container-text-silvio" >Designer gráfico,</h1>
        <h1 className="section__container-text-silvio" >criando <span className="exp">experiências</span> para marcas</h1>
        <h1 className="section__container-text" >
        Com mais de 10 anos de experiência, trabalhando com desenvolvimento<br></br>{" "}
        de produtos físicos e digitais. Transito também na área de Ux design.
        </h1>
        <li className="logos-container">
          <a
            href="http://www.instagram.com/slviol"
            className="section__container-ig"
          >
            <img
              src={igLogo}
              alt="Instagram Logo"
              className="section__container-ig_logo"
            />
          </a>
          <a
            href="https://www.behance.net/SilvioLima"
            className="section__container-behance"
          >
            <img
              src={behance}
              alt="Behance Logo"
              className="section__container-ig_behance_logo"
            />
          </a>
          <a
            href="https://dribbble.com/SilvioLima"
            className="section__container-dribble"
          >
            <img
              src={linkedin}fle
              alt="Dribble Logo"
              className="section__container-ig_dribble_logo"
            />
          </a>
        </li>
      </section>
      <section className="container">
        <div className="container-div">
          <img
            src={hoveringTucafe ? tucafe2 : tucafe1}
            alt="Tuca Cafe"
            className={`tuca-cafe ${hoveringTucafe ? "hover" : ""} `}
            onMouseOver={() => setHoveringTucafe(true)}
            onMouseOut={() => setHoveringTucafe(false)}
          />
          <div className="tuca-cafe-text">Tuca Café</div>
          <img
            src={hoveringPonto ? ponto2 : ponto1}
            alt="Ponto Bank"
            className={`ponto-bank ${hoveringPonto ? "hover" : ""}`}
            onMouseOver={() => setHoveringPonto(true)}
            onMouseOut={() => setHoveringPonto(false)}
          />
          <p className="ponto-bank-text">Ponto Bank</p>
        </div>
      </section>
    </>
  );
}

export default Header;
