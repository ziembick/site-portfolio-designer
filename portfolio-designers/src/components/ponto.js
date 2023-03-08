import React, { useState, useEffect } from "react";
import ponto1 from "../img/ponto-bank-1.gif"
import Navbar from "./navbar";
import Footer from "./footer";
import "../css/ponto.css";

function PontoBank() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        { name: "ponto-bank-3.png", alt: "Ponto Bank 3" },
        { name: "ponto-bank-2.png", alt: "Ponto Bank 2", className: "ponto-bank-2" },
        { name: "ponto-bank-4.png", alt: "Ponto Bank 4", className: "ponto-bank-2" },
        { name: "ponto-bank-5.png", alt: "Ponto Bank 5" },
        { name: "ponto-bank-6.png", alt: "Ponto Bank 6", className: "ponto-bank-2" },
        { name: "ponto-bank-7.png", alt: "Ponto Bank 7", className: "ponto-bank-2" },
        { name: "ponto-bank-8.png", alt: "Ponto Bank 8", className: "ponto-bank-2" },
        { name: "ponto-bank-9.png", alt: "Ponto Bank 9", className: "ponto-bank-2" }
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
        <img src={ponto1} alt="Ponto Bank 1" className="ponto-img-1"/>
        <p className="ponto-p">
          Fui a fundo na criação do símbolo de ponto que da o nome a empresa,
          descobrindo que o mesmo foi criado no século III A.C e introduzida por
          Aristófanes de Bizâncio.
        </p>
        <p className="ponto-p">
          Após essa descoberta do criador, resolvi investigar mais sobre a vida
          do mesmo, Aristófanes foi um lexicógrafo, gramático, humanista,
          filólogo e crítico grego foi sucessor de Eratosthenes como diretor da
          Biblioteca de Alexandria quando tinha sessenta e dois anos.
        </p>
        <p className="ponto-p">
          Lendo mais sobre a Biblioteca de Alexandria descobri que ela foi
          fundada no século III A.C., na cidade de Alexandria, que fazia parte
          do império macedônico. Esteve em funcionamento por seiscentos anos e
          foi destruída definitivamente entre os anos de 250 a 270. Porém em
          2002 foi construída no Egito uma nova Biblioteca de Alexandria e após
          observar algumas referências coloquei a mão na massa.
        </p>
      </div>
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className={image.className} />
      ))}
      </section>
      <Footer />
    </>
  );
}

export default PontoBank;