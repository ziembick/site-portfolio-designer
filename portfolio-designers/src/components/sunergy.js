import React, { useState, useEffect } from "react";
import sunergy1 from "../img/sunergy.png";
import Navbar from "./navbar";
import "../css/aqua.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Sunergy() {
  const [images, setImages] = useState([]);
  const [showNewText, setShowNewText] = useState(false);

  function handleClick() {
    setShowNewText((prevShowNewText) => !prevShowNewText);
  }

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        { name: "sunergy2.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "sunergy3.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "sunergy4.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "sunergy5.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "sunergy6.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "sunergy7.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "sunergy8.png", alt: "Acqua Lounge", className: "fotos-aqua" },
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
        <img src={sunergy1} alt="Acqua Lounge" className="aqua-img-1" />

        <div className="aqua__container">
          {showNewText ? (
            <>
              <h2 className="aqua-h2">About Sunergy</h2>
              <p className="aqua-p">
                Sunergy was created in 2015 by a group of engineers looking for
                innovative and designed solutions to meet the energy needs of
                small cities. After years of working on developing clean energy
                technologies, they decided to create their own company to offer
                these solutions to the market. Over time, the company grew and
                became a benchmark in providing sustainable energy to cities
                across the country. Today, Sunergy has an experienced and highly
                qualified team, which constantly seeks new technologies and
                solutions to meet the demands of its customers.
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
              <h2 className="aqua-h2">Sobre a Sunergy</h2>
              <p className="aqua-p">
                Sunergy foi criada em 2015 por um grupo de engenheiros que
                buscavam soluções inovadoras e sustentáveis para suprir as
                necessidades energéticas das pequenas cidades. Depois de anos
                trabalhando no desenvolvimento de tecnologias de energia limpa,
                eles decidiram criar sua própria empresa para oferecer essas
                soluções ao mercado. Com o tempo, a empresa cresceu e se tornou
                referência no fornecimento de energia sustentável para cidades
                em todo o país. Hoje, Sunergy conta com uma equipe experiente e
                altamente qualificada, que busca constantemente novas
                tecnologias e soluções para atender às demandas de seus
                clientes.
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

export default Sunergy;
