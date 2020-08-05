import React from "react";
import "./home-terceiro.css";
import Swal from "sweetalert";

class TerceiroConteudo extends React.Component {
  state = {
    disabled: true,
    nome: false,
    email: false,
    mensagem: false,
  };

  validaForm() {
    if (
      this.state.mensagem === true &&
      this.state.email === true &&
      this.state.nome === true
    ) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  nomeChange = (e) => {
    if (e.target.value.length >= 3) {
      this.setState({
        nome: true,
      });
    }
    else{
      this.setState({
        nome: false
      })
    }
    this.validaForm();
  };

  MensagemChange = (e) => {
    if (e.target.value.length >= 4) {
      this.setState({
        mensagem: true
      });
    }
    else{
      this.setState({
        mensagem: false
      })
    }
    this.validaForm();

  };

  ValidarEmail(email) {
    var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }

  emailChange = (e) => {
    let email = this.ValidarEmail(e.target.value);

    if (email === true) {
      this.setState({
        email: true,
      });
    } else {
      this.setState({
        email: false,
      });
    }
    this.validaForm();
  };

  enviarForm(e) {
    Swal("Enviado com sucesso!", "Agora é aguardar que já retornamos!. Ah, também verifique sua caixa de SPAM, pode ser que chegue por lá. =)", "success");
  }

  submitForm(e) {
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="TerceiraDivPrincipal">
        <form id="Formulario" className="Form" onSubmit={this.submitForm}>
          <h1 className="FormTxt">FORMULÁRIO</h1>
          <p className="FormSegundoTxt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="DivPrimeirosInputs">
            <input
              className="FormCampo"
              name="nome"
              placeholder="Nome"
              required
              type="text"
              onChange={this.nomeChange}
            ></input>
            <input
              className="FormCampo"
              name="email"
              placeholder="Email"
              required
              type="email"
              onChange={this.emailChange}
            ></input>
          </div>
          <div className="DivSegundoInput">
            <input
              className="FormCampoMsg"
              name="mensagem"
              placeholder="Mensagem..."
              required
              type="text"
              onChange={this.MensagemChange}
            ></input>
          </div>
          <button
            className="FormEnviar"
            onClick={this.enviarForm}
            disabled={this.state.disabled}
          >
            ENVIAR
          </button>
        </form>
      </div>
    );
  }
}

export default TerceiroConteudo;
