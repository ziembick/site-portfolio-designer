import React from "react";
import "../navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <a href="http://www.google.com" className="nav__brand">
          herdoy
        </a>
        <ul className="nav__menu">
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
        <div className="nav__toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
