import React from "react";
import igLogo from "../img/ig.png";
import behance from "../img/behance.png"
import dribble from "../img/dribble.png"
import Navbar from "./navbar";
import "../header.css";
import Footer from "./footer";

function Header() {
  return (
    <>
    <Navbar />
    <section className="section__container">
      <h1 className="section__container-text-silvio">
        Silvio Lima
      </h1>
      <h1 className="section__container-text">
        Designer gráfico com mais de 10 anos de experiência<br></br> trabalhando
        com desenvolvimento de produtos físicos e digitais.
      </h1>
      <li>
        <a href="http://www.instagram.com/slviol" className="section__container-ig">
          <img src={igLogo} alt="Instagram Logo" className="section__container-ig_logo" />
        </a>
        <a href="https://www.behance.net/SilvioLima" className="section__container-behance">
        <img src={behance} alt="Behance Logo" className="section__container-ig_behance_logo" />
        </a>
        <a href="https://dribbble.com/SilvioLima" className="section__container-dribble">
        <img src={dribble} alt="Dribble Logo" className="section__container-ig_dribble_logo" />
        </a>
      </li>
    </section>
    <Footer />
    </>
  );
}

export default Header;
