import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import "../css/ponto.css";

function PontoBank() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        { name: "tucacafe1.png", alt: "Tuca Cafe 1", className: "ponto-img-1"},
        { name: "tuca-cafe-2.gif", alt: "Tuca Cafe 2", className: "ponto-bank-2" },
        { name: "tuca-cafe-3.gif", alt: "Tuca Cafe 2", className: "ponto-bank-2" },
        { name: "tuca-cafe-4.gif", alt: "Tuca Cafe 2", className: "ponto-bank-2" },
        { name: "tuca-cafe-6.gif", alt: "Tuca Cafe 2", className: "ponto-bank-2" },
        { name: "tuca-cafe-7.gif", alt: "Tuca Cafe 2", className: "ponto-bank-2" },
        { name: "tuca-cafe-8.gif", alt: "Tuca Cafe 2", className: "ponto-bank-2" }
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
      <Navbar />
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className={image.className} />
      ))}
    </>
  );
}

export default PontoBank;