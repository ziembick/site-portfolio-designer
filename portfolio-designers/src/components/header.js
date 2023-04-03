import React, { useEffect, useState } from "react";
import "@fontsource/roboto";
import "../css/header.css";
import Navbar from "./navbar";
import Typical from "react-typical";
import tucafe from "../img/tuca-cafe-2.gif";
import ponto from "../img/ponto-bank-1.gif";
import aqua from "../img/aqua1.png";
import provu from "../img/provu1.png";
import ydent from "../img/ydent1.gif";
import sunergy from "../img/sunergy.png";
import { Fade } from "react-reveal";
// import ImageSlider from "./ImageSlider";
import "../css/imageslider.css";

function Header() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const images = [];
      const files = [
        {
          name: "tuca-cafe-2.gif",
          alt: "Tuca Café",
          className: "tucafe-img-header",
        },
        {
          name: "ponto-bank-1.gif",
          alt: "Ponto Bank",
          className: "ponto-img-header",
        },
        { name: "aqua1.png", alt: "Aqua Lounge", className: "aqua-img-header" },
        { name: "provu1.png", alt: "Provu", className: "provu-img-header" },
        { name: "ydent1.gif", alt: "Ydent", className: "ydent-img-header" },
        {
          name: "sunergy.png",
          alt: "Sunergy",
          className: "sunergy-img-header",
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

  // const slides = [
  //   { url: "http://localhost:3000/tucacafe1.png", title: "" },
  //   { url: "http://localhost:3000/ponto-bank-1.png", title: "" },
  //   { url: "http://localhost:3000/provu.png", title: "" },
  //   { url: "http://localhost:3000/aqua-lounge.png", title: "" },
  //   { url: "http://localhost:3000/ydent.png", title: "" },
  //   { url: "http://localhost:3000/sunergy.png", title: "" },
  // ];

  return (
    <>
      <section className="section__container">
        <Navbar />
        <div className="section__container-text-wrapper">
          <h1 className="section__container-text-silvio2">
            <Typical
              loop={Infinity}
              steps={[
                "Designer gráfico,",
                2000,
                "Ui Designer,",
                2000,
                "Ux Designer,",
                2000,
              ]}
            />
          </h1>
          <h1 className="section__container-text-silvio">
            criando <span className="exp">experiências</span> para marcas
          </h1>
          <h1 className="section__container-text">
            Com mais de 10 anos de experiência, trabalhando com desenvolvimento
            <br></br>
            de produtos físicos e digitais. Transito também na área de Ux
            design.
          </h1>
        </div>
      </section>
      <div className="background-container">
        <div className="images-header">
          <Fade top distance="1%" duration={1100}>
            <img src={tucafe} alt="Tuca Café" className="tucafe-img-header" />
            <img src={ponto} alt="Ponto Bank" className="ponto-img-header" />
            <img src={aqua} alt="Tuca Café" className="aqua-img-header" />
            <img src={provu} alt="Provu" className="provu-img-header" />
            <img src={ydent} alt="Ydent" className="ydent-img-header" />
            <img src={sunergy} alt="Sunergy" className="sunergy-img-header" />
          </Fade>
        </div>
        {/* <div className="containerStyle">
          <ImageSlider slides={slides} />
        </div> */}
      </div>
    </>
  );
}

export default Header;

{
  /* <Fade top distance="1%" duration={1100}>
  <img src={tucafe} alt="Tuca Café" className="tucafe-img-header" />
  <img src={ponto} alt="Ponto Bank" className="ponto-img-header" />
  <img src={aqua} alt="Tuca Café" className="aqua-img-header" />
  <img src={provu} alt="Provu" className="provu-img-header" />
  <img src={ydent} alt="Ydent" className="ydent-img-header" />
  <img src={sunergy} alt="Sunergy" className="synergy-img-header" />
</Fade>; */
}

/* <section className="container">
        <div className="container-div">
          <img
            src={hoveringTucafe ? tucafe2 : tucafe1}
            alt="Tuca Cafe"
            className={`tuca-cafe ${hoveringTucafe ? "hover" : ""} `}
            onMouseOver={() => setHoveringTucafe(true)}
            onMouseOut={() => setHoveringTucafe(false)}
          />
          <div className="tuca-cafe-text">Tuca Café</div>
          <img
            src={hoveringPonto ? ponto2 : ponto1}
            alt="Ponto Bank"
            className={`ponto-bank ${hoveringPonto ? "hover" : ""}`}
            onMouseOver={() => setHoveringPonto(true)}
            onMouseOut={() => setHoveringPonto(false)}
          />
          <p className="ponto-bank-text">Ponto Bank</p>
        </div>
      </section> */
