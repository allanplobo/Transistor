import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
