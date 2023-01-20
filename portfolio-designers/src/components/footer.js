import React from "react";
import Logo from  "../img/Logo.png"
import "../footer.css";

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Silvio Lima" className="nav__logo"/>
        </footer>
    )
}

export default Footer