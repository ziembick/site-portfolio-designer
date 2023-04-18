import React from "react";
import logoFooter from "../img/smile.png";
import igLogo from "../img/ig.png";
import behance from "../img/behance.png";
import linkedin from "../img/linkedin.png";
import "../css/footer.css";

function Footer() {
  return (
    <>
      <img src={logoFooter} alt="Silvio Lima" className="nav__logo-footer" />
      <div className="footer-container">
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
      </div>
    </>
  );
}

export default Footer;
