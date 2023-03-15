import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import "./css/navbar.css";
import Contato from "./components/contato";
import { Route, Routes } from "react-router-dom";
import Porftolio from "./components/portfolio";
import PontoBank from "./components/ponto";
import Tucafe from "./components/tucafe";
import Sobre from "./components/sobre";
import Aqua from "./components/aqua";
import Provu from "./components/provu";
import Ydent from "./components/ydent";
import PageNotFound from "./components/pageNotFound";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Footer />
          </div>
        }
      />
      <Route path="/provu/*" element={<Provu />} />
      <Route path="/aqua/*" element={<Aqua />} />
      <Route path="/portfolio/*" element={<Porftolio />} />
      <Route path="/contato/*" element={<Contato />} />
      <Route path="/header" element={<Header />} />
      <Route path="/ponto-bank" element={<PontoBank />} />
      <Route path="/tuca-cafe" element={<Tucafe />} />
      <Route path="/ydent" element={<Ydent />}/>
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;

// function App() {
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <div>
//             <nav className="nav">
//               {/* <Link to="/" className="nav__brand">
//                 <img src={Logo} alt="Silvio Logo" className="nav__logo" />
//               </Link> */}
//               <ul className={active}>
//                 <li className="nav__item">
//                   <Link to="/portfolio" className="nav__link">
//                     Portfolio
//                   </Link>
//                 </li>
//                 <li className="nav__item">
//                   <a href="http://www.google.com" className="nav__link">
//                     Sobre
//                   </a>
//                 </li>
//                 <li className="nav__item">
//                   <Link to="/contato" className="nav__link">
//                     Contato
//                   </Link>
//                 </li>
//               </ul>
//               <div onClick={navToggle} className={icon}>
//                 <div className="line1"></div>
//                 <div className="line2"></div>
//                 <div className="line3"></div>
//               </div>
//             </nav>
//             <Header />
//             <Footer />
//           </div>
//         }
//       />
//       <Route path="/portfolio/*" element={<Porftolio />} />
//       <Route path="/contato/*" element={<Contato />} />
//       <Route path="/header" element={<Header />} />
//       <Route path="/ponto-bank" element={<PontoBank />} />
//       <Route path="/tuca-cafe" element={<Tucafe />} />
//     </Routes>
//   );
// }

// export default App;
