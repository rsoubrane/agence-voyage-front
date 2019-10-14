//React
import React from "react";
import ReactDOM from "react-dom";

//Imports
import App from "./App";

//Styles
import "./index.css";

//Service Worker
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
