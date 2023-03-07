import React from "react";
import Navbar from "./navbar";
import "../css/sobre.css";
import Perfil from "../img/perfil.svg";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <>
      <section className="section__container">
        <Navbar />
        <div className="title__container">
          <Link to="/" className="arrow">←</Link>
          <h1 className="title">Silvio Lima</h1>
          <h2 className="title__description">
            Designer gráfico 28 anos com mais de 10 anos de experiência,
            <br />
            atualmente moro em São Paulo - Capital e trabalho com
            <br />
            desenvolvimento de produtos físicos e digitais. Domínio em <br />
            diversos programas como: Photoshop, After Effects, Figma,
            <br /> Illustrator, CorelDraw entre outros. Transito também na área
            de Ux design.
          </h2>
        </div>
          <img src={Perfil} alt="Foto de Perfil" className="foto-perfil" />
      </section>
    </>
  );
}

export default Sobre;
