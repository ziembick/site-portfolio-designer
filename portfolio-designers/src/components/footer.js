import React from "react";
import logoFooter from  "../img/logo-footer.png"
import "../css/footer.css"

function Footer() {
    return (
        <>
        <img src={logoFooter} alt="Silvio Lima" className="nav__logo-footer"/>
        <p>Silvio Lima</p>
        </>
    )
}

export default Footer