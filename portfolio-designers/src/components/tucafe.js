import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import "../css/aqua.css";
import Footer from "./footer";

function Tucafe() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        { name: "tucacafe1.png", alt: "Provu Img 1", className: "fotos-aqua" },
        { name: "tuca-cafe-2.gif", alt: "Provu Img 2", className: "fotos-aqua" },
        { name: "tuca-cafe-3.gif", alt: "Provu Img 3", className: "fotos-aqua" },
        { name: "tuca-cafe-4.gif", alt: "Provu Img 4", className: "fotos-aqua" },
        { name: "tuca-cafe-6.gif", alt: "Provu Img 5", className: "fotos-aqua" },
        { name: "tuca-cafe-7.gif", alt: "Provu Img 6", className: "fotos-aqua" },
        { name: "tuca-cafe-8.gif", alt: "Provu Img 7", className: "fotos-aqua" },
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

export default Tucafe;

// import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
// import "../css/ponto.css";
// import Footer from "./footer";

// function TucaCafe() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function loadImages() {
//       const images = [];
//       const files = [
//         { name: "tucacafe1.png", alt: "Tuca Cafe 1", className: "ponto-img-1" },
//         {
//           name: "tuca-cafe-2.gif",
//           alt: "Tuca Cafe 2",
//           className: "ponto-bank-2",
//         },
//         {
//           name: "tuca-cafe-3.gif",
//           alt: "Tuca Cafe 2",
//           className: "ponto-bank-2",
//         },
//         {
//           name: "tuca-cafe-4.gif",
//           alt: "Tuca Cafe 2",
//           className: "ponto-bank-2",
//         },
//         {
//           name: "tuca-cafe-6.gif",
//           alt: "Tuca Cafe 2",
//           className: "ponto-bank-2",
//         },
//         {
//           name: "tuca-cafe-7.gif",
//           alt: "Tuca Cafe 2",
//           className: "ponto-bank-2",
//         },
//         {
//           name: "tuca-cafe-8.gif",
//           alt: "Tuca Cafe 2",
//           className: "ponto-bank-2",
//         },
//       ];
//       for (const file of files) {
//         const module = await import(`../img/${file.name}`);
//         images.push({ ...file, src: module.default });
//       }
//       setImages(images);
//     }
//     loadImages();
//   }, []);

//   return (
//     <>
//       <section className="section__container">
//         <Navbar />
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             className={image.className}
//           />
//         ))}
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default TucaCafe;
