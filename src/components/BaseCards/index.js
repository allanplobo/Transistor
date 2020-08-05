import React from 'react';
import './base-cards.css';

function BaseCards(){
    return(
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
              Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
              poderosa espada falante. O grupo Possessores quer tanto ela quanto
              o Transistor e está perseguindo implacavelmente a sua procura.
            </p>
          </div>
        </div>
    )
}

export default BaseCards;