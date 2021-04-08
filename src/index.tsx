import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { ThemeProvider, Container } from "@material-ui/core";
import theme from "./theme/theme";
import Loader from "./components/Loader/Loader";
const App = React.lazy(() => import("./pages/App/App"));
const DynamicSong = React.lazy(() => import("./pages/DynamicSong/DynamicSong"));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Switch>
            <Suspense fallback={Loader}>
              <Route exact path="/" component={App} />
              <Route exact path="/:id" component={DynamicSong} />
            </Suspense>
          </Switch>
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
