import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const ws = new WebSocket("ws://localhost:8080");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter ws={ws} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
