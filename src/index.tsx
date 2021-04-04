import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import DynamicSong from "./pages/DynamicSong/DynamicSong";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:id" component={DynamicSong} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
