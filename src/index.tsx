import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { ThemeProvider, Container } from "@material-ui/core";
import theme from "./theme/theme";
import App from "./pages/App/App";
import Loader from "./components/Loader/Loader";
const DynamicSong = React.lazy(() => import("./pages/DynamicSong/DynamicSong"));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/songs/:id" component={DynamicSong} />
            </Switch>
          </Suspense>
        </Router>
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
