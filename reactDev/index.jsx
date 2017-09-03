import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navbar.jsx";
// .\node_modules\.bin\webpack for build

ReactDOM.render(
  <div>
    <NavBar />
  </div>,
  document.querySelector("#searchStuff")
);