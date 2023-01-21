import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Contato from "./components/contato";
import { BrowserRouter, Route } from "react-router-dom";

function App () {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default App;