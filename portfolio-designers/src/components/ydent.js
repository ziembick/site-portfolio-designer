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
        { name: "ydent2.png", alt: "Ydent", className: "fotos-aqua" },
        { name: "ydent3.png", alt: "Ydent", className: "fotos-aqua" },
        { name: "ydent4.png", alt: "Ydent", className: "fotos-aqua" },
        { name: "ydent5.png", alt: "Ydent", className: "fotos-aqua" },
        { name: "ydent6.png", alt: "Ydent", className: "fotos-aqua" },
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
        <img src={ydent1} alt="Ydent" className="aqua-img-1" />

        <div className="aqua__container">
          {showNewText ? (
            <>
              <h2 className="aqua-h2">About Ydent</h2>
              <p className="aqua-p">
                Ydent dentistry was founded in 2021 by Dr. Ana Silva, with the
                objective of offering quality dental treatments, with excellence
                and professional ethics.
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
              <h2 className="aqua-h2">Sobre a Ydent</h2>
              <p className="aqua-p">
                A Ydent odontologia foi fundada em 2021 pela Dra. Ana Silva, com
                o objetivo de oferecer tratamentos odontológicos de qualidade,
                com excelência e ética profissional.
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
