import React, { useState } from "react";
import tucafe1 from "../img/tucacafe1.png";
import tucafe2 from "../img/tuca-cafe-2.gif";
import ponto1 from "../img/ponto-bank-1.gif";
import ponto2 from "../img/ponto-bank-2.png";
import "../css/portfolio.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Porftolio() {
  const [hoveringTucafe, setHoveringTucafe] = useState(false);
  const [hoveringPonto, setHoveringPonto] = useState(false);

  return (
    <>
      <Navbar />
      <section className="portfolio">
        <Link to="/tuca-cafe">
        <img
          src={hoveringTucafe ? tucafe2 : tucafe1}
          alt="Tuca Cafe"
          className={`tuca-cafe ${hoveringTucafe ? "hover" : ""} `}
          onMouseOver={() => setHoveringTucafe(true)}
          onMouseOut={() => setHoveringTucafe(false)}
        />
        <div className="tuca-cafe-text">Tuca Café</div>
        </Link>
        <Link to="/ponto-bank" className="link-class">
          <img
            src={hoveringPonto ? ponto2 : ponto1}
            alt="Ponto Bank"
            className={`ponto-bank ${hoveringPonto ? "hover" : ""}`}
            onMouseOver={() => setHoveringPonto(true)}
            onMouseOut={() => setHoveringPonto(false)}
          />
          <p className="ponto-bank-text">Ponto Bank</p>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Porftolio;
