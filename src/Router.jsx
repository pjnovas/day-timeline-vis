
import { Router, Route, hashHistory } from "react-router";
import { render } from "react-dom";

import Home from "./components/index.jsx";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
);

render(routes, document.getElementById("app"));
