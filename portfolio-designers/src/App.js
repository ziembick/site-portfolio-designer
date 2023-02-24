import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import Logo from "./img/Logo.png";
import "./css/navbar.css"
import { Link } from "react-router-dom";
import Contato from "./components/contato";
import { Route, Routes } from "react-router-dom";
import Porftolio from "./components/portfolio";
import PontoBank from "./components/ponto"

function App() {
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
      <Routes>
        <Route path="/" element={<div>
          <nav className="nav">
            <Link to="/" className="nav__brand">
              <img src={Logo} alt="Silvio Logo" className="nav__logo" />
            </Link>
            <ul className={active}>
              <li className="nav__item">
                <Link to="/portfolio" className="nav__link">
                  Portfolio
                </Link>
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
                <Link to="/contato" className="nav__link">
                  Contato
                </Link>
              </li>
            </ul>
            <div onClick={navToggle} className={icon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
          <Header />
          <Footer />
        </div>} />
        <Route path="/portfolio/*" element={<Porftolio />} />
        <Route path="/contato/*" element={<Contato />} />
        <Route path="/header" element={<Header />} />
        <Route path="/ponto-bank" element={<PontoBank />} />
      </Routes>
  );
}

export default App;
