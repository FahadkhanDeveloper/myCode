// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./app";
// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(<App />);
