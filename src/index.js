import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
  <>
    <GlobalStyles></GlobalStyles>
    <App />
  </>,
  document.getElementById("root")
);
