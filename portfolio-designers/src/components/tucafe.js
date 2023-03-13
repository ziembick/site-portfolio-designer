import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import "../css/aqua.css";
import Footer from "./footer";
import tucafe1 from "../img/tucacafe1.png";
import { Link } from "react-router-dom";

function Tucafe() {
  const [images, setImages] = useState([]);
  const [showNewText, setShowNewText] = useState(false);

  function handleClick() {
    setShowNewText((prevShowNewText) => !prevShowNewText);
  }

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        {
          name: "tuca-cafe-2.gif",
          alt: "Ponto Bank Img 2",
          className: "fotos-aqua",
        },
        {
          name: "tuca-cafe-3.gif",
          alt: "Ponto Bank Img 3",
          className: "fotos-aqua",
        },
        {
          name: "tuca-cafe-4.gif",
          alt: "Ponto Bank Img 4",
          className: "fotos-aqua",
        },
        {
          name: "tuca-cafe-6.gif",
          alt: "Ponto Bank Img 5",
          className: "fotos-aqua",
        },
        {
          name: "tuca-cafe-7.gif",
          alt: "Ponto Bank Img 6",
          className: "fotos-aqua",
        },
        {
          name: "tuca-cafe-8.gif",
          alt: "Ponto Bank Img 7",
          className: "fotos-aqua",
        },
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
        <img src={tucafe1} alt="Acqua Lounge" className="aqua-img-1" />
        <div className="aqua__container">
          {/* {showNewText ? (
            <>
              <h2 className="aqua-h2">About the project</h2>
              <p className="aqua-p">
                I went deep into the creation of the dot symbol that gives the
                company its name, discovering that it was created in the 3rd
                century BC and introduced by Aristophanes of Byzantium.
                <br />
                <br />
                After this discovery of the creator, I decided to investigate
                more about his life, Aristophanes was a lexicographer,
                grammarian, humanist, philologist and Greek critic and succeeded
                Eratosthenes as director of the Library of Alexandria when he
                was sixty-two years old.
                <br />
                <br />
                Reading more about the Library of Alexandria I discovered that
                it was founded in the 3rd century BC, in the city of Alexandria,
                which was part of the Macedonian empire. It was in operation for
                six hundred years and was definitively destroyed between the
                years 250 to 270. However, in 2002 a new Library of Alexandria
                was built in Egypt, and after observing some references i got my
                hands-on the project
              </p>
              <button onClick={handleClick} className="lang-btn-ponto">
                🇧🇷
              </button>
            </>
          ) : (
            <>
              <h2 className="aqua-h2">Sobre o projeto</h2>
              <p className="aqua-p">
                Fui a fundo na criação do símbolo de ponto que da o nome a
                empresa, descobrindo que o mesmo foi criado no século III A.C e
                introduzida por Aristófanes de Bizâncio.
                <br />
                <br />
                Após essa descoberta do criador, resolvi investigar mais sobre a
                vida do mesmo, Aristófanes foi um lexicógrafo, gramático,
                humanista, filólogo e crítico grego foi sucessor de Eratosthenes
                como diretor da Biblioteca de Alexandria quando tinha sessenta e
                dois anos.
                <br />
                <br />
                Lendo mais sobre a Biblioteca de Alexandria descobri que ela foi
                fundada no século III A.C., na cidade de Alexandria, que fazia
                parte do império macedônico. Esteve em funcionamento por
                seiscentos anos e foi destruída definitivamente entre os anos de
                250 a 270. Porém em 2002 foi construída no Egito uma nova
                Biblioteca de Alexandria e após observar algumas referências
                coloquei a mão na massa.
              </p>
              <button onClick={handleClick} className="lang-btn-ponto">
                🇺🇸
              </button>
            </>
          )} */}

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

export default Tucafe;

// import React, { useState, useEffect } from "react";
// import ponto1 from "../img/ponto-bank-1.gif"
// import Navbar from "./navbar";
// import Footer from "./footer";
// import "../css/ponto.css";

// function PontoBank() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function loadImages() {
//       const images = [];
//       const files = [
//         { name: "ponto-bank-3.png", alt: "Ponto Bank 3" },
//         { name: "ponto-bank-2.png", alt: "Ponto Bank 2", className: "ponto-bank-2" },
//         { name: "ponto-bank-4.png", alt: "Ponto Bank 4", className: "ponto-bank-2" },
//         { name: "ponto-bank-5.png", alt: "Ponto Bank 5" },
//         { name: "ponto-bank-6.png", alt: "Ponto Bank 6", className: "ponto-bank-2" },
//         { name: "ponto-bank-7.png", alt: "Ponto Bank 7", className: "ponto-bank-2" },
//         { name: "ponto-bank-8.png", alt: "Ponto Bank 8", className: "ponto-bank-2" },
//         { name: "ponto-bank-9.png", alt: "Ponto Bank 9", className: "ponto-bank-2" }
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
//     <section className="section__container">
//       <Navbar />
//       <div>
//         <img src={ponto1} alt="Ponto Bank 1" className="ponto-img-1"/>
//         <p className="ponto-p">
//           Fui a fundo na criação do símbolo de ponto que da o nome a empresa,
//           descobrindo que o mesmo foi criado no século III A.C e introduzida por
//           Aristófanes de Bizâncio.
//         </p>
//         <p className="ponto-p">
//           Após essa descoberta do criador, resolvi investigar mais sobre a vida
//           do mesmo, Aristófanes foi um lexicógrafo, gramático, humanista,
//           filólogo e crítico grego foi sucessor de Eratosthenes como diretor da
//           Biblioteca de Alexandria quando tinha sessenta e dois anos.
//         </p>
//         <p className="ponto-p">
//           Lendo mais sobre a Biblioteca de Alexandria descobri que ela foi
//           fundada no século III A.C., na cidade de Alexandria, que fazia parte
//           do império macedônico. Esteve em funcionamento por seiscentos anos e
//           foi destruída definitivamente entre os anos de 250 a 270. Porém em
//           2002 foi construída no Egito uma nova Biblioteca de Alexandria e após
//           observar algumas referências coloquei a mão na massa.
//         </p>
//       </div>
//       {images.map((image, index) => (
//         <img key={index} src={image.src} alt={image.alt} className={image.className} />
//       ))}
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default PontoBank;


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
