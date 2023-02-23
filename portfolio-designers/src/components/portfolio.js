import React from "react";
import teste from "../img/teste.gif"
import "../../src/portfolio.css";
import Navbar from "./navbar";

function Porftolio () {
    return (
        <>
        <Navbar />
        <div>
            <img src={teste} alt="Teste" className="teste"/>
        </div>
        </>
    )
}

export default Porftolio