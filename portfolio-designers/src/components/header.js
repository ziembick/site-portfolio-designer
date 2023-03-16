import React from "react";
import "@fontsource/roboto";
import "../css/header.css";
import Navbar from "./navbar";
import Typical from "react-typical";
import ImageSlider from "./ImageSlider";
import "../css/imageslider.css";

function Header() {

  const slides = [
    { url: "http://localhost:3000/tucacafe1.png", title: "" },
    { url: "http://localhost:3000/ponto-bank-1.png", title: "" },
    { url: "http://localhost:3000/provu.png", title: "" },
    { url: "http://localhost:3000/aqua-lounge.png", title: "" },
    { url: "http://localhost:3000/ydent.png", title: "" },
    { url: "http://localhost:3000/sunergy.png", title: "" },
  ];

  return (
    <>
      <section className="section__container">
        <Navbar />
        <div className="section__container-text-wrapper">
          <h1 className="section__container-text-silvio">
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
        <div className="containerStyle">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </>
  );
}

export default Header;

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
