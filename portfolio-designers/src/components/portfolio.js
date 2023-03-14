import React from "react";
import tucafe1 from "../img/tucacafe1.png";
import tucafe2 from "../img/tuca-cafe-2.gif";
import ponto1 from "../img/ponto-bank-1.gif";
import ponto2 from "../img/ponto-bank-2.png";
import aqua1 from "../img/aqua1.png";
import aqua2 from "../img/aqua2.png";
import provu1 from "../img/provu1.png";
import provu2 from "../img/provu2.gif";
import "../css/portfolio.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

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
        <Link className="arrow-portfolio">←</Link>
        <section className="portfolio">
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
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;

// function Porftolio() {
//   const [hoveringTucafe, setHoveringTucafe] = useState(false);
//   const [hoveringPonto, setHoveringPonto] = useState(false);
//   const [hoveringAqua, setHoveringAqua] = useState(false);
//   const [hoveringProvu, setHoveringProvu] = useState(false);

//   return (
//     <>
//       <section className="section__container">
//         <Navbar />
//         <Link to="/" className="arrow-portfolio">
//           ←
//         </Link>
//         <section className="portfolio">
//           <Link to="/tuca-cafe">
//             <img
//               src={hoveringTucafe ? tucafe2 : tucafe1}
//               alt="Tuca Cafe"
//               className={`tuca-cafe ${hoveringTucafe ? "hover" : ""} `}
//               onMouseOver={() => setHoveringTucafe(true)}
//               onMouseOut={() => setHoveringTucafe(false)}
//             />
//             {/* <div className="tuca-cafe-text">Tuca Café</div> */}
//           </Link>
//           <Link to="/ponto-bank">
//             <img
//               src={hoveringPonto ? ponto2 : ponto1}
//               alt="Ponto Bank"
//               className={`ponto-bank-port ${hoveringPonto ? "hover" : ""}`}
//               onMouseOver={() => setHoveringPonto(true)}
//               onMouseOut={() => setHoveringPonto(false)}
//             />
//             {/* <p className="ponto-bank-text-port">Ponto Bank</p> */}
//           </Link>
//           <Link to="/aqua">
//             <img
//               src={hoveringAqua ? aqua2 : aqua1}
//               alt="Acqua Lounge"
//               className={`aqua ${hoveringAqua ? "hover" : ""}`}
//               onMouseOver={() => setHoveringAqua(true)}
//               onMouseOut={() => setHoveringAqua(false)}
//             />
//             {/* <p className="aqua-text">Acqua Lounge</p> */}
//           </Link>
//           <Link to="/provu">
//             <img
//               src={hoveringProvu ? provu2 : provu1}
//               alt="Provu"
//               className={`provu ${hoveringProvu ? "hover" : ""}`}
//               onMouseOver={() => setHoveringProvu(true)}
//               onMouseOut={() => setHoveringProvu(false)}
//             />
//             {/* <p className="provu-text">Provu</p> */}
//           </Link>
//         </section>
//         <Footer />
//       </section>
//     </>
//   );
// }

// export default Porftolio;
