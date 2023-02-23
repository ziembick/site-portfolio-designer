import React from "react";
import teste from "../img/teste.gif"
import behance from "../img/barney.jpg"
import "../../src/portfolio.css";
import Navbar from "./navbar";

function Porftolio () {
    return (
        <>
        <Navbar />
        <div>
            <img src={behance} alt="Teste"/>
        </div>
        </>
    )
}

export default Porftolio