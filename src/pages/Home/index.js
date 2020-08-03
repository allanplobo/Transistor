import React from "react";
import "./home.css";
import ImagemFundoPrincipal from "../../assets/img/fundo-principal.png";
import RetanguloMeio from '../../assets/fundoImagemCard.svg';
import CardPrincipal from '../../assets/img/card-principal.png'
import PrimeiraPenaE from '../../assets/img/primeira-pena-e.png'
import SegundaPenaE from '../../assets/img/segunda-pena-e.png'
import PrimeiraPenaD from '../../assets/img/primeira-pena-e.png'
import SegundaPenaD from '../../assets/img/segunda-pena-e.png'

function Home() {
  return (
    <div className="DivPrincipal">
      <img src={ImagemFundoPrincipal}  className="ImagemFundo" alt="imagem de fundo"></img>
      <img src={RetanguloMeio} className="RetanguloMeio" alt="Retangulo de fundo"></img>
      <p className="TxtSuperior">TRANSISTOR - RED THE SINGER</p>
      <img src={CardPrincipal} className="Card" alt="Card" ></img>
      <img src={PrimeiraPenaE} className="PrimeiraPenaEsquerda" alt="Card - Pena Esquerda" ></img>
      <img src={SegundaPenaE} className="SegundaPenaEsquerda" alt="Card - Segunda Pena Esquerda" ></img>
      <img src={PrimeiraPenaD} className="PrimeiraPenaDireita" alt="Card - Pena Direita" ></img>
      <img src={SegundaPenaD} className="SegundaPenaDireita" alt="Card - Segunda Pena Direita" ></img>
      <p className="TxtInferior">"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</p>
    </div>
  );
}

export default Home;
