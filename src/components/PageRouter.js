import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home.js";
// import Spacs from "../pages/Spacs.js";

// This componenet looks through all its children elements (Routes) and tries to render the
// first route where the path of that route matches the current URL. In this case, we want
// to serve exactly one route at a time and switching over them is a good way to do that.
function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/spacs">
          {/* <Spacs /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default PageRouter();
