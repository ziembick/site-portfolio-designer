import React, { useState, useRef } from "react";
import Logo from "../img/Logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import "../css/navbar.css";
import igLogo from "../img/ig.png";
import behance from "../img/behance.png";
import linkedin from "../img/linkedin.png";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const aboutLinkRef = useRef(null);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
      // document.body.classList.add("no-scroll");
    } else {
      setActive("nav__menu");
      // document.body.classList.remove("no-scroll");
    }

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
      document.body.classList.add("no-scroll");
    } else {
      setIcon("nav__toggler");
      document.body.classList.remove("no-scroll");
    }

    const handleAboutClick = () => {
      document.body.classList.remove("no-scroll");
    };
    aboutLinkRef.current.addEventListener("click", handleAboutClick);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-div">
            <nav className="nav">
              <Link to="/" className="nav__brand">
                <img src={Logo} alt="Silvio Logo" className="nav__logo2" />
              </Link>

              <ul className={active}>
                <li className="nav__item">
                  <Link
                    to="/portfolio"
                    className="nav__link"
                    ref={aboutLinkRef}
                    onClick={useRef}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    to="/sobre"
                    className="nav__link"
                    ref={aboutLinkRef}
                    onClick={useRef}
                  >
                    Sobre
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    to="/contato"
                    className="nav__link"
                    ref={aboutLinkRef}
                    onClick={useRef}
                  >
                    Contato
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    to="/"
                    className="nav__link"
                    id="home"
                    ref={aboutLinkRef}
                    onClick={useRef}
                  >
                    Home
                  </Link>
                </li>
              </ul>
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
                    src={linkedin}
                    alt="Dribble Logo"
                    className="section__container-ig_dribble_logo"
                  />
                </a>
              </li>
              <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </nav>
          </div>
        }
      />
    </Routes>
  );
}

export default Navbar;
