import React, { useState } from "react";
import Logo from "../img/Logo.png"
import { Link } from "react-router-dom";
import "../navbar.css";
import Contato from "./contato";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="http://www.google.com" className="nav__brand">
      <img src={Logo} alt="Silvio Logo" className="nav__logo"/>
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
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar;
