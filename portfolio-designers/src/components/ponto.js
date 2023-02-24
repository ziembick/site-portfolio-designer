import React from "react";
import ponto1 from "../img/ponto-bank-1.gif";
import ponto2 from "../img/ponto-bank-2.png";
import ponto3 from "../img/ponto-bank-3.png";
import ponto4 from "../img/ponto-bank-4.png";
import ponto5 from "../img/ponto-bank-5.png";
import ponto6 from "../img/ponto-bank-6.png";
import ponto7 from "../img/ponto-bank-7.png";
import ponto8 from "../img/ponto-bank-8.png";
import ponto9 from "../img/ponto-bank-9.png";
import Navbar from "./navbar";
import "../css/ponto.css";

function PontoBank() {
  return (
    <>
      <Navbar />
      <img src={ponto1} alt="Ponto Bank" className="ponto-img-1" />
      <div>
        <h4 className="ponto-p">Sobre o projeto:</h4>
        <p className="ponto-p">
          Fui a fundo na criação do símbolo de ponto que da o nome a empresa,
          descobrindo que o mesmo foi criado no século III A.C e introduzida por
          Aristófanes de Bizâncio.
        </p>
        <p className="ponto-p">
          Após essa descoberta do criador, resolvi investigar mais sobre a vida
          do mesmo, Aristófanes foi um lexicógrafo, gramático, humanista,
          filólogo e crítico grego foi sucessor de Eratosthenes como diretor da
          Biblioteca de Alexandria quando tinha sessenta e dois anos.
        </p>
        <p className="ponto-p">
          Lendo mais sobre a Biblioteca de Alexandria descobri que ela foi
          fundada no século III A.C., na cidade de Alexandria, que fazia parte
          do império macedônico. Esteve em funcionamento por seiscentos anos e
          foi destruída definitivamente entre os anos de 250 a 270. Porém em
          2002 foi construída no Egito uma nova Biblioteca de Alexandria e após
          observar algumas referências coloquei a mão na massa.
        </p>
      </div>
      <img src={ponto3} alt="Ponto Bank 3" />
      <img src={ponto2} alt="Ponto Bank 2" className="ponto-bank-2" />
    </>
  );
}

export default PontoBank;
