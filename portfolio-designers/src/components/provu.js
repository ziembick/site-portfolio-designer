import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import provu1 from "../img/provu1.png";
import "../css/ponto.css";
import Footer from "./footer";

function Provu() {
  const [images, setImages] = useState([]);

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
        <div>
          <img src={provu1} alt="Provu" className="ponto-img-1" />
          <h2 className="ponto-p">Sobre a Provu</h2>
          <p className="ponto-p">
            Provu é uma fintech que vive o Brasil e o sonho dos brasileiros. Tem
            vocação humana, enxerga as necessidades e entende os desejos de cada
            pessoa. Surgimos com o propósito de revolucionar o acesso ao crédito
            e amparar os brasileiros com soluções financeiras para gerar poder
            de compra, realizar sonhos e sair da dívida cara. Com Provu
            Parcelado, é possível fazer compras em até 24x em diversas lojas e
            serviços, sem necessidade de cartão de crédito. A solução não só
            beneficia o consumidor, como também o varejista, que recebe o
            pagamento à vista e sem taxas.
          </p>
          <h2 className="ponto-p">Meu trabalho</h2>
          <p className="ponto-p">
            Trabalhei no desenvolvendo toda parte visual do Employer branding da
            empresa como: Peças para redes sociais e programas internos de
            engajamento, diversidade, onboarding, voluntariado e carreiras.
            Também realizei peças para mídias on e off como toda arte para o
            novo escritório da empresa. Realizei também trabalhos de motion e
            edição e gravação de vídeos internos e externos.
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

export default Provu;
