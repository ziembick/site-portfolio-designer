import React from "react";
import { useState } from "react";
import "../navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav_menu");
  };

  return (
    <div>
      <nav className="nav">
        <a href="http://www.google.com" className="nav__brand">
          Silvio Lima
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="http://www.google.com" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a href="http://www.google.com" className="nav__link">
              Sobre
            </a>
          </li>
          <li className="nav__item">
            <a href="http://www.google.com" className="nav__link">
              Serviços
            </a>
          </li>
          <li className="nav__item">
            <a href="http://www.google.com" className="nav__link">
              Contato
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className="nav__toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
