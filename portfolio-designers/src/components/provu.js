import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import provu1 from "../img/provu1.png";
import "../css/ponto.css";
import Footer from "./footer";
import "../css/aqua.css";

function Provu() {
  const [images, setImages] = useState([]);
  const [showNewText, setShowNewText] = useState(false);

  function handleClick() {
    setShowNewText((prevShowNewText) => !prevShowNewText);
  }

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        { name: "provu2.gif", alt: "Provu" },
        { name: "provu3.png", alt: "Provu" },
        { name: "provu4.gif", alt: "Provu" },
        { name: "provu5.png", alt: "Provu" },
        { name: "provu6.gif", alt: "Provu" },
      ];
      for (const file of files) {
        const module = await import(`../img/${file.name}`);
        images.push({ ...files, src: module.default });
      }
      setImages(images);
    }
    loadImages();
  }, []);

  return (
    <>
      <section className="section__container">
        <Navbar />
        <img src={provu1} alt="Acqua Lounge" className="aqua-img-1" />
        <div className="aqua__container">
          {showNewText ? (
            <>
              <h2 className="aqua-h2">About Provu</h2>
              <p className="aqua-p">
                Provu is a fintech that lives Brazil and the dream of
                Brazilians. It has a human vocation, sees the needs and
                understands the desires of each person. We emerged with the
                purpose of revolutionizing access to credit and supporting
                Brazilians with financial solutions to generate purchasing
                power, make dreams come true and get out of expensive debt. With
                Provu Parcelado, it is possible to make purchases up to 24
                installments in several stores and services, without the need
                for a credit card. The solution not only benefits the consumer,
                but also the retailer, who receives payment in cash and without
                fees.
              </p>
              <h2 className="aqua-h2">My Work</h2>
              <p className="aqua-p">
                I worked on developing every visual part of the company's
                Employer branding as:Pieces for social networks and internal
                engagement, diversity, onboarding, volunteering and careers
                programs. I also made pieces for on and off media as well as all
                art for the company's new office. I also did motion work and
                editing and recording of internal and external videos.
              </p>
              <button onClick={handleClick} className="lang-btn">
                🇧🇷
              </button>
            </>
          ) : (
            <>
              <h2 className="aqua-h2">Sobre a Provu</h2>
              <p className="aqua-p">
                Provu é uma fintech que vive o Brasil e o sonho dos brasileiros.
                Tem vocação humana, enxerga as necessidades e entende os desejos
                de cada pessoa. Surgimos com o propósito de revolucionar o
                acesso ao crédito e amparar os brasileiros com soluções
                financeiras para gerar poder de compra, realizar sonhos e sair
                da dívida cara. Com Provu Parcelado, é possível fazer compras em
                até 24x em diversas lojas e serviços, sem necessidade de cartão
                de crédito. A solução não só beneficia o consumidor, como também
                o varejista, que recebe o pagamento à vista e sem taxas.
              </p>
              <h2 className="aqua-h2">Meu trabalho</h2>
              <p className="aqua-p">
                Trabalhei no desenvolvendo toda parte visual do Employer
                branding da empresa como: Peças para redes sociais e programas
                internos de engajamento, diversidade, onboarding, voluntariado e
                carreiras. Também realizei peças para mídias on e off como toda
                arte para o novo escritório da empresa. Realizei também
                trabalhos de motion e edição e gravação de vídeos internos e
                externos.
              </p>
              <button onClick={handleClick} className="lang-btn">
                🇺🇸
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

export default Provu;
