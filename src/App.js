import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import PrimeiroConteudo from "./pages/Home/PrimeiroConteudo";
import SegundoConteudo from "./pages/Home/SegundoConteudo";
import TerceiroConteudo from "./pages/Home/TerceiroConteudo";
import ButtonToTop from "./components/ButtonToTop";

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <ButtonToTop />
      <PrimeiroConteudo />
      <SegundoConteudo />
      <TerceiroConteudo />
      <Footer />
    </React.Fragment>
  );
}

export default App;
