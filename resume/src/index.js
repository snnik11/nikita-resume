import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let city = {
  name: "madrid",
  country: "spain",
};
ReactDOM.render(
  // React.createElement("div", null, "Hello"),

  <h1> {city.name} </h1>,
  document.getElementById("root")
);
