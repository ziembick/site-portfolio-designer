import React, { useState, useEffect } from "react";
import aqua1 from "../img/aqua1.png";
import Navbar from "./navbar";
import "../css/ponto.css";
import Footer from "./footer";

function Aqua() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        { name: "aqua2.png", alt: "Acqua Lounge" },
        { name: "aqua3.png", alt: "Acqua Lounge" },
        { name: "aqua4.png", alt: "Acqua Lounge" },
        { name: "aqua5.png", alt: "Acqua Lounge" },
        { name: "aqua6.png", alt: "Acqua Lounge" },
      ];
      for (const file of files) {
        const module = await import(`../img/${file.name}`);
        images.push({ ...file, src: module.default });
      }
      setImages(images);
    }
    loadImages();
  }, []);

  return (
    <>
      <section className="section__container">
        <Navbar />
        <div>
          <img src={aqua1} alt="Acqua Lounge" className="ponto-img-1" />
          <h2 className="ponto-p">Sobre a Acqua Lounge</h2>
          <p className="ponto-p">
            A Acqua Lounge é uma empresa brasileira operando no mercado de
            cosméticos há 33 anos e nosso propósito principal é encantar
            pessoas. Está no mercado de varejo com linha de difusores para
            ambientes e cosméticos. As fragrâncias sofisticadas são
            desenvolvidas pelos mais renomados profissionais do universo
            sensorial.
          </p>
          <h2 className="ponto-p">Meu trabalho</h2>
          <p className="ponto-p">
            Atuava em desenvolvimento de embalagens de produtos como: Hotelaria
            e hospitais, criação de linhas para vendas em atacado Embalagens
            para sabonetes, shampoo, condicionador e loção hidratante Entrega de
            serviços unicos para cada consumidor, ouvindo preocupações e
            respondendo duvidas. Auxílio ao designer no desenvolvimento das
            operações e resoluções de problemas, prestando um serviço de
            atendimento ao cliente.
          </p>
        </div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Aqua;

// Sobre a Acqua Lounge
// A Acqua Lounge é uma empresa brasileira operando no mercado de cosméticos há 33 anos e nosso propósito principal é encantar pessoas. Está no mercado de varejo com linha de difusores para ambientes e cosméticos. As fragrâncias sofisticadas são desenvolvidas pelos mais renomados profissionais do universo sensorial.

// --

// About Acqua Lounge
// Acqua Lounge is a Brazilian company operating in the cosmetics market for 33 years and our main purpose is to delight people. It is in the retail market with a line of diffusers for environments and cosmetics. Sophisticated sophisticates are developed by the most respected professionals in the sensorial universe.
// Meu trabalho
// Atuava em desenvolvimento de embalagens de produtos como: Hotelaria e hospitais, criação de linhas para vendas em atacado Embalagens para sabonetes, shampoo, condicionador e loção hidratante Entrega de serviços unicos para cada consumidor, ouvindo preocupações e respondendo duvidas. Auxílio ao designer no desenvolvimento das operações e resoluções de problemas, prestando um serviço de atendimento ao cliente.

// --

// My Work
// I worked in the development of packaging for products such as: Hospitality and hospitals, creating lines for wholesale sales Packaging for soaps, shampoo, conditioner and moisturizing lotion Delivery of unique services for each consumer, listening to concerns and answering questions. Assistance to the designer in the development of operations and problem solving, providing customer service.
