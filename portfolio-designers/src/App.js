import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import Logo from "./img/Logo.png";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import Contato from "./components/contato";
import { Route, Routes } from "react-router-dom";
import Porftolio from "./components/portfolio";
import PontoBank from "./components/ponto";
import Tucafe from "./components/tucafe";

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
      <Route path="/portfolio/*" element={<Porftolio />} />
      <Route path="/contato/*" element={<Contato />} />
      <Route path="/header" element={<Header />} />
      <Route path="/ponto-bank" element={<PontoBank />} />
      <Route path="/tuca-cafe" element={<Tucafe />} />
    </Routes>
  );
}

export default App;
