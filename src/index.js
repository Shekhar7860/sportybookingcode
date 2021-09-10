import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { initFacebookSdk } from "./helpers/init-facebook-sdk";
import { Provider } from "react-redux";
import { store } from "./redux/store";
initFacebookSdk();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
