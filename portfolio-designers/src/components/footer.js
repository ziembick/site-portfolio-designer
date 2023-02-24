import React from "react";
import Logo from  "../img/Logo.png"
import "../footer.css";

function Footer() {
    return (
        <>
        <img src={Logo} alt="Silvio Lima" className="nav__logo"/>
        <p>Silvio Lima</p>
        </>
    )
}

export default Footer