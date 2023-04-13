import React from "react";
import tucafe1 from "../img/tucacafe1.png";
import tucafe2 from "../img/tuca-cafe-2.gif";
import ponto1 from "../img/ponto-bank-1.gif";
import ponto2 from "../img/ponto-bank-2.png";
import aqua1 from "../img/aqua1.png";
import aqua2 from "../img/aqua2.png";
import provu1 from "../img/provu1.png";
import provu2 from "../img/provu3.png";
import ydent1 from "../img/ydent1.gif";
import ydent2 from "../img/ydent2.png";
import sunergy1 from "../img/sunergy.png";
import sunergy2 from "../img/sunergy2.png";
import "../css/portfolio.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Portfolio = () => {
  const ImageSwitcher = ({ defaultImage, alternateImage }) => {
    return (
      <div className="image-switcher">
        <img src={defaultImage} alt="Default" className="default-image" />
        <img src={alternateImage} alt="Alternate" className="alternate-image" />
      </div>
    );
  };

  return (
    <>
      <section className="section__container">
        <Navbar />
        <Link className="arrow-portfolio" to="/">
          ←
        </Link>
        <section className="portfolio">
          <Fade top distance="1%" duration={1100}>
            <Link to="/aqua">
              <ImageSwitcher defaultImage={aqua1} alternateImage={aqua2} />
            </Link>
            <Link to="/tuca-cafe">
              <ImageSwitcher defaultImage={tucafe1} alternateImage={tucafe2} />
            </Link>
            <Link to="/provu">
              <ImageSwitcher defaultImage={provu1} alternateImage={provu2} />
            </Link>
            <Link to="/ponto-bank">
              <ImageSwitcher defaultImage={ponto1} alternateImage={ponto2} />
            </Link>
            <Link to="/ydent">
              <ImageSwitcher defaultImage={ydent1} alternateImage={ydent2} />
            </Link>
            <Link to="/sunergy">
              <ImageSwitcher
                defaultImage={sunergy1}
                alternateImage={sunergy2}
              />
            </Link>
          </Fade>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;

