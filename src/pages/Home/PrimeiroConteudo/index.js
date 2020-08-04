import React from "react";
import "./home-primeiro.css";
import ImagemFundoPrincipal from "../../../assets/img/fundo-principal.png";
import CardPrincipal from '../../../assets/img/card-principal.png'
import PrimeiraPenaE from '../../../assets/img/primeira-pena-e.png'
import SegundaPenaE from '../../../assets/img/segunda-pena-e.png'
import PrimeiraPenaD from '../../../assets/img/primeira-pena-d.png'
import SegundaPenaD from '../../../assets/img/segunda-pena-d.png'

function Home() {
  return (
    <div className="DivPrincipal">
        <div className="RetanguloDegrade">
        <img src={CardPrincipal} className="Card" alt="Card" ></img>
      <img src={PrimeiraPenaE} className="PrimeiraPenaEsquerda" alt="Card - Pena Esquerda" ></img>
      <img src={SegundaPenaE} className="SegundaPenaEsquerda" alt="Card - Segunda Pena Esquerda" ></img>
      <img src={PrimeiraPenaD} className="PrimeiraPenaDireita" alt="Card - Pena Direita" ></img>
      <img src={SegundaPenaD} className="SegundaPenaDireita" alt="Card - Segunda Pena Direita" ></img>
        </div>
      <img src={ImagemFundoPrincipal}  className="ImagemFundo" alt="imagem de fundo"></img>
      
      <p className="TxtSuperior">TRANSISTOR - RED THE SINGER</p>

      <p className="TxtInferior">"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</p>
      <a href="#teste">
          <button className="Mouse">
            <div className="MouseScroll"></div>
          </button>
          <p className="MouseTracinho">\/</p>
      </a>
    </div>
  );
}

export default Home;
