import React from "react";
import "./home-segundo.css";
import PrimeiroCard from '../../../assets/img/primeiro-card.png';
import SegundoCard from '../../../assets/img/segundo-card.png';
import TerceiroCard from '../../../assets/img/terceiro-card.png';

function SegundoConteudo() {
  return (
    <div className="SegundaDivPrincipal">
      <div className="DivCards">
          <div className="Cards">
              <img src={PrimeiroCard} className="CardImage" alt="Primeiro card"></img>
          </div>
      </div>
      <div className="DivCardCentral">
      <div className="Cards">
              <img src={SegundoCard} className="CardImage" alt="Segundo card"></img>
          </div>
      </div>
      <div className="DivCards">
      <div className="Cards">
              <img src={TerceiroCard} className="CardImage" alt="Terceiro card"></img>
          </div>
      </div>
    </div>
  );
}

export default SegundoConteudo;
