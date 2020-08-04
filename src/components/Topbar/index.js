import React from "react";
import "./topbar.css";
import Logo from "../../assets/img/logo.png";

function Topbar() {
  return (
    <div className="Topbar">
      <img className="LogoImage" src={Logo} alt="Logo"></img>
      <p className="LogoName">SUPERGIANTGAMES</p>
    </div>
  );
}

export default Topbar;
