import React from "react";
import "./home-segundo.css";
import PrimeiroCard from "../../../assets/img/primeiro-card.png";
import SegundoCard from "../../../assets/img/segundo-card.png";
import TerceiroCard from "../../../assets/img/terceiro-card.png";

function SegundoConteudo() {
  return (
    <div className="SegundaDivPrincipal" id="teste">
      <a className="LeftArrowCards">
        <p> &lt; </p>
      </a>

      <div className="DivCards">
        <div className="Cards">
          <img
            src={PrimeiroCard}
            className="CardImage"
            alt="Primeiro card"
          ></img>
          <p className="CardTxt">
            A Camerata foi apenas os dois no início, e suas fileiras nunca foram
            destinadas a exceder um número a ser contado em uma mão.
          </p>
        </div>
      </div>
      <div className="DivCardCentral">
        <div className="Cards">
          <img src={SegundoCard} className="CardImage" alt="Segundo card"></img>
          <p className="CardTxt">
            Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
            poderosa espada falante. O grupo Possessores quer tanto ela quanto o
            Transistor e está perseguindo implacavelmente a sua procura.
          </p>
        </div>
      </div>
      <div className="DivCards">
        <div className="Cards">
          <img
            src={TerceiroCard}
            className="CardImage"
            alt="Terceiro card"
          ></img>
          <p className="CardTxt">
            Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da
            Camerata.
          </p>
        </div>
      </div>

      <a className="RightArrowCards">
        <p> &gt; </p>
      </a>
    </div>
  );
}

export default SegundoConteudo;
