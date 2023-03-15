import React, { useState, useEffect } from "react";
import ydent1 from "../img/ydent1.gif";
import Navbar from "./navbar";
import "../css/aqua.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Ydent() {
  const [images, setImages] = useState([]);
  const [showNewText, setShowNewText] = useState(false);

  function handleClick() {
    setShowNewText((prevShowNewText) => !prevShowNewText);
  }

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        { name: "aqua2.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "aqua3.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "aqua4.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "aqua5.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "aqua6.png", alt: "Acqua Lounge", className: "fotos-aqua" },
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
        <Link to="/" className="arrow-port">
          ←
        </Link>
        <img src={ydent1} alt="Acqua Lounge" className="aqua-img-1" />

        <div className="aqua__container">
          {showNewText ? (
            <>
              <h2 className="aqua-h2">About Acqua Lounge</h2>
              <p className="aqua-p">
                Acqua Lounge is a Brazilian company operating in the cosmetics
                market for 33 years and our main purpose is to delight people.
                It is in the retail market with a line of diffusers for
                environments and cosmetics. Sophisticated sophisticates are
                developed by the most respected professionals in the sensorial
                universe.
              </p>
              <h2 className="aqua-h2">My Work</h2>
              <p className="aqua-p">
                I worked in the development of packaging for products such as:
                Hospitality and hospitals, creating lines for wholesale sales
                Packaging for soaps, shampoo, conditioner and moisturizing
                lotion Delivery of unique services for each consumer, listening
                to concerns and answering questions. Assistance to the designer
                in the development of operations and problem solving, providing
                customer service.
              </p>
              <button onClick={handleClick} className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Português</span>
              </button>
            </>
          ) : (
            <>
              <h2 className="aqua-h2">Sobre a Acqua Lounge</h2>
              <p className="aqua-p">
                A Acqua Lounge é uma empresa brasileira operando no mercado de
                cosméticos há 33 anos e nosso propósito principal é encantar
                pessoas. Está no mercado de varejo com linha de difusores para
                ambientes e cosméticos. As fragrâncias sofisticadas são
                desenvolvidas pelos mais renomados profissionais do universo
                sensorial.
              </p>
              <h2 className="aqua-h2">Meu trabalho</h2>
              <p className="aqua-p">
                Atuava em desenvolvimento de embalagens de produtos como:
                Hotelaria e hospitais, criação de linhas para vendas em atacado
                Embalagens para sabonetes, shampoo, condicionador e loção
                hidratante Entrega de serviços unicos para cada consumidor,
                ouvindo preocupações e respondendo duvidas. Auxílio ao designer
                no desenvolvimento das operações e resoluções de problemas,
                prestando um serviço de atendimento ao cliente.
              </p>
              <button onClick={handleClick} className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">English</span>
              </button>
            </>
          )}

          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Ydent;
