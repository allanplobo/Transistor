import React from "react";
import "./home-segundo.css";
import PrimeiroCard from "../../../assets/img/primeiro-card.png";
import SegundoCard from "../../../assets/img/segundo-card.png";
import TerceiroCard from "../../../assets/img/terceiro-card.png";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="RightArrow"
      onClick={onClick}
    >&gt;	</div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="LeftArrow"
      onClick={onClick}
    >&lt;</div>
  );
}

function SegundoConteudo() {
  
  const settings = {
    slidesToShow: 2,
    initialSlide: 0,
    speed: 800,
    variableWidth: true,
    adaptiveHeight: true,
    draggable: false,
    className: "slides",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings:{
          slidesToShow: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div id="teste" className="SegundaDivPrincipal">
      <Slider {...settings}>
        <div style={{width: "355px"}}>
          <div className="DivCardCentral">
            <div className="Cards">
              <img
                src={PrimeiroCard}
                className="CardImage"
                alt="Segundo card"
              ></img>
            </div>
            <p className="CardTxt">
            A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.
            </p>
          </div>
        </div>
        <div>
          <div className="DivCardCentral">
            <div className="Cards">
              <img
                src={SegundoCard}
                className="CardImage"
                alt="Segundo card"
              ></img>
            </div>
            <p className="CardTxt">
              Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
              poderosa espada falante. O grupo Possessores quer tanto ela quanto
              o Transistor e está perseguindo implacavelmente a sua procura.
            </p>
          </div>
        </div>
        <div>
          <div className="DivCardCentral">
            <div className="Cards">
              <img
                src={TerceiroCard}
                className="CardImage"
                alt="Segundo card"
              ></img>
            </div>
            <p className="CardTxt">
            Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SegundoConteudo;
