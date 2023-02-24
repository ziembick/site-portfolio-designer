import React, { useState } from "react";
import tucafe1 from "../img/tucacafe1.png";
import tucafe2 from "../img/tuca-cafe-2.gif";
import ponto1 from "../img/ponto-bank-1.gif"
import ponto2 from "../img/ponto-bank-2.png"
import "../../src/portfolio.css";
import Navbar from "./navbar";
import Footer from "./footer"

function Porftolio() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <Navbar />
      <section className="container">
        <img
          src={hovering ? tucafe2 : tucafe1}
          alt="Tuca Cafe"
          className={`tuca-cafe ${hovering ? "hover" : ""}`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        />
        {hovering && <p className="tuca-cafe-text">Tuca Café</p>}
        
      </section>
      <Footer />
    </>
  );
}

export default Porftolio;
