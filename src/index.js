import React from "react";
import ReactDOM from "react-dom";
import UseReducer from "./UseReducer.jsx";
import UseState from "./UseState.jsx";

ReactDOM.render(
  <React.StrictMode>
    <UseReducer />
    <p />
    <UseState />
  </React.StrictMode>,
  document.getElementById("root")
);
