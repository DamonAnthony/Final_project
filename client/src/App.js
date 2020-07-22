import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import M from "../node_modules/materialize-css/dist/js/materialize.min";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <NavBar />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
