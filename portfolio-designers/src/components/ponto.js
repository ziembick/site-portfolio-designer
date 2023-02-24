import React from "react";
import ponto1 from "../img/ponto-bank-1.gif";
import ponto2 from "../img/ponto-bank-2.png";
import Navbar from "./navbar";
import "../css/ponto.css"


function PontoBank () {
    return (
        <>
        <Navbar />
        <div>
            <img src={ponto1} alt="Ponto Bank" className="ponto-img-1"/>
        </div>
        </>
    )
}

export default PontoBank