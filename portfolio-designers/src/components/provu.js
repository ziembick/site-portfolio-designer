import React, { useState, useEffect } from "react";
import aqua1 from "../img/aqua1.png";
import Navbar from "./navbar";
import "../css/aqua.css";
import Footer from "./footer";
import provu1 from "../img/provu1.png";

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
        { name: "provu2.gif", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "provu3.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "provu4.gif", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "provu5.png", alt: "Acqua Lounge", className: "fotos-aqua" },
        { name: "provu6.gif", alt: "Acqua Lounge", className: "fotos-aqua" },
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
        <img src={provu1} alt="Acqua Lounge" className="aqua-img-1" />
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
              <button onClick={handleClick} className="lang-btn">🇧🇷</button>
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
              <button onClick={handleClick} className="lang-btn">🇺🇸</button>
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



// import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
// import provu1 from "../img/provu1.png";
// import Footer from "./footer";
// import "../css/provu.css";

// function Provu() {
//   const [images, setImages] = useState([]);
//   const [showNewText, setShowNewText] = useState(false);

//   function handleClick() {
//     setShowNewText((prevShowNewText) => !prevShowNewText);
//   }

//   useEffect(() => {
//     async function loadImages() {
//       const images = [];
//       const files = [
//         { name: "provu2.gif", alt: "Provu", className: "fotos-provu" },
//         { name: "provu3.png", alt: "Provu", className: "fotos-provu" },
//         { name: "provu4.gif", alt: "Provu", className: "fotos-provu" },
//         { name: "provu5.png", alt: "Provu", className: "fotos-provu" },
//         { name: "provu6.gif", alt: "Provu", className: "fotos-provu" },
//       ];
//       for (const file of files) {
//         const module = await import(`../img/${file.name}`);
//         images.push({ ...files, src: module.default });
//       }
//       setImages(images);
//     }
//     loadImages();
//   }, []);

//   return (
//     <>
//       <section className="section__container">
//         <Navbar />
//         <img src={provu1} alt="Provu" className="provu-img-1" />
//         <div className="provu__container">
//           {showNewText ? (
//             <>
//               <h2 className="provu-h2">About Provu</h2>
//               <p className="provu-p">
//                 Provu is a fintech that lives Brazil and the dream of
//                 Brazilians. It has a human vocation, sees the needs and
//                 understands the desires of each person. We emerged with the
//                 purpose of revolutionizing access to credit and supporting
//                 Brazilians with financial solutions to generate purchasing
//                 power, make dreams come true and get out of expensive debt. With
//                 Provu Parcelado, it is possible to make purchases up to 24
//                 installments in several stores and services, without the need
//                 for a credit card. The solution not only benefits the consumer,
//                 but also the retailer, who receives payment in cash and without
//                 fees.
//               </p>
//               <h2 className="provu-h2">My Work</h2>
//               <p className="provu-p">
//                 I worked on developing every visual part of the company's
//                 Employer branding as:Pieces for social networks and internal
//                 engagement, diversity, onboarding, volunteering and careers
//                 programs. I also made pieces for on and off media as well as all
//                 art for the company's new office. I also did motion work and
//                 editing and recording of internal and external videos.
//               </p>
//               <button onClick={handleClick} className="lang-btn-provu">
//                 🇧🇷
//               </button>
//             </>
//           ) : (
//             <>
//               <h2 className="provu-h2">Sobre a Provu</h2>
//               <p className="provu-p">
//                 Provu é uma fintech que vive o Brasil e o sonho dos brasileiros.
//                 Tem vocação humana, enxerga as necessidades e entende os desejos
//                 de cada pessoa. Surgimos com o propósito de revolucionar o
//                 acesso ao crédito e amparar os brasileiros com soluções
//                 financeiras para gerar poder de compra, realizar sonhos e sair
//                 da dívida cara. Com Provu Parcelado, é possível fazer compras em
//                 até 24x em diversas lojas e serviços, sem necessidade de cartão
//                 de crédito. A solução não só beneficia o consumidor, como também
//                 o varejista, que recebe o pagamento à vista e sem taxas.
//               </p>
//               <h2 className="provu-h2">Meu trabalho</h2>
//               <p className="provu-p">
//                 Trabalhei no desenvolvendo toda parte visual do Employer
//                 branding da empresa como: Peças para redes sociais e programas
//                 internos de engajamento, diversidade, onboarding, voluntariado e
//                 carreiras. Também realizei peças para mídias on e off como toda
//                 arte para o novo escritório da empresa. Realizei também
//                 trabalhos de motion e edição e gravação de vídeos internos e
//                 externos.
//               </p>
//               <button onClick={handleClick} className="lang-btn-provu">
//                 🇺🇸
//               </button>
//             </>
//           )}
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image.src}
//               alt={image.alt}
//               className={image.className}
//             />
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default Provu;
