import React, { useState } from "react";
import igLogo from "../img/ig.png";
import behance from "../img/behance.png";
import dribble from "../img/dribble.png";
import tucafe1 from "../img/tucacafe1.png";
import tucafe2 from "../img/tuca-cafe-2.gif";
import ponto1 from "../img/ponto-bank-1.gif";
import ponto2 from "../img/ponto-bank-2.png";

import "../header.css";

function Header() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <section className="section__container">
        <h1 className="section__container-text-silvio">Silvio Lima</h1>
        <h1 className="section__container-text">
          Designer gráfico com mais de 10 anos de experiência<br></br>{" "}
          trabalhando com desenvolvimento de produtos físicos e digitais.
        </h1>
        <li>
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
              src={dribble}
              alt="Dribble Logo"
              className="section__container-ig_dribble_logo"
            />
          </a>
        </li>
      </section>
      <section className="container">
        <img
          src={hovering ? tucafe2 : tucafe1}
          alt="Tuca Cafe"
          className={`tuca-cafe ${hovering ? "hover" : ""}`}
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
        />
        <div className="tuca-cafe-text">Tuca Café</div>
        <img
          src={hovering ? ponto2 : ponto1}
          alt="Ponto Bank"
          className={`tuca-cafe ${hovering ? "hover" : ""}`}
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
        />
        <p className="tuca-cafe-text">Ponto Bank</p>
      </section>
      
    </>
  );
}

export default Header;
