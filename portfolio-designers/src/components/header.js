import React from "react";
import igLogo from "../img/ig.png";
import "../header.css";

function Header() {
  return (
    <section className="section__container">
      <h1 className="section__container-text">
        Designer gráfico com mais de 10 anos de experiência<br></br> trabalhando
        com desenvolvimento de produtos físicos e digitais.
      </h1>
      <li>
        <a href="http://www.instagram.com/slviol" className="section__container-ig">
          <img src={igLogo} alt="Instagram Logo" className="section__container-ig_logo" />
        </a>
      </li>
    </section>
  );
}

export default Header;
