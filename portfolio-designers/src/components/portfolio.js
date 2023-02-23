import React from "react";
import tucacafe1 from "../img/tucacafe1.png"
import tucafe2 from "../img/tuca-cafe-2.gif"
import "../../src/portfolio.css";
import Navbar from "./navbar";

function Porftolio () {
    return (
        <>
        <Navbar />
        <div>
            <img src={tucafe2}/>
        </div>
        </>
    )
}

export default Porftolio