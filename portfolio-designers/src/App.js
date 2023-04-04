import React from "react";
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
import Sunergy from "./components/sunergy";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
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
      <Route path="/ydent" element={<Ydent />} />
      <Route path="/sunergy" element={<Sunergy />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
