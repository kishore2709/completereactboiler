import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import InitRouter from "./InitRouter";
import registerServiceWorker from "./registerServiceWorker";
import "./styles.scss";
import "font-awesome/css/font-awesome.css";
import { store } from "./store";

require("./favicon.ico");

ReactDOM.render(
  <Provider store={store}>
    <InitRouter />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
