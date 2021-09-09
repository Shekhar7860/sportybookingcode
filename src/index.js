import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { initFacebookSdk } from "./helpers/init-facebook-sdk";
initFacebookSdk();

ReactDOM.render(<App />, document.querySelector("#root"));
