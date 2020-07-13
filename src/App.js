import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import M from "../node_modules/materialize-css/dist/js/materialize.min";
import NavBar from "./components/NavBar/NavBar";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
