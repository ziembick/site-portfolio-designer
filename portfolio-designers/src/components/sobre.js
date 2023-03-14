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
          <Link to="/" className="arrow">
            ←
          </Link>
          <h1 className="title">Silvio Lima</h1>
          <h2 className="title__description">
            Entendo que uma marca é muito mais do que apenas uma imagem, ela é a
            representação visual
            <br /> da identidade de uma empresa, sua personalidade e seus
            valores. Como um profissional experiente <br /> em criação de
            marcas, entendo que o processo de criação não é apenas sobre design,
            mas também <br /> sobre entender a natureza da empresa. <br />
            <br />
            Por isso, trabalho em estreita colaboração com meus clientes, <br />
            a fim de mergulhar no universo da empresa e entender sua essência e
            o que a torna especial. <br />
            Ao compreender a sua missão, valores e visão, busco referências
            inspiradoras e exploro diversas <br />
            opções de formas, cores e símbolos, a fim de criar uma marca única e
            memorável. <br /> <br /> Minha experiência em criação de marcas me
            permite testar diferentes opções até encontrar a combinação <br />
            perfeita que represente a empresa de forma autêntica e coerente com
            sua identidade. Assim, garanto que <br />
            cada marca que crio tenha um impacto positivo e duradouro no
            público, ajudando a empresa a se destacar <br /> em um mercado
            competitivo.
          </h2>
        </div>
        {/* <img src={Perfil} alt="Foto de Perfil" className="foto-perfil" /> */}
      </section>
    </>
  );
}

export default Sobre;
