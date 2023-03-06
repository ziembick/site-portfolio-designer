import React from "react";
import Navbar from "./navbar";
import "../css/sobre.css";

function Sobre() {
  return (
    <>
      <section className="section__container">
        <Navbar />
          <h1 className="title">Silvio Lima</h1>
          <h2 className="title__container">
            Designer gráfico 28 anos com mais de 10 anos de experiência,
            atualmente moro em São Paulo - Capital e trabalho com
            desenvolvimento de produtos físicos e digitais. Domínio em diversos
            programas como: Photoshop, After Effects, Figma, Illustrator,
            CorelDraw entre outros. Transito também na área de Ux design.
          </h2>
      </section>
    </>
  );
}

export default Sobre;
