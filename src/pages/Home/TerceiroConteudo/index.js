import React from "react";
import "./home-terceiro.css";


function TerceiroConteudo() {
  return (
    <div className="TerceiraDivPrincipal">
      <form className="Form">
        <h1 className="FormTxt">FORMULÁRIO</h1>
        <p className="FormSegundoTxt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="DivPrimeirosInputs">
          <input
            className="FormCampo"
            name="nome"
            placeholder="Nome"
            type="text"
            
          ></input>
          <input
            className="FormCampo"
            name="email"
            placeholder="Email"
            type="text"
          ></input>
        </div>
        <div className="DivSegundoInput">
          <input
            className="FormCampoMsg"
            name="mensagem"
            placeholder="Mensagem..."
            type="text"
          ></input>
        </div>
        <button className="FormEnviar">ENVIAR</button>
      </form>
    </div>
  );
}

export default TerceiroConteudo;
