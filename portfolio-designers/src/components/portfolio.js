import React, { useState } from "react";
import tucafe1 from "../img/tucacafe1.png";
import tucafe2 from "../img/tuca-cafe-2.gif";
import "../../src/portfolio.css";
import Navbar from "./navbar";

function Porftolio() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <Navbar />
      <section className="container">
        <img
          src={hovering ? tucafe1 : tucafe2}
          alt="Tuca Cafe"
          className={`tuca-cafe ${hovering ? "hover" : ""}`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        />
      </section>
    </>
  );
}

export default Porftolio;
